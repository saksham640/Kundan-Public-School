import React from 'react'
import styles from "../ErrorElement/ErrorElement.module.css"
import Footer from "../../components/Footer/Footer.jsx"
import Nav from '../../components/Nav.jsx'
import MobVisionaryMessage from "../../components/MobVisionaryMessage/MobVisionaryMessage.jsx"
import PcCard from "../../components/PcCard/PcCard.jsx"

const errorContent = {
  title: "Under Development",
  image: "logos/ins2.png",
  description: "Sorry for the Inconvenience! But the Current Page is Under Development and will be Available Shortly!",
  author: "",
}

const ErrorElement = () => {
  return (
    <>
    <Nav/>
    <br/>
    <div className={styles.errorBox}>
      <MobVisionaryMessage values={errorContent}/>
      <PcCard values={errorContent}/>
    </div>
        <Footer/>
    </>
  )
}

export default ErrorElement