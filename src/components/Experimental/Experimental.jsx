import styles from "../Experimental/Experimental.module.css"

export default function Experimental({values}){
    
    let beeg = values.scale;
    let pos = values.translate;


    return(
        <div style = {{transform:`scale(${beeg}) translateX(${pos}vw)`}} className={styles.Experimental}>
            <img src= {values.image} className={styles.image}>
            </img>

            <div className={styles.textVals}>
                <h1 className={styles.title}>{values.title}</h1>
                <h2 className={styles.description}>{values.description}</h2>
            </div>


        </div>
    )

}