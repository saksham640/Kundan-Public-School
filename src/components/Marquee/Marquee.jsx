import styles from "../Marquee/Marquee.module.css";
import { FaBell } from "react-icons/fa";

export default function Marquee({texts}){
    return(
        <div className={styles.marquee}>
            <FaBell id={styles.bell}/>
            <marquee>
                {texts.map(text=>(
                    <h1 className={styles.MarqueeText}>
                        {text}
                    </h1>
                ))}
            </marquee>
        </div>
    )
}