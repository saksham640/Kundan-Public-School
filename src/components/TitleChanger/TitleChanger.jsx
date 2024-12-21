import React, { useState, useEffect } from "react";
import styles from "../TitleChanger/TitleChanger.module.css";

export default function TextSwitcher({ text1, text2, size, color, marginLeft}) {
    const [visibleText, setVisibleText] = useState(text1);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                if (visibleText === text1) {
                    setVisibleText(text2);
                } else {
                    setVisibleText(text1);
                }
                setIsFading(false);
            }, 200); 
        }, 3400); 
        return () => clearInterval(interval); 
    }, [visibleText, text1, text2]);

    return (
        <div className={styles.container}>
           <h1 className={`${styles.text} ${isFading ? styles.fadeOut : styles.fadeIn}`} style={{fontSize: `${size}vw`, color: color, marginLeft: `${marginLeft}%`}}>
                {visibleText}</h1>
        </div>
    );
}
