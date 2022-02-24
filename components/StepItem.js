import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Steps.module.scss";

const StepItem = ({ index, step }) => {
    const [isActive, setIsActive] = useState(false);
  const scrollHandler = () => {
    if(inputRef && inputRef.current){
      const componentInfo = inputRef.current.getBoundingClientRect()
        if(componentInfo.y < 200){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    }
        
    },
    isOdd = index % 2 == 0,
    inputRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);


  return (
    <div ref={inputRef} id={`step-${index}`} className={`${styles.stepItem} ${isActive ? styles.activeStep : ''}`}>
      <div
        className={`${styles.stepItem__content} ${
          isOdd ? styles.stepItem__left : styles.stepItem__right
        }`}
      >
        <div className={styles.stepItem__imgWrap}>
          <div
            className={styles.stepItem__img}
            style={{
              backgroundImage: `linear-gradient(rgb(22 20 20 / 60%), rgb(22 20 20 / 60%)), url(images/${step.imgSrc})`,
            }}
          >
            <div
              className={styles.stepItem__icon}
              style={{
                backgroundImage: `url(images/${step.icon})`,
              }}
            />
          </div>
          <div className={styles.stepItem__text}>
            <h3 className={styles.stepItem__text__header}>{step.title}</h3>
            <p className={styles.stepItem__text__description}>
              {step.description}
            </p>
          </div>
        </div>
        <span className={styles.stepItem__stepOrder}>{step.stepNumber}</span>
      </div>
      <div className={styles.stepItem__divider} />
      <div className={styles.stepItem__divider_inactive} />
    </div>
  );
};

export default StepItem;
