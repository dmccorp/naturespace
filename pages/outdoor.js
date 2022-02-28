import React from "react";
import Head from "next/head";
import HeaderLogo from "../components/HeaderLogo";
import PageHeader from "../components/PageHeader";
import ImageGallery from "../components/ImageGallery";
import ImageEditor from "../components/ImageEditor";

import styles from "../styles/Indoors.module.css";

const Outdoor = () => {
  return (
    <section className={styles.container}>
      <Head>
        <title>naturespace</title>
        <meat
          name="keywords"
          content="interior, home interior, gardening, landscape, nature, indoor gardening, outdoor gardening, automation, landscaping"
        />
      </Head>
      <div className={styles.content}>
        <HeaderLogo />
        <div className={styles.header_wrap}>
          <PageHeader header="Our exquisite" stroke=" garden" />
        </div>
        <ImageEditor
          src='desktop_features/outdoor.png'
          description="Our outdoor garden turns your place into a personal forest,
          a perfect place for relaxing with your loved ones with a beautiful view."
          header="Outdoor"
          stroke="gardening"
        />
        <ImageGallery />
      </div>
    </section>
  );
};

export default Outdoor;
