import React, { createRef, memo, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import styles from "../styles/Hero3D.module.scss";

import logo from "../images/logo.png";
import heroBG from "../images/hero/main_bg.jpg";
import heroMiddle from "../images/hero/tree.png";
import heroFG from "../images/hero/left_right.png";

const Hero = memo(() => {

  /**
   * 
   *  Parallax Config
   * 
   */

  const parallaxLayerConfig = {
    scale: 1.1,
    maxAngle: 6,
    layers: [
      { img: heroBG, movement: 0.005 },
      { img: heroMiddle, movement: 0.012 },
      { img: heroFG, movement: 0.03 },
    ]
  }

  /**
   * 
   *  Parallax Vars
   * 
   */

  let mouseValue = {
    x: 0,
    y: 0
  }
  let frameRef = createRef();
  let containerRef = createRef();

  /**
   * 
   *  Radial Parallax Methods
   * 
   */

  const initiatRefs =()=> {
    parallaxLayerConfig.layers.forEach(layer=>{
      layer.ref = createRef()
    })
  }

  const subscribeTolistener = (subscribe=true) => {
    if(subscribe) {
      containerRef.current.addEventListener("mousemove", onMouseMove);
    } else {
      containerRef.current.removeEventListener("mousemove", onMouseMove);
    }
  }

  const onMouseMove = event => {
    mouseValue.x = (event.x-(window.innerWidth/2))/window.innerWidth;
    mouseValue.y = (event.y-(window.innerHeight/2))/window.innerHeight;
    updateLayerDOM();
    updateFrameDOM();
  }

  const updateLayerDOM = () => {
    parallaxLayerConfig.layers.forEach(layer=> {
      layer.ref.current.style.transform = calculateStyle(layer);
    })
  }

  const updateFrameDOM = () => {
    frameRef.current.style.transform = "scale(" + parallaxLayerConfig.scale + 
      ") perspective(1500px) rotateY(" + 
      (mouseValue.x * parallaxLayerConfig.maxAngle) + "deg) rotateX(" + 
      (mouseValue.y * -1 * parallaxLayerConfig.maxAngle) + "deg)";
  }

  const calculateStyle = layer => {
    return "translate(" + (mouseValue.x * window.innerWidth * layer.movement) + "px, " + (mouseValue.y * window.innerHeight * layer.movement) + "px)";
  }

  /**
   * 
   *  Commons
   * 
   */

  initiatRefs(); 

  useEffect(()=> {
    subscribeTolistener();
    updateFrameDOM();
    return ()=> {
      subscribeTolistener(false);
    }
  }, []);

  const renderLayer = (layer, index) => {
    return (
      <div class={styles.rp_layer} key={index} ref={layer.ref}>
        <div class={styles.img_container}>
          <Image src={layer.img}/>
        </div>
      </div>
    )
  }

  const renderRadialParallax = () => {
    return (
      <div class={styles.radialParallaxFrame} ref={frameRef}>
        {parallaxLayerConfig.layers.map(renderLayer)}
      </div>
    )
  }

  return (
    <div class={styles.container} ref={containerRef}>
      {renderRadialParallax()}
    </div>
  );
}, ()=> true);

export default Hero;
