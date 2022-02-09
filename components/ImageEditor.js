import React from "react";
import styles from "../styles/ImageEditor.module.scss";

const ImageEditor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrap}>
        <img src="images/indoor/garden.png" alt="garden" />
      </div>
      <div className={styles.description}>
        <h2 className={styles.header}>
          Indoor
          <span className={styles.header__stroke}> gardening</span>
        </h2>
        <p className={styles.text}>
          It is a long established fact t hat a reader will be distracted by the
          readable content of a page when looking at its layout.stablished fact
          t hat a reader will be. Typography
        </p>
      </div>
    </div>
  );
};

export default ImageEditor;
