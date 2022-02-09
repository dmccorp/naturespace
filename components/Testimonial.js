import React from "react";
import Slider from "react-slick";
import styles from "../styles/Testimonials.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const feedbacks = [
  {
    id: 1,
    name: "Jennifer John",
    comments:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even sl",
    avatar: "feedback/JenniferJohn.png",
  },
  {
    id: 2,
    name: "Jennifer John",
    comments:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffere",
    avatar: "feedback/JenniferJohn.png",
  },
  {
    id: 3,
    name: "Jennifer John",
    comments:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffere",
    avatar: "feedback/JenniferJohn.png",
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
    return feedbacks.map((feedback) => {
      return (
        <div className={styles.feedbackItem}>
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
