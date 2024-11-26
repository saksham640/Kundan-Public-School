import styles from "./TopNav.module.css";
import { IoShareSocialSharp } from "react-icons/io5";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

export default function TopNav(){
    return(
        <div className={styles.topNav}>
            <h3>Socials: </h3>
            <IoShareSocialSharp className={styles.socialIcon}/>
            <TiSocialFacebookCircular className={styles.socialIcon}/>
            <TiSocialInstagram className={styles.socialIcon}/>
            <TiSocialLinkedin className={styles.socialIcon}/>
            <TiSocialYoutube className={styles.socialIcon}/>
        </div>
    )
}