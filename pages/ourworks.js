import React from "react";
import Head from "next/head";
import styles from "../styles/OurWorks.module.scss";
import ImageGallery from "../components/ImageGallery";
import PageHeader from "../components/PageHeader";
import HeaderLogo from "../components/HeaderLogo";

export default function OurWorks() {
  return (
    <section className={styles.container}>
      <Head>
        <title>naturespace</title>
        <meat
          name="keywords"
          content="interior, home interior, gardening, landscape, nature"
        />
      </Head>
      <HeaderLogo />
      <div className={styles.header_wrap}>
         <PageHeader header="Our exquisite" stroke=" Works"/>
      </div>
      
      <ImageGallery />
      <ImageGallery />
    </section>
  );
}
