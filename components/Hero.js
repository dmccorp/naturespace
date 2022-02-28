import React from "react";
import styles from "../styles/Hero.module.scss";
import Image from "next/image";
import logo from "../images/logo.png";

const Hero = ({displayBg=false}) => {

  return (
    <div className={`${displayBg ? styles.hero_bg  : ''} ${styles.hero} `}>
      <div className={styles.logobox}>
        <Image src={logo} alt="logo" width={77} height={74} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.header}>
          NATURE MAKES US<span className={styles.header_break}>FIND PEACE</span>
        </h1>
        <p className={styles.para}>
        Lets explore the emotional state of ‘finding peace’ together
        </p>
      </div>
    </div>
  );
};

export default Hero;
