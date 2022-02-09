import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import indoor from "../images/indoor.png";
import outdoor from "../images/outdoor.png";

import styles from "../styles/Features.module.scss";

const featureList = [
    {
      id: 1,
      text: "Indoor Gargening",
      img: indoor,
      selected: true,
    },
    {
      id: 2,
      text: "Outdoor Gargening",
      img: outdoor,
      selected: false,
    },
    {
      id: 3,
      text: "Landscaping",
      img: outdoor,
      selected: false,
    },
  ],
  featureList_mob = [
    {
      id: 1,
      text: "Indoor Gargening",
      img: "indoor.png",
    },
    {
      id: 2,
      text: "Landscaping",
      img: "landscape.png",
    },
    {
      id: 3,
      text: "Wall garden",
      img: "wall.png",
    },
    {
      id: 4,
      text: "Outdoor Gargening",
      img: "outdoor.png",
    },
  ];

const Features = () => {
  const [featureListItems, setFeatureList] = useState(featureList);

  const progressBarItems = () => {
    return featureListItems.map((feature, index) => {
      const lastItem = index === featureListItems.length - 1;
      return (
        <>
          <div className={styles.btnWrap} key={index}>
            <div id={feature.id} className={styles.selectbtnOuter}>
              <div
                className={`${styles.selectBtnInner} ${
                  feature.selected ? styles.activeBtn : ""
                }`}
              />
            </div>
          </div>

          {!lastItem && <div className={styles.hr} />}
        </>
      );
    });
  };

  const contentItem = () => {
    return featureListItems.map((feature, index) => {
      return (
        <Link href="/indoors"
        key={index}>
          <div
            className={`${styles.feature} ${
              feature.selected && styles.activeFeature
            }`}
          >
            <Image src={indoor} alt={feature.text} height="270" width="270" />
            <span className={styles.description}>{feature.text}</span>
          </div>
        </Link>
      );
    });
  };

  const arrowClickHandle = (arrowType) => {
    const currentIndex = featureListItems.findIndex(
      (item) => item.selected === true
    );
    const currentItem = featureListItems.find((item) => item.selected === true);
    const isRightArrow = arrowType === "right";

    if (isRightArrow && currentIndex == featureListItems.length - 1) return;

    if (!isRightArrow && currentIndex == 0) return;

    let features = [...featureListItems];

    features.forEach((item) => {
      let id = isRightArrow ? currentItem.id + 1 : currentItem.id - 1;
      if (item.id === id) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
    setFeatureList(features);
  };

  const getfeatures = () => {
    return featureList_mob.map((item, index) => {
      const isLeft = index % 2 === 0;
      return (
        <div key={index} className={`${styles.image_section__item} ${isLeft ? styles.leftItem : styles.rightItem}`}>
          <div className={styles.image_section__item_wrap}>
            <img
              src={`images/mob_features/${item.img}`}
              alt={item.text}
              className={styles.image_section__item_img}
            />
            <span className={styles.image_section__item_title}>{item.text}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.content_desktop}>
        <div className={styles.content}>{contentItem()}</div>
        <div className={styles.progressbar}>
          {progressBarItems()}
          <div className={styles.arrowWrap}>
            <div
              onClick={() => arrowClickHandle("left")}
              className={`${styles.arrow} ${styles.left}`}
            />
            <div
              onClick={() => arrowClickHandle("right")}
              className={`${styles.arrow} ${styles.right}`}
            />
          </div>
        </div>
      </div>
      <div className={styles.content_mobile}>
        <h2 className={styles.header}>
          <div className={styles.underline} />
          What we <span className={styles.header_sub}>do</span>
        </h2>

        <div className={styles.image_section}>{getfeatures()}</div>
      </div>
    </div>
  );
};

export default Features;
