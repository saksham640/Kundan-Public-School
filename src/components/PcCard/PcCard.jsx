import React from 'react';
import styles from "./PcCard.module.css"; // Import CSS Module

export default function Card({values}){
  
  return (
    <div className={styles.cardContainer}>
      <h1 className={styles.cardHeading}>{values.title}</h1>
      <div className={styles.cardContent}>
        <img
          src={values.image}
          alt=""
          className={styles.cardImage}
        />
        <div className={styles.cardMessage}>
          <p>{values.description}</p>
        </div>
      </div>
      <div className={styles.cardAuthor}>{values.author}</div>
    </div>
  );
};

