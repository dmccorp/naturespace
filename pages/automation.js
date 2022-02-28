import React from "react";
import Head from "next/head";
import HeaderLogo from "../components/HeaderLogo";
import PageHeader from "../components/PageHeader";
import ImageGallery from "../components/ImageGallery";
import ImageEditor from "../components/ImageEditor";

import styles from "../styles/Indoors.module.css";

const Automation = () => {
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
          src='desktop_features/automation.png'
          description="Our advanced automation system powered by AI will maintain your garden better than any gardner, while you can monitor everything with your smartphone."
          header="Automation"
        />
        <ImageGallery />
      </div>
    </section>
  );
};

export default Automation;
