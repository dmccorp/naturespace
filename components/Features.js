import React, { useEffect, useState } from "react";
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
      text: "Wall garden",
      img: "wall.png",
    },
    {
      id: 4,
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
  const [windowAvailable, updateWindowAvailable] = useState(false);


  useEffect(()=> {
    setTimeout(()=> {
      // window.updateProgress(100);
    }, 100);
    updateWindowAvailable(true);
  }, []);

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
    let width = window.innerWidth / 5;
    let selectedIndex = featureListItems.map((d,i)=>({d,i})).filter(d=>d.d.selected)[0].i
    let offset = ((window.innerWidth - width) / 2) - (selectedIndex * width);
    return featureListItems.map((feature, index) => {
      let isLeft = index < selectedIndex;
      let style = {
        left: (offset + (index * width)) + 'px', 
        top: (feature.selected || isLeft) ? '50px' : 0, 
        width: width + 'px',
        opacity: 1 + ((selectedIndex - index) * -0.4),
        transform: isLeft ? "scale(0.8)" : ""
      }
      return (
        <Link href="/indoors"
        key={index}>
          <div
            className={`${styles.feature} ${
              feature.selected && styles.activeFeature
            }`}
            style={style}
          >
            <div className={styles.feature_image}>
              <Image src={indoor} alt={feature.text}/>
            </div>
            <span className={styles.feature_description}>{feature.text}</span>
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

  return windowAvailable && (
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
