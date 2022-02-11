import styles from "../../styles/Hero3D.module.scss";
import heroBG from "../../images/hero/water2.png";
import { useEffect } from "react";


const loadJQ = () => {
    const $ = require('jquery');
    // require("jquery.ripples");
    require("./jq.ripples");


    const randomDrop =()=> {
        var $el = $('#HERO');
        var x = Math.random() * $el.outerWidth();
        var y = Math.random() * $el.outerHeight();
        var dropRadius = 15;
        var strength = 0.0004 + Math.random() * 0.0004;
        $el.ripples('drop', x, y, dropRadius, strength);
    };

    $('#HERO').ripples({
    imageUrl: heroBG.src,
    resolution: 128,
    dropRadius: 35, //px
    perturbance: 0.5,
    // interactive: false
    });
        // Automatic drops
    // setInterval(function() {
    //     randomDrop();
    // }, 700);

    // randomDrop();


    for(let idx=0; idx<10; idx++) randomDrop();
  }

export default ()=> {

    useEffect(()=> {
        loadJQ();
    }, []);
    
    return (
        <div class={styles.pondContainer} id="HERO"></div>
    )
}