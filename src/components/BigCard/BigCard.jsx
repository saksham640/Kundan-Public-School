import styles from "../BigCard/BigCard.module.css"

export default function BigCard({values}){
    return(
    <div className={styles.BigCard}>

        <div className={styles.logoAndTitle}>
            <h1 className={styles.title}>{values.title}</h1>
            
        </div>
        <div className={styles.descriptionBox}>
            <h2 className={styles.description}>{values.description}</h2>
            <img className={styles.img} src={values.image}></img>
        </div>
    </div>
    )
}