import React, { createRef, memo, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Hero3D.module.scss";
import heroBG from "../images/hero/main_bg.png";
import heroMiddle from "../images/hero/tree.png";
import heroFG from "../images/hero/left_right.png";
import Hero from "./Hero";
import PondBG from "./Hero3dComponents/PondBG";


const Hero3D = memo(() => {

  /**
   * 
   *  Parallax Config
   * 
   */ 

  const parallaxLayerConfig = {
    scale: 1.1,
    maxAngle: 180,
    layers: [
      { html: ()=> <PondBG/>, movement: 0},
      { img: heroBG, movement: 0.005, clickThrough: true },
      { img: heroMiddle, movement: 0.012, clickThrough: true },
      { img: heroFG, movement: 0.03, clickThrough: true },
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
      if(containerRef.current) {
        containerRef.current.removeEventListener("mousemove", onMouseMove);
      }
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
      if(!layer.ref.current) return;
      layer.ref.current.style.transform = calculateStyle(layer);
    })
  }

  const updateFrameDOM = () => {
    if(!frameRef.current) return;
    frameRef.current.style.transform = "scale(" + parallaxLayerConfig.scale + 
      ")";
  }

  const calculateStyle = layer => {
    return "translate(" + (mouseValue.x * window.innerWidth * layer.movement) + "px, " + (mouseValue.y * window.innerHeight * layer.movement) + "px) perspective(1500px) rotateY(" + 
    (mouseValue.x * parallaxLayerConfig.maxAngle * layer.movement) + "deg) rotateX(" + 
    (mouseValue.y * -1 * parallaxLayerConfig.maxAngle * layer.movement) + "deg)";
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
      <div class={styles.rp_layer_container} class={layer.clickThrough ? styles.clickThrough : {}}>
        <div class={styles.rp_layer} key={index} ref={layer.ref} id={layer.id} >
          <div class={styles.img_container}>
            {layer.img ? (
              <Image src={layer.img}/>
            ) : layer.html ? (
              <layer.html config={layer}/>
            ) : ''}
          </div>
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
      <div class={styles.staticContainer} style={{ pointerEvents: 'none'}} >
        <Hero/>
      </div>
    </div>
  );
}, ()=> true );

export default Hero3D;
