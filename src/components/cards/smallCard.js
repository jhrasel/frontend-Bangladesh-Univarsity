import moment from "moment";
import React from "react";
import styles from './card.module.css';

export const SmallCard = (props) => {
    console.log('props', props)
    return(

        <>
            <div className={styles.mainSmallCard} onClick={()=> props.clickHandler(props?._id)}>
                <img
                    src={props.photo}
                    alt="Picture of the date"
                    width='100%'
                    style={{height: '380px'}}
                />
                {/*{*/}
                {/*    date && (*/}
                {/*        <div className={styles.date}>*/}
                {/*            <p>26 Feb</p>*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*}*/}

                <div className={styles.cardDetials}>
                    <p className={styles.subtitle}>
                        {props?.shortDesc.length > 50 ? props?.shortDesc.substring(0, 50) + '...' : props?.shortDesc}
                    </p>
                    <h4 className={styles.title}>{props?.title}</h4>
                    <p className={[styles.subtitle , styles.subtitleFont].join(' ')}>
                        {moment(props?.updatedAt).format("LLL")}
                    </p>

                </div>

            </div>
        </>
    )
}