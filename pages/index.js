import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";

//Styles
import styles from "@styles/Home.module.css";

//Components
import Navbar from "../components/Navbar";
import VantaContainer from "../components/VantaContainer";
import MacWindow from "@components/MacWindow";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className={styles.home}>
        <MacWindow />
      </div>
    </div>
  );
}
