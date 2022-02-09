import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import styles from '../styles/HeaderLogo.module.css'

const HeaderLogo = () => {
  return (
    <div className={styles.logobox}>
      <Image src={logo} alt="logo" width={77} height={74} />
    </div>
  );
};

export default HeaderLogo;
