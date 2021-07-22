import styles from "@styles/Sidebar.module.css";
import links from "data/links";
import { useRouter } from "next/dist/client/router";

function Sidebar({ isOpen, setIsOpen }) {
  const router = useRouter();

  return (
    <div
      className={`${styles.container} ${
        isOpen ? styles.isOpen : styles.isClosed
      }`}
    >
      {links.map(({ to, title }) => (
        <div
          key={to}
          className={`${styles.link} ${
            router.pathname === to ? styles.striked : ""
          }`}
          onClick={() => {
            router.push(to);
            setIsOpen(false);
          }}
        >
          {title}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
