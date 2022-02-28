import React from "react";
import styles from "../styles/ImageEditor.module.scss";

const ImageEditor = ({src='', description='', header='', stroke=''}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrap}>
        <img src={`images/${src}`} alt="garden" />
      </div>
      <div className={styles.description}>
        <h2 className={styles.header}>
          {header}
          <span className={styles.header__stroke}> {stroke}</span>
        </h2>
        <p className={styles.text}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ImageEditor;
