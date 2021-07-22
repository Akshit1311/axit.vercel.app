import VantaContainer from "@components/VantaContainer";
import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
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
      <Component {...pageProps} />
    </VantaContainer>
  );
}

export default MyApp;
