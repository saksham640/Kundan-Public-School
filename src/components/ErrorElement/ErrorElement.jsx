import React from 'react'
import styles from "../ErrorElement/ErrorElement.module.css"
import Footer from '../Footer/Footer'
import Nav from '../Nav'
import MobVisionaryMessage from "../MobVisionaryMessage/MobVisionaryMessage.jsx"
import PcCard from "../PcCard/PcCard.jsx"

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
    <div className='errorBox'>
      <MobVisionaryMessage values={errorContent}/>
      <PcCard values={errorContent}/>
      
    </div>
    <div className={styles.footer}>
        <Footer/>
    </div>
    </>
  )
}

export default ErrorElement