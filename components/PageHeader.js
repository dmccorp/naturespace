import React from "react";
import styles from "../styles/PageHeader.module.css";

const PageHeader = ({ header = "Header", stroke = "stroke" }) => {
  return (
    <h2 className={styles.header}>
      {header}
      <span className={styles.header__stroke}>{stroke}</span>
    </h2>
  );
};

export default PageHeader;
