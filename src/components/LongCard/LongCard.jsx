import styles from "../LongCard/LongCard.module.css"

export default function LongCard({cardValues}){
    return(
        <div className={styles.longCard}>
            <img className = {styles.image} src={cardValues.image}></img>
            <div className={styles.textBox}>
                <div className={styles.content}>
                    <h2>Visionary</h2>
                    <h3 className={styles.description} style={{marginTop:"0.5rem", marginRight:"1rem", marginLeft:"1rem", fontSize:"100%"}}>{cardValues.description}</h3>
                </div>
                <div className={styles.authorBox}>
                <h3 className={styles.author} style={{marginRight:"5%"}}>Dr. Rajeev Hora</h3>
                </div>
            </div>
        </div>
    )
}