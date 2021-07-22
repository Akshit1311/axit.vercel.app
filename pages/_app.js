import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import VantaContainer from "@components/VantaContainer";
import { useState, useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const threeScript = document.createElement("script");

    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );

    document.getElementsByTagName("head")[0].appendChild(threeScript);

    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  return (
    <VantaContainer>
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <Component {...pageProps} />
    </VantaContainer>
  );
}

export default MyApp;
