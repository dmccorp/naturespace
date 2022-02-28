import React from "react";
import Head from "next/head";
import HeaderLogo from "../components/HeaderLogo";
import PageHeader from "../components/PageHeader";
import ImageGallery from "../components/ImageGallery";
import ImageEditor from "../components/ImageEditor";
import PlantsGallery from '../components/PlantsGallery'

import styles from "../styles/Indoors.module.css";

const Indoor = () => {
  return (
    <section className={styles.container}>
      <Head>
        <title>naturespace</title>
        <meat name="keywords" content="interior, home interior, gardening, landscape, nature, indoor gardening, outdoor gardening, automation, landscaping" />
      </Head>
      <div className={styles.content}>
        <HeaderLogo />
        <div className={styles.header_wrap}>
          <PageHeader header="Our exquisite" stroke=" garden" />
        </div>
        <ImageEditor
        src='desktop_features/indoor.png'
        description='Our indoor garden brings you the green lush of the forest 
        to your living room, which helps to maintain the positive mental and physical health by creating a mindful and peaceful experiences.'
        header='Indoor'
        stroke='gardening'
        />
        {/* <PlantsGallery /> */}
        <div className={styles.imgGalleryHeader}>
          <PageHeader header="Our exquisite" stroke=" garden" />
        </div>
        <ImageGallery />
      </div>
    </section>
  );
};

export default Indoor;
