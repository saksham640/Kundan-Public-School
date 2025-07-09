import { useEffect, useState } from "react";
import styles from "./BgScroller.module.css";

export default function BgScroller({ parallaxValues }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { title, description, image, offsetConstant = 0 } = parallaxValues;

  return (
    <div className={styles.bgScroller}>
      <img
        className={styles.image}
        src={image}
        alt={title}
        style={{
          transform: `translateY(${(offsetConstant + scrollY) * 0.5}px)`,
        }}
      />
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.description}>{description}</h2>
      </div>
    </div>
  );
}
