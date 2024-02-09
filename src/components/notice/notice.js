import moment from "moment";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import slider from "../../assets/image/notice.png";
import { Addmission } from "../../components/admission/index";
import { WhyPreloader } from "../../components/homePage/whyUs/whyPreloader";
import { PageBanner } from "../../components/pagebanner/index";
import ApiRequest from "../../services/api-services";
import { LatestSingleNotice } from "./LatestNotice";
import styles from "./styles.module.css";

export const Notice = () => {
  const Router = useRouter();
  const [id, setId] = useState(1);

  const { isLoading: allNoticeLoading, data: allNotice } = useQuery(
    ["allNotice"],
    () => ApiRequest.get(`notice/all?page=0&perPage=10`)
  );

  const { isLoading: allPaginationNoticeLoading, data: allPaginationNotice } =
    useQuery(["all_Notice", id], () =>
      ApiRequest.get(`notice/all?page=${id}&perPage=10`)
    );

  const { isLoading: latestNoticeLoading, data: latestNotice } = useQuery(
    "latestNotice",
    () => ApiRequest.get("notice/all?page=1&perPage=5")
  );

  const allNoticeData = useMemo(() => {
    return allNotice?.data?.data.concat(allPaginationNotice?.data?.data || []);
  }, [allPaginationNotice, allNotice]);

  const singleNoticeHandler = (_id) => {
    Router.push({
      pathname: `notice/${_id}`,
    });
  };

    const loadHandler = () => {
    setId(id + 1);
  };
  const previousLoadHandler = () => {
    setId(id - 1);
  }

  return (
    <>
      <Container fluid style={{ padding: 0 }} className="mt_60">
        <PageBanner title={"Notice"} photo={slider.src} position={"top"} />
      </Container>

      <Container>
        <div className={styles.mainNotice}>
          <LatestSingleNotice
            latestNotice={latestNotice}
            style={false}
            singleRoute={false}
          />
          <div className={styles.mainNoticeBody}>
            <h1 className={[styles.heading, styles.mblHeading].join(" ")}>
              ALL Notice
            </h1>
            {allPaginationNoticeLoading && <WhyPreloader />}
            {allPaginationNotice?.data?.data?.map((notice, index) => {
              return (
                <div key={index} className={styles.noticeItem}>
                  <div className={styles.noticeDate}>
                    <p>{moment(notice?.date).format("MMM Do YY")}</p>
                  </div>
                  <div className={styles.noticeDetails}>
                    <h4>{notice?.title}</h4>
                    <p>{notice?.shortDesc}</p>
                    <a
                      href={`/notice/${notice?._id}`}
                      onClick={() => singleNoticeHandler(notice?._id)}
                      className={"readMore"}
                      style={{
                        paddingBottom: "10px",
                        justifyContent: "flex-start",
                      }}
                    >
                      Read More <span className={"arrow"}>&#8250;</span>
                    </a>
                  </div>
                </div>
              );
            })}

            {allPaginationNotice?.data?.data?.length === 0 && (
              <p className={styles.noData} style={{color: 'red'}}> &nbsp;&nbsp; No Data Found!</p>
            )}
            
      <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0px 3px",
            flexDirection: "row-reverse",
          }}
        >
          <a
            className={"readMore"}
            onClick={loadHandler}
            style={
              allPaginationNotice?.data?.totalItems >= id
                ? { paddingBottom: "10px" }
                : {
                    opacity: "0.4",
                    pointerEvents: "none",
                    paddingBottom: "10px",
                  }
            }
          >
            Next
          </a>

          <a
            className={"readMore"}
            style={
              allPaginationNotice?.data?.currentPage > 1
                ? { paddingBottom: "10px" }
                : {
                    opacity: "0.4",
                    pointerEvents: "none",
                    paddingBottom: "10px",
                  }
            }
            onClick={previousLoadHandler}
            disabled
          >
            Previous
          </a>
        </div>
  
          </div>
          
        </div>
      </Container>

      <Addmission />
    </>
  );
};
