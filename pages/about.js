import Image from "next/image";

//Components
import Navbar from "@components/Navbar";

//Styles
import styles from "@styles/About.module.css";

//assets
import ResumeImg from "@assets/resume.png";

//data
import socials from "data/socials";

function about() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.resume}>
          <a className={styles.download} href="/resume.pdf" download>
            Download
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>

          <Image src={ResumeImg} alt="resume" layout="responsive" priority />
        </div>
        <div className={styles.col}>
          <div>
            <h1 className={styles.title}>Akshit Gupta</h1>

            {socials.map(({ url, icon }) => (
              <div
                key={url}
                className={styles.row}
                onClick={() => window.open("https://www." + url)}
              >
                {icon}
                <div className={styles.rowUrl}>{url}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Akshit1311.github.io

export default about;
