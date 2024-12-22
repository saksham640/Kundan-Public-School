import React from 'react';
import styles from "../MobVisionaryMessage/MobVisionaryMessage.module.css"; // Import CSS Module

const Card = () => {
  // Only render if the screen width is <= 648px
  

  return (
    <div className={styles.cardContainer}>
      <h1 className={styles.cardHeading}>Visionary</h1>
      <div className={styles.cardContent}>
        <img
          src="Faculty/president.jpg"
          alt="Visionary"
          className={styles.cardImage}
        />
        <div className={styles.cardMessage}>
          <p>Technical Education is the real jewellery & beauty of human life. It is matter of privilege & immense pleasure that our Institution is producing Technocrats & will help the Country to eradicate unemployment amongst the youth of the Country.</p>
        </div>
      </div>
      <div className={styles.cardAuthor}>- Dr. Rajinder Hora</div>
    </div>
  );
};

export default Card;
