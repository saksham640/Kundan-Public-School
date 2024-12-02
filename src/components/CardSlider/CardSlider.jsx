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
                    <h2>{cardValue.name}</h2>
                    <img src={cardValue.image}></img>
                    <h3>{cardValue.description}</h3>
                </div>
            ))}
        </div>
    )
}