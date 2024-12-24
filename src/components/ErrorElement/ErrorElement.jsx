import React from 'react'
import styles from "../ErrorElement/ErrorElement.module.css"
import Footer from '../Footer/Footer'
import Nav from '../Nav'


const ErrorElement = () => {
  return (
    <>
    <Nav/>
    <div className={styles.footer}>
        <Footer/>
    </div>
    </>
  )
}

export default ErrorElement