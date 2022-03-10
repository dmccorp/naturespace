import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import { collection, addDoc } from "firebase/firestore";
import logo from "../images/logo.png";
import { db } from "../firebase-config";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  const [userContact, setUserContact] = useState(""),
    [isValidContact, setValidContact] = useState(false),
    userRef = collection(db, "users"),
    modalStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#206857",
        borderRadius: "30px",
        border: "1px solid #206857",
      },
    };

  async function handleContact() {
    setValidContact(false);
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      regexMobile =
        /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm,
      isEmail = userContact.match(regexEmail),
      isMobile = userContact.match(regexMobile);

    if (isEmail || isMobile) {
      await addDoc(userRef, { contact: userContact });
      setValidContact(true);
      setIsOpen(true);
    } else {
      setIsOpen(true);
    }
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  const modalMsg = isValidContact
    ? "Thanks for your interest with us, we will connect you shortly."
    : "Please enter valid mobile number or email address.";

  return (
    <section className={styles.container}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Example Modal"
        className={styles.contact_modal}
      >
        <div className={styles.modalMessage}>{modalMsg}</div>
      </Modal>
      <div className={styles.content}>
        <div className={styles.content__top}>
          <input
            type="text"
            className={styles.contact_input}
            placeholder="Email \ Phone"
            value={userContact}
            onChange={(e) => setUserContact(e.target.value)}
          />
          <div className={styles.content__right_btn}>
            <button
              className={styles.content__right_btn_link}
              onClick={handleContact}
            >
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
            {/* <Link href="">
              <img
                className={styles.content__middle_icons_img}
                src="images/icons/twitter.png"
                alt="twitter"
              />
            </Link> */}
            {/* <Link href="">
              <img
                className={styles.content__middle_icons_img}
                src="images/icons/facebook.png"
                alt="facebook"
              />
            </Link> */}
            <Link href="https://www.instagram.com/nature_space_org/?utm_medium=copy_link">
              <a target="_blank">
                <img
                  className={styles.content__middle_icons_img}
                  src="images/icons/instagram.png"
                  alt="instagram"
                />
              </a>
            </Link>
          </div>
          <span className={styles.content__middle_email}>
           contact@naturespace.ae
          </span>
        </div>
        <div className={styles.content__right}>
          <input
            type="text"
            className={styles.contact_input}
            placeholder="Email \ Phone"
            value={userContact}
            onChange={(e) => setUserContact(e.target.value)}
          />
          <div className={styles.content__right_btn}>
            <button
              className={styles.content__right_btn_link}
              onClick={handleContact}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
