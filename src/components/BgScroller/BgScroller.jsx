import { useEffect, useState } from "react";
import styles from "../BgScroller/BgScroller.module.css";

export default function BgScroller({ parallaxValues }) {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let animationFrame;

    function handleScroll() {
      const currentScroll = window.scrollY;
      animationFrame = requestAnimationFrame(() => {
        setScroll(currentScroll);
      });
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className={styles.bgScroller}>
        <div className={styles.values}>
            <h1 id={styles.campus}>{parallaxValues.title}</h1>
            <h2 id={styles.description}>{parallaxValues.description}</h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>
      <img
        className={styles.image}
        src="/carousel_images/img_3.jpg"
        style={{
          transform: `translateY(${(-2100 + scroll) * 0.5}px)`,
          transition: "transform 0.1s ease-out", // Smooth transition
        }}
      />

        

    </div>
  );
}
