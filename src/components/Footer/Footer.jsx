import { NavLink } from "react-router-dom"
import styles from "../Footer/Footer.module.css"

export default function Footer(){

    return(
        <div className={styles.footer}>

            <div className={styles.textContent}>
                    <h2>Kundan Public School</h2>
                    <h3>Address: Sarpanch Colony, Ludhiana</h3>
                    <br/>
                    <h3>&gt; Mandatory Disclosures</h3>
                    <h3>&gt; Fee Structure</h3>
                    <br/>
                    <h5>© 2024 Kundan Public School . All Rights Reserved.</h5>
            </div>

            <div className={styles.map}>
                <img src="logos/gmaps.png" className={styles.mapsIcon}>
                </img>
                <h4>View On Maps</h4>
            </div>
        </div>
    )

}