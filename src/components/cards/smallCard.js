import moment from "moment";
import React from "react";
import styles from "./card.module.css";

export const SmallCard = (props) => {
  const { _id, photo, title = "", shortDesc = "", updatedAt } = props || {};

  return (
    <>
      <div
        className={styles.mainSmallCard}
        onClick={() => props.clickHandler(_id)}
      >
        <img
          src={photo}
          alt="Picture of the date"
          width="100%"
          style={{ height: "230px" }}
        />

        <div className={styles.cardDetials}>
          <p className={[styles.subtitle, styles.subtitleFont].join(" ")}>
            {moment(updatedAt)?.format("LLL")}
          </p>
          <h4 className={styles.title}>
            {title.length > 30 ? title.substring(0, 30) + "..." : title}
          </h4>

          <p className={styles.subtitle}>
            {shortDesc.length > 60
              ? shortDesc.substring(0, 60) + "..."
              : shortDesc}
          </p>
        </div>
      </div>
    </>
  );
};
