import React from "react";
import styles from '../styles/HorizontalImageItem.module.scss'

export const HorizontalImageItem = (props) => {

   const {isReverse = false, imgLarge, imgSmall } = props
  return (
    <div className={styles.imageGallery}>
      <div
        className={`${styles.imageGallery__imgWrap} ${isReverse && styles.imageGallery__reverse}`}
      >
        <div className={styles.imgLarge}>
          <img
            src={`images/${imgLarge}`}
            alt="Gallery image 1"
            className={styles.imgLarge}
          />
        </div>
        <div className={styles.imgSmall}>
          <img
            src={`images/${imgSmall}`}
            alt="Gallery image 2"
            className={styles.imgSmall}
          />
        </div>
      </div>
    </div>
  );
};
