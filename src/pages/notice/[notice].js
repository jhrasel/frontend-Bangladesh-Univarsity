import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import { useRouter } from "next/router";
import React from "react";
import { Card, Container } from "react-bootstrap";
import { useQuery } from "react-query";
import slider from "../../assets/image/news-banner.png";
import { Addmission } from "../../components/admission/index";
import { LatestSingleNotice } from "../../components/notice/LatestNotice";
// import { PdfReader } from '../../components/pdfReader/index';
import dynamic from "next/dynamic";
import styled from "../../pages/news/styled.module.css";
import ApiRequest from "../../services/api-services";
const Template = dynamic(() => import("../../components/pdfReader/index"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const NoticeItem = () => {
  const router = useRouter();
  const { notice } = router.query;

  const { data: noticeList, isLoading: noticeListLoading } = useQuery(
    ["single_notice", notice],
    () => ApiRequest.get(`notice/find/${notice}`)
  );
  const { isLoading: latestNoticeLoading, data: latestNotice } = useQuery(
    "latestNotice_single",
    () => ApiRequest.get("notice/all?page=1&perPage=5")
  );

  return (
    <div>
      <Container fluid style={{ padding: 0 }} className="mt_60">
        <div className={styled.mainPageBanner}>
          <div className={styled.banner}>
            <div className={styled.heading}>
              <img src={slider.src} alt="banner" />
            </div>
            <div className={styled.overlay}>
              <div className={styled.navigation}>
                <h4>{noticeList?.data?.data?.title}</h4>

                {/* <div className={styled.inner_navigation}>
                  <svg
                    onClick={() => {
                      router.push("/");
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M2 5.99998L8 1.33331L14 5.99998V13.3333C14 13.6869 13.8595 14.0261 13.6095 14.2761C13.3594 14.5262 13.0203 14.6666 12.6667 14.6666H3.33333C2.97971 14.6666 2.64057 14.5262 2.39052 14.2761C2.14048 14.0261 2 13.6869 2 13.3333V5.99998Z"
                      stroke="white"
                      strokeWidth="2"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 14.6667V8H10V14.6667"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                  &nbsp;
                  <p className="hide">
                    <span
                      onClick={() => {
                        router.push("/");
                      }}
                    >
                      Home
                    </span>
                    &nbsp; /{" "}
                    <span
                      onClick={() => {
                        router.push("/notice");
                      }}
                    >
                      Notice
                    </span>
                    {noticeList?.data?.data?.title &&
                      ` / ${
                        noticeList?.data?.data?.title.length > 30
                          ? noticeList?.data?.data?.title.slice(0, 30) + "..."
                          : ""
                      }`}
                  </p>
                  <p className="mbl_hide">
                    <span
                      onClick={() => {
                        router.push("/");
                      }}
                    >
                      Home
                    </span>
                    &nbsp; / &nbsp;
                    <span
                      onClick={() => {
                        router.push("/notice");
                      }}
                    >
                      Notice
                    </span>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className={styled.topCard}>
          <Card
            style={{ padding: "20px", border: "none" }}
            className="notice_card"
          >
            <p className={styled.title}>
              {moment(noticeList?.data?.data?.updatedAt).format("MMM Do YY")} /
              notice
            </p>
            {/* <h4 className={styled.subtitle}>{noticeList?.data?.data?.description}</h4> */}
            <div
              className={styled.subtitle}
              dangerouslySetInnerHTML={{
                __html: noticeList?.data?.data?.description,
              }}
            ></div>

            {/* <PDFViewer>
                        <Template date={noticeList?.data?.data?.updatedAt} description={noticeList?.data?.data?.description} />
                        </PDFViewer> */}
          </Card>
        </div>
        <div className={styled.padding}>
          <LatestSingleNotice
            latestNotice={latestNotice}
            style={true}
            singleRoute={true}
          />
        </div>
      </Container>

      <Addmission />
    </div>
  );
};
NoticeItem.getInitialProps = ({ query }) => {
  return { query };
};
export default NoticeItem;
