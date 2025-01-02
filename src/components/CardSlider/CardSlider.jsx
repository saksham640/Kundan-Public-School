import styles from "../CardSlider/CardSlider.module.css"
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useState } from "react";

export default function CardSlider({cardValues,deleteFunction}){

    const [scrollValue,setScrollValue] = useState(0);


    return(
        <div className={styles.cardSlider}>
            {cardValues.map(cardValue=>(
                <div className={styles.card}>
                    <img src={cardValue.image}></img>
                    <h2>{cardValue.name}</h2>
                    <button
                    style={(
                        location.href == "https://www.kundanpublicschool.org/#/adminPanel" || location.href == "http://localhost:5173/#/adminPanel" ||  location.href == "http://localhost:5173/#/adminPanel/" || location.href == "https://www.kundanpublicschool.org/#/adminPanel" ) ?{display: "block", backgroundColor: "red", color:"white", fontSize: "150%", border:0, padding: "0.2rem", borderRadius: "0.5rem"}:{display: "none"}}
                    value={cardValue.id}
                    onClick={()=>{deleteFunction(event)}}
                    > DELETE
                    </button>
                </div>
            ))}
        </div>
    )
}