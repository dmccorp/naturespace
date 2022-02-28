import React from "react";
import StepItem from "./StepItem";
import styles from "../styles/Steps.module.scss";

const stepList = [
  {
    stepNumber: "01",
    title: "Brainstorming",
    description:
      "The first step is understanding the clients requirments.",
    imgSrc: "steps/brainstorming.png",
    icon: "steps/icon1.png",
  },
  {
    stepNumber: "02",
    title: "3D Designing",
    description:
      "The place where our imagination takes shape.",
    imgSrc: "steps/3dDesign.png",
    icon: "steps/icon2.png",
  },
  {
    stepNumber: "03",
    title: "Planting",
    description:
      "Implimenting the perfect landscape for your needs.",
    imgSrc: "steps/planting.png",
    icon: "steps/icon3.png",
  },
  {
    stepNumber: "04",
    title: "Automation",
    description:
      "Taken care by our fully autonoumous end to end system.",
    imgSrc: "steps/automation.png",
    icon: "steps/icon4.png",
  },
  {
    stepNumber: "05",
    title: "Maintanence",
    description:
      "Frequent maintanence for longlasting everlush gardens.",
    imgSrc: "steps/maintanence.png",
    icon: "steps/icon5.png",
  },
];


const stepItems = () => {
  return stepList.map((step, index) => {
    return <StepItem key={index} index={index} step={step} />
  });
};

const Steps = () => {

  return (
    <section className={styles.container}>
      <h2 className={styles.header}>
        <div className={styles.underline} />
        How we <span className={styles.header_sub}>accomplish</span>
      </h2>
      <div className={styles.stepItems}>
        <div className={styles.stepsWrap}>{stepItems()}</div>
      </div>
    </section>
  );
};

export default Steps;
