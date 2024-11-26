import styles from "../FrontTitle/FrontTitle.module.css"

export default function FrontTitle({titles}){
    return(
        <div className={styles.frontTitle}>
            {titles.map(title=>(
                <h1 className={styles.titleText}>
                    {title}
                </h1>
            ))}
        </div>
    )
}