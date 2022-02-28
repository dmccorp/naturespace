import React from "react";
import ReactPlayer from "react-player";
import styles from "../styles/VideoEditorial.module.scss";

const VideoEditorial = () => {

  return (
    <div className={styles.main}>
      <div>
        <h2 className={styles.header}>
          <div className={styles.underline} />
          Who we <span className={styles.header_sub}>are</span>
        </h2>
        <div className={styles.content}>
          <div className={styles.video}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=jOqtzdvj9Fc"
              playing={true}
              muted={true}
              width="100%"
              height="100%"
              loop={true}
            />

          </div>
          <span className={styles.description}>
            Naturespace’s sustainable landscape projects have exponentially
            influenced the positive mental and physical health by creating
            mindful experiences through thriving lush gardens, vertical green
            walls and more, we are bringing back gardens to the garden city.
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoEditorial;
