import React from "react";
import StepItem from "./StepItem";
import styles from "../styles/Steps.module.scss";

const stepList = [
  {
    stepNumber: "01",
    title: "Brainstorming",
    description:
      "It is a long established fact t hat a will be distracted by the readable",
    imgSrc: "steps/brainstorming.png",
    icon: "steps/icon1.png",
  },
  {
    stepNumber: "02",
    title: "3D Designing",
    description:
      "It is a long established fact t hat a will be distracted by the readable",
    imgSrc: "steps/brainstorming.png",
    icon: "steps/icon2.png",
  },
  {
    stepNumber: "03",
    title: "Planting",
    description:
      "It is a long established fact t hat a will be distracted by the readable",
    imgSrc: "steps/brainstorming.png",
    icon: "steps/icon3.png",
  },
  {
    stepNumber: "04",
    title: "Automation",
    description:
      "It is a long established fact t hat a will be distracted by the readable",
    imgSrc: "steps/brainstorming.png",
    icon: "steps/icon3.png",
  },
  {
    stepNumber: "05",
    title: "Maintanence",
    description:
      "It is a long established fact t hat a will be distracted by the readable",
    imgSrc: "steps/brainstorming.png",
    icon: "steps/icon3.png",
  },
];


const stepItems = () => {
  return stepList.map((step, index) => {
    return <StepItem  index={index} step={step} />
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
