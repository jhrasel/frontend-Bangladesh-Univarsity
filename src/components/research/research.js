import { useRouter } from "next/router";
import { Container } from 'react-bootstrap';
import { useQuery } from "react-query";
import reserch_banner from '../../assets/image/research_banner.png';
import { Addmission } from '../../components/admission/index';
import { PageBanner } from '../../components/pagebanner/index';
import ApiRequest from "../../services/api-services";
import styles from './styles.module.css';

export const Research = () => {
        const Router = useRouter();

    const { isLoading: allNoticeLoading, data: allNotice } = useQuery(['allNotice',], () => ApiRequest.get(`research/approved/all?page=0&perPage=10`))

    const singleHandler = (_id) => {
        Router.push({
            pathname: `research/${_id}`
        })
    }

return (
      <div className={styles.mainResearch}>
            <Container fluid style={{padding: 0}} className="mt_60">
                <PageBanner title={'Research'} photo={reserch_banner.src} position={'top'}/>
            </Container>
          <div className={styles.researchBody}>

              <div className={styles.researchHeader}>
                  <p>All Available Research In Bangladesh University</p>
              </div>
                    {
                        allNotice?.data?.body?.map((data, i) => {
                            return (
                            <div key={i} className={styles.researchTableBody} onClick={()=>singleHandler(data?._id)}>
                                <p> &nbsp;&nbsp; { data?.title}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g mask="url(#mask0_1020_1347)">
                                        <path d="M15.9997 26.6669L14.4333 25.1005L22.3997 17.1005L5.33325 17.1005V14.9005L22.3997 14.9005L14.4333 6.90051L15.9997 5.33411L26.6661 16.0005L15.9997 26.6669Z" fill="#EB2A2E"/>
                                    </g>
                                </svg>
                            </div>
                        )})
                    }
            </div>
            
            <Addmission />
      </div>
  );
}