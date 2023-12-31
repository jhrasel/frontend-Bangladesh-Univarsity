import { useRouter } from "next/router";
import image from '../../assets/image/tabImg.png';
import { Buttons } from "../../components/buttons/button";
import styles from './card.module.css';
export const CardWithImage = (props) => {
    const {isVisiableLftImg, isVisiableRightImg, button, title, description, photo, mblIsVisible} = props;
    const router = useRouter();
    const routerHandler = () => {
        router.push('/contact-us')
    }
  return(
      <div className={styles.mainCardWithImg}>
          {
              isVisiableLftImg && (
                  <div className={styles.leftImg}>
                      <img src={props.photo} alt='cardImg'/>
                  </div>
              )
          }

        <div className={styles.cardText}>
            <div>
                <h4>{title}</h4>
                <p>
                    {description}
                  </p>
                  {
                      mblIsVisible && (
                          <div className={styles.mbl_hide}>
                                <div className={styles.mbl_leftImg}>
                                    <img src={photo || image.src} alt='cardImg'/>
                                </div>
                            </div>
                    )
                  }
                {
                    button && (
                        <Buttons text={'Apply Here'} bgColor={'#AD1F1F'} color={'#fff'} click={routerHandler}/>
                    )
                }
            </div>
        </div>
          {
              isVisiableRightImg && (
                  <div className={styles.leftImg} style={{marginLeft: '20px'}}>
                      <img src={photo || image.src} alt='cardImg'/>
                  </div>
              )
          }
      </div>
  )
}