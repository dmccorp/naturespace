import React from "react";
import styles from "../styles/Hero.module.scss";
import Image from "next/image";
import logo from "../images/logo.png";

const Hero = () => {

  return (
    <div className={styles.hero}>
      <div className={styles.logobox}>
        <Image src={logo} alt="logo" width={77} height={74} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.header}>
          NATURE MAKES US<span className={styles.header_break}>FIND SPACE</span>
        </h1>
        <p className={styles.para}>
          The nature space is the place all the way close to the nature
        </p>
      </div>
    </div>
  );
};

export default Hero;
