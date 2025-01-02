import styles from "../Experimental/Experimental.module.css"

export default function Experimental({values}){
    
    let beeg = values.scale;
    let pos = values.translate;


    return(
        <div className={styles.Experimental}>
            <img src= {values.image} className={styles.image}>
            </img>

            <div className={styles.textVals}>
                <h2 className={styles.title}>{values.title}</h2>
                <h6 className={styles.description}>{values.description}</h6>
            </div>


        </div>
    )

}