import styles from './styles.module.css'
import bannerImg from "../../assets/image/slider.png";
export const Research = () => {
  return(
      <div className={styles.mainResearch}>
          <img src={bannerImg.src} alt={'bannerImg'}/>
          <div className={styles.researchBody}>
              <h1 className={'headingTitle'} style={{margin: '40px 0px'}}>
                  Research Is Creating New <br /> Knowledge
              </h1>
              <div className={styles.researchHeader}>
                  <p>All Available Research In Bangladesh University</p>
              </div>
              <div className={styles.researchTableBody}>
                  <p> <span>01.</span> &nbsp;&nbsp; Introduction of computer Science</p>
                  <p> <span className={'arrow'}>&#8250;</span> </p>
              </div>
              <div className={styles.researchTableBody}>
                  <p><span>02.</span> &nbsp;&nbsp; Web Engineering, Mobile Computing</p>
                  <p> <span className={'arrow'}>&#8250;</span> </p>
              </div>
              <div className={styles.researchTableBody}>
                  <p> <span>03.</span> &nbsp;&nbsp; Introduction of computer Science</p>
                  <p> <span className={'arrow'}>&#8250;</span> </p>
              </div>
              <div className={styles.researchTableBody}>
                  <p><span>04.</span> &nbsp;&nbsp; Web Engineering, Mobile Computing</p>
                  <p> <span className={'arrow'}>&#8250;</span> </p>
              </div>
          </div>
      </div>
  );
}