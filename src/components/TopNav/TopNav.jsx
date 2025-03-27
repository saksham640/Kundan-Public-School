import styles from "./TopNav.module.css";
import { TiSocialFacebookCircular, TiSocialInstagram, TiSocialLinkedin, TiSocialYoutube } from "react-icons/ti";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import db from "../../configs/fireBaseConfig.js";
import { useEffect, useState } from "react";
import { IoCall, IoMail } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function TopNav() {
  // Reference to Firestore document
  const docRef = doc(db, "count", "viewCount");
  const [currentCount, setCurrentCount] = useState(0);

  const setViewCount = async () => {
    try {
      // Fetch the document snapshot
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const count = docSnap.data().count || 0; // Default to 0 if count is undefined
        setCurrentCount(count);

        // Increment the count atomically
        await updateDoc(docRef, {
          count: count + 1,
        });

        console.log("View count updated successfully!");
      } else {
        console.error("Document does not exist!");
      }
    } catch (error) {
      console.error("Error updating view count:", error);
    }
  };

  // UseEffect hook to trigger view count update
  useEffect(() => {
    setViewCount();
    console.log(location.href)
  }, []);

  return (
    <div className={styles.topNav} style={{fontSize:"1rem"}}>
      <h3 className={styles.viewCount}>Views: {currentCount}</h3>
      <div></div> {/*khali space */}
      {window.innerWidth <= 648 && 
        <div style={{paddingLeft:"40%"}}>
          <NavLink to={"/contact"} style={{color:"white", backgroundColor: "transparent", fontFamily: "sans-serif", fontWeight: "600"}}>Contact Us</NavLink>
        </div>
      }
      <div className={styles.contactInfo}>
        <a href="tel:9417348549" className={styles.alink}><h3 id={styles.dugu}><IoCall/> 9417348549</h3></a>
        <a href="tel:7973633317" className={styles.alink}><h3 id={styles.dugu}><IoCall/> 7973633317</h3></a>
        <a href="mailto:kundanpublicschool@yahoo.com" className={styles.alink}><h3 id={styles.dugu}><IoMail/> kundanpublicschool@yahoo.com</h3></a>
      </div>
      <div style={{fontSize:"1rem", display: window.innerWidth < 640 ? "none" : "block"}} >
       <NavLink to={"/MandatoryDisclosures"} style={{color:"white"}}><u><b>Mandatory Public Disclosure</b></u></NavLink>
      </div>
      <div className={styles.socialInfo}>
      <h3>Socials:</h3>
      <TiSocialInstagram
        className={styles.socialIcon}
        onClick={() => {
          location.assign("https://www.instagram.com/kundanpublicschool/");
        }}
      />
      </div>
    </div>
  );
}
