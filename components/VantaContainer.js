import React, { useEffect, useRef, useState } from "react";

import styles from "@styles/VantaContainer.module.css";

//Vanta
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const VantaContainer = ({ children }) => {
  //Refs
  const vantaRef = useRef(null);

  //States
  const [vantaEffect, setVantaEffect] = useState(null);
  const [activeColorKey, setActiveColorKey] = useState(null);

  //Constants
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const colorTheme = {
    orange: 0xf27611,
    purple: 0xcf3da4,
    blue: 0x1e73e8,
    green: 0x25b303,
  };

  //Effects
  useEffect(() => {
    const isMob = window.innerHeight > window.innerWidth;
    const randomNum = Math.floor(Math.random() * 4);

    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          // color: 0x14b679,
          // backgroundColor: 0x15173c,
          maxDistance: isMob ? 20.0 : 25.0,
          //old
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1,
          color: Object.values(colorTheme)[randomNum],
          backgroundColor: 0x242322,
        })
      );
      setActiveColorKey(Object.keys(colorTheme)[randomNum]);

      document.documentElement.style.setProperty(
        "--main-text-color",
        `var(--text-${Object.keys(colorTheme)[randomNum]})`
      );
    }
  }, [activeColorKey, colorTheme, vantaEffect]);

  return (
    <div className={styles.container}>
      <div
        ref={vantaRef}
        style={{ position: "absolute !important" }}
        className={styles.vanta}
      >
        <div className={styles.overlay}></div>
      </div>

      {children}
    </div>
  );
};

export default VantaContainer;
