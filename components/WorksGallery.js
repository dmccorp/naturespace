import React from "react";
import Link from "next/link";
import { HorizontalImageItem } from "./HorizontalImageItem";
import styles from "../styles/WorksGallery.module.scss";

const WorksGallery = (props) => {
  const {
    img1 = "portfolio/1.jpg",
    img2 = "portfolio/2.jpg",
    img3 = "portfolio/3.jpg",
    img4 = "portfolio/4.jpg",
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
          <div className={styles.textWrap}>
          </div>
          <h2>
            Our exquisite <span>works</span>
          </h2>
        </div>
        <div className={styles.side}>
          <div className={styles.side__1}></div>
          <Link href="/ourworks">
            <div className={styles.side__2}>
              <img
                src={`images/${img2}`}
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
                src={`images/${img4}`}
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
        <HorizontalImageItem imgLarge={img1} imgSmall={img2}/>
        <HorizontalImageItem imgLarge={img3} imgSmall={img4} isReverse={true}/>

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
