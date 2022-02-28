import React from "react";
import { HorizontalImageItem } from "./HorizontalImageItem";
import styles from "../styles/ImageGallery.module.scss";

const ImageGallery = (props) => {
  const {
    img1 = "portfolio/1.jpg",
    img2 = "portfolio/2.jpg",
    img3 = "portfolio/3.jpg",
    img4 = "portfolio/4.jpg",
    img7 = "portfolio/7.jpg",
  } = props;
  return (
    <div className={styles.ImageGallery}>
      <div className={styles.galleryWrapMobile}>
        <HorizontalImageItem imgLarge={img1} imgSmall={img2} />
        <HorizontalImageItem imgLarge={img3} imgSmall={img4} isReverse={true} />
      </div>

      <div className={styles.galleryWrap}>
        <div className={styles.main}>
          <img
            src={`images/${img1}`}
            alt="works1"
            className={styles.galleryWrap__img}
          />
        </div>
        <div className={styles.side}>
          <div className={styles.side__1}>
            <img
              src={`images/${img2}`}
              alt="works2"
              className={`${styles.galleryWrap__img} ${styles.side__img1}`}
            />
          </div>
          <div className={styles.side__2}>
            <img
              src={`images/${img3}`}
              alt="works3"
              className={`${styles.galleryWrap__img} ${styles.side__img2}`}
            />
          </div>
        </div>
        <div className={styles.bottomSec}>
          <div className={styles.bottomSec__1}>
            <img
              src={`images/${img4}`}
              alt="works4"
              className={`${styles.galleryWrap__img} ${styles.bottomSec__img1}`}
            />
          </div>
          <div className={styles.bottomSec__2}>
            <img
              src={`images/${img7}`}
              alt="works5"
              className={`${styles.galleryWrap__img} ${styles.bottomSec__img2}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
