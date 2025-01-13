import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer/Footer'
import MobVisionaryMessage from "../../components/MobVisionaryMessage/MobVisionaryMessage.jsx"
import styles from "../Contact/Contact.module.css"
import { IoCall, IoMail } from 'react-icons/io5'

const ContactInfo = ()=>{
    return(
      <div className={styles.ContactInfo}>
        <h2 style={{textAlign: "center"}}>Phone</h2>
        <a href='tel:9417348549'><button className={styles.callbtn}><IoCall/> 9417348549</button></a>
        <br/>
        <a href='tel:7973633317'><button className={styles.callbtn}><IoCall/> 7973633317</button></a>
        <h2 style={{textAlign: "center"}}>Mail</h2>
        <a href='mailto:kundanpublicschool@yahoo.com'><button className={styles.callbtn}><IoMail/><p style={{fontSize: "80%"}}>kundanpublicschool@yahoo.com</p></button></a>
        <br/>
      </div>
    )
}

const Contact = () => {

  return (
    <>
    <Nav/>
    <br/>
    <br/>
    <MobVisionaryMessage values={{title:"Contact Info: ",image: "logos/ins2.png", description: <ContactInfo/>}}/>
    <br/>
    <br/>
    <Footer/>
    </>
  )
}

export default Contact