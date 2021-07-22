import React, { useEffect, useState } from "react";

import styles from "@styles/MacWindow.module.css";
import socials from "data/socials";

const MacWindow = () => {
  const [cmd, setCmd] = useState("");

  const [message, setMessage] = useState(
    "Akshit Gupta | Full Stack Web Developer | Blockchain Enthusiast | College Student"
  );

  useEffect(() => {
    const text = "whoami";
    setTimeout(() => {
      if (cmd.length !== text.length)
        setCmd((prev) => prev.concat(text[cmd.length]));
      else
        setTimeout(() => {
          setCmd("");
        }, 5000);
    }, 200);
  }, [cmd]);

  return (
    <div className={styles.macWindow}>
      <div className={styles.macWindow__header}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>

      <div className={styles.macWindow__main}>
        <span className="text-danger">root</span>
        <span className="text-white">@axit:</span>
        <span className="text-primary">~</span>
        <span className="text-white">$</span> <span>{cmd}</span>
        {cmd !== "whoami" && <span className={styles.cursor}>|</span>}
        {cmd === "whoami" && <div>{message}</div>}
        {cmd === "whoami" && (
          <div className={styles.socials}>
            {socials.map(({ url, icon }) => (
              <div key={url} onClick={() => window.open("https://" + url)}>
                {icon}
              </div>
            ))}
          </div>
        )}
      </div>

      {cmd === "whoami" && (
        <div className={styles.macWindow__main}>
          <span className="text-danger">root</span>
          <span className="text-white">@axit:</span>
          <span className="text-primary">~</span>
          <span className="text-white">$</span>
          <span className={styles.cursor}>|</span>
        </div>
      )}
    </div>
  );
};

export default MacWindow;
