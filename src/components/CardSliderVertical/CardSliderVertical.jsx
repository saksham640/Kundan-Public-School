import styles from "../CardSliderVertical/CardSliderVertical.module.css"

export default function CardSliderVertical({cardValues, deleteFunction, isAuth}){

    return(
        <div className={styles.cardSliderVertical}>
            {cardValues.map(cardValue=>(
                <div className={styles.card}>
                    <h3>{cardValue.text}</h3>
                    <button
                    style={
                        (isAuth) ?{display: "block", backgroundColor: "red", color:"white", fontSize: "150%", border:0, padding: "0.2rem", borderRadius: "0.5rem"}:{display: "none"}}
                    value={cardValue.id}
                    className={styles.btn}
                    onClick={()=>{deleteFunction(event)}}
                    > DELETE
                    </button>
                </div>
            ))}
        </div>
    )
}