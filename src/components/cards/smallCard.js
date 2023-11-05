import moment from "moment";
import React from "react";
import styles from './card.module.css';

export const SmallCard = (props) => {
    return(

        <>
            <div className={styles.mainSmallCard} onClick={()=> props.clickHandler(props?._id)}>
                <img
                    src={props.photo}
                    alt="Picture of the date"
                    width='100%'
                    style={{height: '230px'}}
                />

                <div className={styles.cardDetials}>
                    <p className={[styles.subtitle , styles.subtitleFont].join(' ')}>
                        {moment(props?.updatedAt).format("LLL")}
                    </p>
                    <h4 className={styles.title}>
                         {props?.title.length > 30 ? props?.title.substring(0, 30) + '...' : props?.title}
                    </h4>

                    <p className={styles.subtitle}>
                        {props?.shortDesc.length > 60 ? props?.shortDesc.substring(0, 60) + '...' : props?.shortDesc}
                    </p>
            

                </div>

            </div>
        </>
    )
}