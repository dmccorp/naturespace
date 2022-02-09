import React from "react";
import ReactPlayer from "react-player";
import styles from "../styles/VideoEditorial.module.scss";

const VideoEditorial = () => {
  return (
    <div className={styles.main}>
      <div>
        <h2 className={styles.header}>
          <div className={styles.underline} />
          Lorem ipsum <span className={styles.header_sub}>dollar</span>
        </h2>
        <div className={styles.content}>
          <div className={styles.video}>
            <ReactPlayer
            url="https://www.youtube.com/watch?v=JkaxUblCGz0"
            playing={true}
            muted={true}
            width='100%'
            height='100%'
            />
          </div>
          <span className={styles.description}>
            It is a long established fact t hat a reader will be distracted by
            the readable content of a page when looking at its layout.stablished
            fact t hat a reader will be.
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoEditorial;
