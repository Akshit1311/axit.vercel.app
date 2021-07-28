import React from "react";
import Image from "next/image";

//Components
import Navbar from "@components/Navbar";

//styles
import styles from "@styles/Projects.module.css";

//assets
import ReactIcon from "@assets/react-icon.png";
import ExpressIcon from "@assets/express-icon.png";
import ReduxIcon from "@assets/redux-icon.png";
import WebRTCIcon from "@assets/webrtc-icon.png";
import NextIcon from "@assets/nextjs-icon.png";
import CSSIcon from "@assets/css-icon.png";
import HTMLIcon from "@assets/html-icon.png";
import JSIcon from "@assets/js-icon.png";
import NodeJSIcon from "@assets/nodejs-icon.png";

//project covers
import Huddle01Cover from "@assets/projects/Huddle01.png";
import IndieDogCommuneCover from "@assets/projects/IndieDogCommune.png";
import PortfolioCover from "@assets/projects/Portfolio.png";
import FintractCover from "@assets/projects/Fintract.png";
import UBCCover from "@assets/projects/UBC.png";
import FortignusCover from "@assets/projects/Fortignus.png";

const projects = () => {
  const projects = [
    {
      title: "Portfolio",
      desc: "Portfolio Website showcasing my skills and projects.",
      url: "https://axit.vercel.app/",
      gh: "https://github.com/Akshit1311/Akshit1311.github.io",
      cover: PortfolioCover,
      tech: [
        { alt: "React JS", icon: ReactIcon },
        { alt: "Next JS", icon: NextIcon },
        { alt: "CSS 3", icon: CSSIcon },
        { alt: "Javascript", icon: JSIcon },
        { alt: "Node JS", icon: NodeJSIcon },
      ],
    },
    {
      title: "Huddle01",
      desc: "Decentralized Video Conferencing Solution, built on top of WebRTC, IPFS & Filecoin",
      url: "https://beta.huddle01.com/",
      cover: Huddle01Cover,
      tech: [
        { alt: "React JS", icon: ReactIcon },
        { alt: "Express JS", icon: ExpressIcon },
        { alt: "Redux", icon: ReduxIcon },
        { alt: "WebRTC", icon: WebRTCIcon },
        { alt: "CSS 3", icon: CSSIcon },
        { alt: "Javascript", icon: JSIcon },
        { alt: "Node JS", icon: NodeJSIcon },
      ],
    },
    {
      title: "Fintract",
      desc: "Dashboard for managing product registrations",
      url: "https://finnobot-assistant.fintractglobal.com/",
      cover: FintractCover,
      tech: [
        { alt: "React JS", icon: ReactIcon },
        { alt: "Express JS", icon: ExpressIcon },
        { alt: "Redux", icon: ReduxIcon },
        { alt: "CSS 3", icon: CSSIcon },
        { alt: "Javascript", icon: JSIcon },
        { alt: "Node JS", icon: NodeJSIcon },
      ],
    },
    {
      title: "UBC",
      desc: "Unlock Business Consulting (UBC), business consulting website (freelancing project).",
      url: "https://www.ubconsulting.in/",
      gh: "https://github.com/Akshit1311/UBConsulting",
      cover: UBCCover,
      tech: [
        { alt: "React JS", icon: ReactIcon },
        { alt: "CSS 3", icon: CSSIcon },
        { alt: "Javascript", icon: JSIcon },
        { alt: "Node JS", icon: NodeJSIcon },
      ],
    },
    {
      title: "Indie Dog Commune (NGO)",
      desc: "Indie Dog Commune, a registered trust, is a group of devoted, passionate and animal caring citizens.",
      url: "https://indiedogcommune.com/",
      gh: "https://github.com/Akshit1311/IndieDogCommune",
      cover: IndieDogCommuneCover,
      tech: [
        { alt: "Express JS", icon: ExpressIcon },
        { alt: "CSS 3", icon: CSSIcon },
        { alt: "Javascript", icon: JSIcon },
        { alt: "Node JS", icon: NodeJSIcon },
      ],
    },
    {
      title: "Fortignus",
      desc: "Security Website Design Template, for showcasing products & tools",
      url: "https://akshit1311.github.io/Fortignus/",
      gh: "https://github.com/Akshit1311/Fortignus",
      cover: FortignusCover,
      tech: [
        { alt: "HTML 5", icon: HTMLIcon },
        { alt: "CSS 3", icon: CSSIcon },
        { alt: "Javascript", icon: JSIcon },
      ],
    },
  ];

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.projectsGrid}>
          {projects.map(({ title, desc, url, gh, cover, tech }) => (
            <div key={title} className={styles.projectCard}>
              <div className={styles.projectCard__title}>{title}</div>
              <div className={styles.projectCard__desc}>{desc}</div>

              <div className={styles.projectCard__tech}>
                <div className={styles.projectCard__title2}>Tech:</div>
                <div className={styles.projectCard__techIcons}>
                  {tech.map(({ icon, alt }) => (
                    <div
                      key={alt}
                      className={styles.projectCard__techIcon}
                      title={alt}
                    >
                      <Image
                        height={"30vh"}
                        width={"30vh"}
                        src={icon}
                        alt={alt}
                      />
                    </div>
                  ))}
                </div>
                <div className={styles.projectCard__projectImage}>
                  <div className={styles.projectCard__projectOverlay}>
                    <div>
                      {gh && (
                        <svg
                          className="octicon octicon-mark-github v-align-middle"
                          height="32"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="32"
                          aria-hidden="true"
                          color="white"
                          onClick={() => window.open(gh)}
                        >
                          <path
                            fill="white"
                            fillRule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                          ></path>
                        </svg>
                      )}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={() => window.open(url)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                  <Image src={cover} alt={title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default projects;
