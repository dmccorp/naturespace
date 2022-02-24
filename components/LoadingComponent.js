import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import styles from "../styles/Hero3D.module.scss";
export default ()=> {
    const [progress, updateProgress] = useState(0);
    useEffect(()=> {
        window.updateProgress = _progress => {
            if(_progress===100) {
                setTimeout(()=> {
                    document.getElementsByTagName("html")[0].style.overflow = "auto"
                }, 1500);
                window.updateProgress = () => {};
            }
            updateProgress(_progress);
        }
    },[])
    return (
        <div class={(progress === 100 ? styles.loadingComponentLoaded : styles.loadingComponent)}>
            <div class={styles.lc_container}>
                <div class={styles.lcc_progress} style={{width: progress +'%'}}></div>
            </div>
        </div>
    )
}