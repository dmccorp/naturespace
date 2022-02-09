import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";
import logo from "../images/logo.png";

const Footer = () => {
  const [userContact, setUserContact] = useState("");

  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <div className={styles.content__top}>
          <input
            type="text"
            className={styles.contact_input}
            placeholder="Email \ Phone"
            value={userContact}
            onChange={ e => setUserContact(e.target.value)}
          />
          <div className={styles.content__right_btn}>
            <button className={styles.content__right_btn_link} >
              CONTACT US
            </button>
          </div>
        </div>
        <div className={styles.content__left}>
          <span className={styles.content__left_text1}>LETS MAKE THE</span>
          <span className={styles.content__left_text2}>FUTURE BETTER</span>
        </div>
        <div className={styles.content__middle}>
          <div className={styles.logobox}>
            <Image
              className={styles.content__middle_img}
              src={logo}
              alt="logo"
              width={77}
              height={74}
            />
          </div>
          <span className={styles.content__middle_title}>NATURE SPACE</span>
          <div className={styles.content__middle_icons}>
            <Link href="">
              <img
                className={styles.content__middle_icons_img}
                src="images/icons/twitter.png"
                alt="twitter"
              />
            </Link>
            <Link href="">
              <img
                className={styles.content__middle_icons_img}
                src="images/icons/facebook.png"
                alt="facebook"
              />
            </Link>
            <Link href="">
              <img
                className={styles.content__middle_icons_img}
                src="images/icons/instagram.png"
                alt="instagram"
              />
            </Link>
          </div>
          <span className={styles.content__middle_email}>
            betterspace@naturespace.in
          </span>
        </div>
        <div className={styles.content__right}>
          <input
            type="text"
            className={styles.contact_input}
            placeholder="Email \ Phone"
            value={userContact}
            onChange={ e => setUserContact(e.target.value)}
          />
          <div className={styles.content__right_btn}>
            <button className={styles.content__right_btn_link} >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
