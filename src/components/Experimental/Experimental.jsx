import styles from "../Experimental/Experimental.module.css"

export default function Experimental({values}){

    return(
        <div className={styles.Experimental}>
            <img src= {values.image} className={styles.image}>
            </img>

        <div className={styles.textVals}>
            <h1 className={styles.title}>{values.title}</h1>
            <h2 className={styles.description}>{values.description}</h2>
            </div>


        </div>
    )

}