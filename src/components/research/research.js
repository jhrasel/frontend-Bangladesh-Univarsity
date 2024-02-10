import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import reserch_banner from "../../assets/image/research_banner.png";
import { Addmission } from "../../components/admission/index";
import { PageBanner } from "../../components/pagebanner/index";
import ApiRequest from "../../services/api-services";
import styles from "./styles.module.css";

export const Research = () => {
  const Router = useRouter();
  const [id, setId] = useState(1);

  const { isLoading: allNoticeLoading, data: allResearch } = useQuery(
    ["allNotice", id],
    () => ApiRequest.get(`research/approved/all?page=${id}&perPage=10`)
  );

  const singleHandler = (_id) => {
    Router.push({
      pathname: `research/${_id}`,
    });
  };
  const loadHandler = () => {
    setId(id + 1);
  };
  const previousLoadHandler = () => {
    setId(id - 1);
  };
  return (
    <div className={styles.mainResearch}>
      <Container fluid style={{ padding: 0 }} className="mt_60">
        <PageBanner
          title={"Research"}
          photo={reserch_banner.src}
          position={"top"}
        />
      </Container>
      <div className={styles.researchBody}>
        <div className={styles.researchHeader}>
          <p>
            Research In Department of CSE, Bangladesh University
          </p>
        </div>
        {allResearch?.data?.data?.map((data, i) => {
          return (
            <div
              key={i}
              className={styles.researchTableBody}
              onClick={() => singleHandler(data?._id)}
            >
              <p style={{textTransform: 'capitalize'}}> &nbsp;&nbsp; {data?.title}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                style={{ cursor: "pointer" }}
              >
                <g mask="url(#mask0_1020_1347)">
                  <path
                    d="M15.9997 26.6669L14.4333 25.1005L22.3997 17.1005L5.33325 17.1005V14.9005L22.3997 14.9005L14.4333 6.90051L15.9997 5.33411L26.6661 16.0005L15.9997 26.6669Z"
                    fill="#EB2A2E"
                  />
                </g>
              </svg>
            </div>
          );
        })}

        {allResearch?.data?.data?.length === 0 && (
          <p className={styles.noData}> &nbsp;&nbsp; No Data</p>
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
              allResearch?.data?.totalItems >= id
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
              allResearch?.data?.totalItems <= id
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

      <Addmission />
    </div>
  );
};
