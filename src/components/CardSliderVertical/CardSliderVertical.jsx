import styles from "../CardSliderVertical/CardSliderVertical.module.css"

export default function CardSliderVertical({cardValues}){

    return(
        <div className={styles.cardSliderVertical}>
            {cardValues.map(cardValue=>(
                <div className={styles.card}>
                    <h3>{cardValue}</h3>
                </div>
            ))}
        </div>
    )
}