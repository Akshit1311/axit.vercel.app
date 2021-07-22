import React, { useEffect, useState } from "react";

import styles from "@styles/Navbar.module.css";
import { useRouter } from "next/dist/client/router";
import links from "data/links";

const Navbar = ({ setIsSidebarOpen }) => {
  //hooks
  const router = useRouter();

  //States
  const [isMob, setIsMob] = useState(false);

  useEffect(() => {
    setIsMob(window.innerHeight > window.innerWidth);
  }, []);

  console.log({ path: router.pathname });

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__item}>
        {">"} cd /{links.find(({ to }) => to === router.pathname).title}/
      </div>

      <div className={`${styles.navbar__item} ${styles.navbar__item__right}`}>
        {links.map(({ title, to }) => (
          <div
            key={title}
            className={styles.navbar__link}
            onClick={() => router.push(to)}
          >
            {title}
          </div>
        ))}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={styles.menuIcon}
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Navbar;
