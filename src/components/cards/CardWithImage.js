import styles from './card.module.css'
import image from '../../assets/image/tabImg.png'
import {Buttons} from "../../components/buttons/button";
import {useRouter} from "next/router";
export const CardWithImage = (props) => {
    const {isVisiableLftImg, isVisiableRightImg, button, title, description, photo} = props;
    const router = useRouter();
    const routerHandler = () => {
        router.push('/contact')
    }
  return(
      <div className={styles.mainCardWithImg}>
          {
              isVisiableLftImg && (
                  <div className={styles.leftImg}>
                      <img src={image.src} alt='cardImg'/>
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
                    button && (
                        <Buttons text={'Apple Here'} bgColor={'#AD1F1F'} color={'#fff'} click={routerHandler}/>
                    )
                }
            </div>
        </div>
          {
              isVisiableRightImg && (
                  <div className={styles.leftImg} style={{marginLeft: '20px'}}>
                      <img src={image.src} alt='cardImg'/>
                  </div>
              )
          }
      </div>
  )
}