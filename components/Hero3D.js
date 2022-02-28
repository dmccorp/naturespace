import React, { createRef, memo, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Hero3D.module.scss";
import heroBG from "../images/hero/main_bg_blur.png";
import heroMiddle from "../images/hero/tree_blur.png";
import heroFG from "../images/hero/left_right_blur.png";
import Hero from "./Hero";
import PondBG from "./Hero3dComponents/PondBG";
import Snowfall from "react-snowfall";
import Butterflies from "./Hero3dComponents/Butterflies";

const Hero3D = memo(
  () => {
    /**
     *
     *  Parallax Config
     *
     */

    const parallaxLayerConfig = {
      scale: 1.1,
      maxAngle: 240,
      animationEase: 10,
      layers: [
        { html: () => <PondBG />, movement: 0.005 },
        { img: heroBG, movement: 0.005, clickThrough: true },
        { img: heroMiddle, movement: 0.012, clickThrough: true },
        { img: heroFG, movement: 0.035, clickThrough: true },
        {
          html: () => (
            <Snowfall snowflakeCount={30} color="rgba(255,255,255,0.3)" />
          ),
          movement: 0.4,
          clickThrough: true,
        },
        { html: () => <Butterflies />, movement: 0.1, clickThrough: true },
      ],
    };

    /**
     *
     *  Parallax Vars
     *
     */

    let mouseValue = {
      x: 0,
      y: 0,
    };
    let frameRef = createRef();
    let containerRef = createRef();

    /**
     *
     *  Radial Parallax Methods
     *
     */

    const initiatRefs = () => {
      parallaxLayerConfig.layers.forEach((layer) => {
        layer.ref = createRef();
      });
    };

    const subscribeTolistener = (subscribe = true) => {
      if (subscribe) {
        containerRef.current.addEventListener("mousemove", onMouseMove);
      } else {
        if (containerRef.current) {
          containerRef.current.removeEventListener("mousemove", onMouseMove);
        }
      }
    };

    const onMouseMove = (event) => {
      mouseValue.x = (event.x - window.innerWidth / 2) / window.innerWidth;
      mouseValue.y = (event.y - window.innerHeight / 2) / window.innerHeight;
    };

    const updateLayerDOM = () => {
      parallaxLayerConfig.layers.forEach((layer) => {
        if (!layer.ref.current) return;
        layer.ref.current.style.transform = calculateStyle(
          layer,
          layer.ref.current
        );
      });
    };

    const updateFrameDOM = () => {
      if (!frameRef.current) return;
      frameRef.current.style.transform =
        "scale(" + parallaxLayerConfig.scale + ")";
    };

    const calculateStyle = (layer) => {
      layer.prevTransform = layer.nextTransform || {
        transform: {
          x: 0,
          y: 0,
        },
        rotate: {
          x: 0,
          y: 0,
        },
      };
      layer.absoluteTransform = {
        transform: {
          x: mouseValue.x * window.innerWidth * layer.movement,
          y: mouseValue.y * window.innerHeight * layer.movement,
        },
        rotate: {
          x: mouseValue.y * -1 * parallaxLayerConfig.maxAngle * layer.movement,
          y: mouseValue.x * parallaxLayerConfig.maxAngle * layer.movement,
        },
      };
      layer.nextTransform = {
        transform: {
          x:
            layer.prevTransform.transform.x +
            (layer.absoluteTransform.transform.x -
              layer.prevTransform.transform.x) /
              parallaxLayerConfig.animationEase,
          y:
            layer.prevTransform.transform.y +
            (layer.absoluteTransform.transform.y -
              layer.prevTransform.transform.y) /
              parallaxLayerConfig.animationEase,
        },
        rotate: {
          x:
            layer.prevTransform.rotate.x +
            (layer.absoluteTransform.rotate.x - layer.prevTransform.rotate.x) /
              parallaxLayerConfig.animationEase,
          y:
            layer.prevTransform.rotate.y +
            (layer.absoluteTransform.rotate.y - layer.prevTransform.rotate.y) /
              parallaxLayerConfig.animationEase,
        },
      };
      return (
        "translate(" +
        layer.nextTransform.transform.x +
        "px, " +
        layer.nextTransform.transform.y +
        "px) perspective(1500px) rotateY(" +
        layer.nextTransform.rotate.y +
        "deg) rotateX(" +
        layer.nextTransform.rotate.x +
        "deg)"
      );
    };

    /**
     *
     *  Main loop
     *
     */

    const startMainLoop = () => {
      updateLayerDOM();
      updateFrameDOM();
      requestAnimationFrame(startMainLoop);
    };

    /**
     *
     *  Commons
     *
     */

    initiatRefs();

    useEffect(() => {
      subscribeTolistener();
      startMainLoop();

      // Dummy Loading

      setTimeout(() => {
        window.updateProgress(20 + Math.random() * 10);
      }, 1500);

      setTimeout(() => {
        window.updateProgress(40 + Math.random() * 40);
      }, 1500 + Math.random() * 2000);

      setTimeout(() => {
        window.updateProgress(100);
      }, 3000 + Math.random() * 1500);

      return () => {
        subscribeTolistener(false);
      };
    }, []);

    const renderLayer = (layer, index) => {
      return (
        <div
          class={styles.rp_layer_container}
          class={layer.clickThrough ? styles.clickThrough : {}}
        >
          <div
            class={styles.rp_layer}
            key={index}
            ref={layer.ref}
            id={layer.id}
          >
            <div class={styles.img_container}>
              {layer.img ? (
                <Image src={layer.img} />
              ) : layer.html ? (
                <layer.html config={layer} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      );
    };

    const renderRadialParallax = () => {
      return (
        <div class={styles.radialParallaxFrame} ref={frameRef}>
          {parallaxLayerConfig.layers.map(renderLayer)}
        </div>
      );
    };

    return (
      <>
        <div className={styles.desktop}>
          <div class={styles.container} ref={containerRef}>
            {renderRadialParallax()}
            <div
              class={styles.staticContainer}
              style={{ pointerEvents: "none" }}
            >
              <Hero displayBg={false} />
            </div>
          </div>
        </div>
        <div className={styles.tab}>
          <Hero displayBg={true} />
        </div>
      </>
    );
  },
  () => true
);

export default Hero3D;
