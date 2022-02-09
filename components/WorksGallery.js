import React from "react";
import Link from "next/link";
import styles from "../styles/WorksGallery.module.scss";

const WorksGallery = (props) => {
  const {
    img1 = "works/work_1.png",
    img3 = "works/work_2.png",
    img5 = "works/work_3.png",
  } = props;

  return (
    <section>
      <div className={styles.galleryWrap}>
        <div className={styles.main}>
          <Link href="/ourworks">
            <img
              src={`images/${img1}`}
              alt="Gallery image 1"
              className={styles.galleryWrap__img}
            />
          </Link>
          <div className={styles.textWrap} style={{ display: "none" }}>
          </div>
          <h2 style={{ display: "none" }}>
            Our exquisite <span>works</span>
          </h2>
        </div>
        <div className={styles.side}>
          <div className={styles.side__1}></div>
          <Link href="/ourworks">
            <div className={styles.side__2}>
              <img
                src={`images/${img3}`}
                alt="Gallery image 2"
                className={`${styles.galleryWrap__img} ${styles.side__img2}`}
              />
            </div>
          </Link>
        </div>
        <div className={styles.bottomSec}>
          <div className={styles.bottomSec__1}></div>
          <Link href="/ourworks">
            <div className={styles.bottomSec__2}>
              <img
                src={`images/${img5}`}
                alt="Gallery image 1"
                className={`${styles.galleryWrap__img} ${styles.bottomSec__img2}`}
              />
            </div>
          </Link>
        </div>
        <div className={`${styles.btnExplore} ${styles.gallery__item__4}`}>
          <Link href="/ourworks">
            <button className={styles.btnExplore__btn}>Exlpore</button>
          </Link>
        </div>
      </div>

      <div className={styles.galleryWrapMobile}>
      <h2 className={styles.header}>
          <div className={styles.underline} />
          Our exquisite <span className={styles.header_sub}>works</span>
        </h2>
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

        <div className={`${styles.btnExplore} ${styles.gallery__item__4}`}>
          <Link href="/ourworks">
            <button className={styles.btnExplore__btn}>Exlpore</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorksGallery;
