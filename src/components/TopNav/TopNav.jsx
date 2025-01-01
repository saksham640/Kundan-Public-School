import styles from "./TopNav.module.css";
import { TiSocialFacebookCircular, TiSocialInstagram, TiSocialLinkedin, TiSocialYoutube } from "react-icons/ti";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import db from "../../configs/fireBaseConfig.js";
import { useEffect, useState } from "react";

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
    if(location.href == "https://www.kundanpublicschool.org/"){
    setViewCount();
    }
  }, []);

  return (
    <div className={styles.topNav}>
      <h3 className={styles.viewCount}>View Count: {currentCount}</h3>
      <h3>Socials:</h3>
      <TiSocialFacebookCircular
        className={styles.socialIcon}
        onClick={() => {
          location.assign("https://www.kundanpublicschool.org/#/errorPage");
        }}
      />
      <TiSocialInstagram
        className={styles.socialIcon}
        onClick={() => {
          location.assign("https://www.instagram.com/kundanpublicschool/");
        }}
      />
      <TiSocialLinkedin
        className={styles.socialIcon}
        onClick={() => {
          location.assign("https://www.kundanpublicschool.org/#/errorPage");
        }}
      />
      <TiSocialYoutube
        className={styles.socialIcon}
        onClick={() => {
          location.assign("https://www.kundanpublicschool.org/#/errorPage");
        }}
      />
    </div>
  );
}
