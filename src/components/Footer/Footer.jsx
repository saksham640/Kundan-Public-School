import { NavLink } from "react-router-dom"
import styles from "../Footer/Footer.module.css"
import { IoCall, IoMail } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


export default function Footer() {

    return (
        <div className={styles.footer}>

            <div className={styles.contentWrap}>
                <div className={styles.textContent}>
                    <h2 style={{width: "100%"}}>Kundan Public School</h2>
                    <h3>Address: Sarpanch Colony, Ludhiana</h3>
                    <br />
                    <NavLink to={"/error"} className={styles.NavLink}><h3>&gt; Mandatory Disclosures</h3></NavLink>
                    <NavLink to={"/admissions"} className={styles.NavLink}><h3>&gt; Fee Structure</h3></NavLink>
                    <br />
                    {/* <h5 className={styles.disclaimer}>© 2024 Kundan Public School . All Rights Reserved.</h5> */}
                </div>

                <div className={styles.map} onClick={() => { location.assign("https://maps.app.goo.gl/52v2gdn2fKXyHkJm7") }}>
                    <img src="logos/gmaps.png" className={styles.mapsIcon}>
                    </img>
                    <h4 className={styles.viewOnMaps}>View On Maps</h4>
                    <br />
                </div>
            </div>
            <div className={styles.contactInfo}>
                <h3>Contact : &nbsp;</h3>
               <a href = "tel:9417348549" className={styles.NavLink}><h3> <IoCall/> 9417348549 </h3> </a>
               <a href = "tel:7973633317" className={styles.NavLink}><h3>&nbsp;<IoCall/> 7973633317</h3> </a>
               <a href="mailto:kundanpublicschool@yahoo.com" className={styles.NavLink}><h3 style={{paddingLeft: "1rem"}}> <IoMail/> kundanpublicschool@yahoo.com</h3></a>
            </div>
        </div>
    )

}