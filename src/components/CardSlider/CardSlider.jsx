import styles from "../CardSlider/CardSlider.module.css"
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useState } from "react";

export default function CardSlider({cardValues,deleteFunction,isAuth}){

    const [scrollValue,setScrollValue] = useState(0);


    return(
        <div className={styles.cardSlider}>
            {cardValues.map(cardValue=>(
                <div className={styles.card} style={(
                    isAuth == true) ?{overflow: "visible"}:{}}>
                    <button
                    style={(
                        isAuth == true ) ?{display: "block", backgroundColor: "red", color:"white", fontSize: "150%", border:0, padding: "0.2rem", borderRadius: "0.5rem"}:{display: "none"}}
                    value={cardValue.id}
                    className={styles.btn}
                    onClick={()=>{deleteFunction(event)}}
                    > DELETE
                    </button>
                    <img src={cardValue.image}></img>
                    <h2>{cardValue.name}</h2>
                </div>
            ))}
        </div>
    )
}