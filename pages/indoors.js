import React from "react";
import Head from "next/head";
import HeaderLogo from "../components/HeaderLogo";
import PageHeader from "../components/PageHeader";
import ImageGallery from "../components/ImageGallery";
import ImageEditor from "../components/ImageEditor";
import PlantsGallery from '../components/PlantsGallery'

import styles from "../styles/Indoors.module.css";

const Indoors = () => {
  return (
    <section className={styles.container}>
      <Head>
        <title>naturespace</title>
        <meat name="keywords" content="interior, home interior, gardening, landscape, nature" />
      </Head>
      <div className={styles.content}>
        <HeaderLogo />
        <div className={styles.header_wrap}>
          <PageHeader header="Our exquisite" stroke=" garden" />
        </div>
        <ImageEditor />
        <PlantsGallery />
        <div className={styles.imgGalleryHeader}>
          <PageHeader header="Our exquisite" stroke=" garden" />
        </div>
        <ImageGallery />
      </div>
    </section>
  );
};

export default Indoors;
