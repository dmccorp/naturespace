import React from "react";
import Head from "next/head";
import HeaderLogo from "../components/HeaderLogo";
import PageHeader from "../components/PageHeader";
import ImageGallery from "../components/ImageGallery";
import ImageEditor from "../components/ImageEditor";

import styles from "../styles/Indoors.module.css";

const Landscaping = () => {
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
          src='desktop_features/landscaping.png'
          description="Our experts will design perfect landscape for your space 
          and budget, all the way from outdoor personal forest to a mini garden in the living room."
          header="Landscaping"
        />
        <div className={styles.imgGalleryHeader}>
          <PageHeader header="Our exquisite" stroke=" garden" />
        </div>
        <ImageGallery />
      </div>
    </section>
  );
};

export default Landscaping;
