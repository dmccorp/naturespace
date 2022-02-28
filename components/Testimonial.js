import React from "react";
import Slider from "react-slick";
import styles from "../styles/Testimonials.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const feedbacks = [
  {
    id: 1,
    name: "Athena Hermit",
    comments:
      "Really overwhelmed by the quality of the work.",
    avatar: "feedback/athena.png",
  },
  {
    id: 2,
    name: "Nihas Nizar",
    comments:
      "My balcony was never the same before. It feels totally different with green lushy wall garden.",
    avatar: "feedback/nihas.png",
  },
  {
    id: 3,
    name: "Shibin Arakkan",
    comments:
      "Really loved the indoor garden, it fells like living in a forest with this beautiful waterfall and gardens.",
    avatar: "feedback/shibin.png",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnDotsHover: true,
  };

  const customerFeedbacks = () => {
    return feedbacks.map((feedback, key) => {
      return (
        <div className={styles.feedbackItem} key={key}>
          <p className={styles.feedbackItem__comment}>{feedback.comments}</p>

          <div className={styles.feedbackItem__user}>
            <img
              className={styles.feedbackItem__user__img}
              src={`images/${feedback.avatar}`}
              alt={feedback.name}
            />
            <span className={styles.feedbackItem__user__name}>
              {feedback.name}
            </span>
          </div>
        </div>
      );
    });
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.header}>
        <div className={styles.underline} />
        Customers who Found their
        <span className={styles.header_sub}> peace</span>
      </h2>

      <div className={styles.content}>
        <img
          src="images/feedback/ratings.png"
          alt="rating"
          className={styles.img_rating}
        />

        <div className={styles.feedback}>
          <Slider {...settings}>{customerFeedbacks()}</Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
