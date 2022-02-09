import React from "react";
import styles from "../styles/ImageGallery.module.scss";

const ImageGallery = (props) => {
  const {
    img1 = "works/work_1.png",
    img2 = "works/work_4.png",
    img3 = "works/work_2.png",
    img4 = "works/work_5.png",
    img5 = "works/work_3.png",
  } = props;
  return (
    <div className={styles.ImageGallery}>
      <div className={styles.galleryWrapMobile}>
        <div className={`${styles.galleryWrapMobile__imgWrap}`}>
          <div className={styles.imgLarge}>
            <img
              src={`images/${img1}`}
              alt="Gallery image 1"
              className={styles.imgLarge}
            />
          </div>
          <div className={styles.imgSmall}>
            <img
              src={`images/${img3}`}
              alt="Gallery image 1"
              className={styles.imgSmall}
            />
          </div>
        </div>
        <div
          className={`${styles.galleryWrapMobile__imgWrap} ${styles.galleryWrapMobile__reverse}`}
        >
          <div className={styles.imgLarge}>
            <img
              src={`images/${img1}`}
              alt="Gallery image 1"
              className={styles.imgLarge}
            />
          </div>
          <div className={styles.imgSmall}>
            <img
              src={`images/${img3}`}
              alt="Gallery image 1"
              className={styles.imgSmall}
            />
          </div>
        </div>
      </div>

      <div className={styles.galleryWrap}>
        <div className={styles.main}>
          <img
            src={`images/${img1}`}
            alt="Gallery image 1"
            className={styles.galleryWrap__img}
          />
        </div>
        <div className={styles.side}>
          <div className={styles.side__1}>
            <img
              src={`images/${img2}`}
              alt="Gallery image 1"
              className={`${styles.galleryWrap__img} ${styles.side__img1}`}
            />
          </div>
          <div className={styles.side__2}>
            <img
              src={`images/${img3}`}
              alt="Gallery image 1"
              className={`${styles.galleryWrap__img} ${styles.side__img2}`}
            />
          </div>
        </div>
        <div className={styles.bottomSec}>
          <div className={styles.bottomSec__1}>
            <img
              src={`images/${img4}`}
              alt="Gallery image 1"
              className={`${styles.galleryWrap__img} ${styles.bottomSec__img1}`}
            />
          </div>
          <div className={styles.bottomSec__2}>
            <img
              src={`images/${img5}`}
              alt="Gallery image 1"
              className={`${styles.galleryWrap__img} ${styles.bottomSec__img2}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
