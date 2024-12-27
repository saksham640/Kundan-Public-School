import styles from "../CardSlider/CardSlider.module.css"
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useState } from "react";

export default function CardSlider({cardValues}){

    const [scrollValue,setScrollValue] = useState(0);


    return(
        <div className={styles.cardSlider}>
            {cardValues.map(cardValue=>(
                <div className={styles.card}>
                    <img src={cardValue.image}></img>
                    <h2>{cardValue.name}</h2>
                </div>
            ))}
        </div>
    )
}