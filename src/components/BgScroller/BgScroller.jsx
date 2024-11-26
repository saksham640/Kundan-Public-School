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
            
            </div>
      <img
        className={styles.image}
        src="/carousel_images/img_4.jpg"
        style={{
          transform: `translateY(${(-1750 + scroll) * 0.5}px)`,
          transition: "transform 0.1s ease-out", // Smooth transition
        }}
      />

        

    </div>
  );
}
