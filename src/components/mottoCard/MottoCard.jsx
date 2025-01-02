import React from 'react'
import styles from "../mottoCard/MottoCard.module.css";

const MottoCard = () => {
  return (
    <div className={styles.MottoCard}>
        <img src='/logos/ins5.png'></img>
        <div className={styles.textBox}>
            <br/>
            <h1>Learn Achieve Inspire</h1>
            <br/>
        </div>
    </div>
  )
}

export default MottoCard