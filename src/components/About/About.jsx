import React from 'react'
import Nav from '../Nav.jsx'
import Footer from '../Footer/Footer.jsx'
import styles from "../About/About.module.css"
import MobVisionaryMessage from "../MobVisionaryMessage/MobVisionaryMessage.jsx"
import PcCard from "../PcCard/PcCard.jsx"

const OurHistory ={ title: "Kaushalya Kundan Progressive Medical Hospitals & Research Centre Charitable Society, Ludhiana",
  image:" ",
  description: "The founder member cum president of the society Dr. Swarn Lata Hora is a renowned gynaecologist, an active humanist, dedicated teacher in the medical profession and an avid social worker. The members of the society comprises of esteemed academicians, social workers, industrialists and eminent philanthropists. The society is essentially a service oriented philanthropic mission dedicated to provide affordable education to the down-trodden and weak sections of the society. At present Society is running the following institution under unparalleled wisdom & acumen of its current members:",
  author: ""};

const TheVisionary = {title: "The Visionary",
  image: "Faculty/president.jpg",
  description: "Great minds endorse greater responsibilities and share the burdens of society as their own. Such was the zeal of Late Dr. Rajinder Parkash Hora, the founder of the society, an eminent philanthropist, educationist and a pioneer in the field of medical services in Ludhiana. Kundan Public School is the brain child of his exemplary vision wherein he placed the service to society as the supreme motive. We at Kundan Public School strive daily to prepare our students for the challenges that future might contain for them, so that they are self-motivated, autonomous, independent and thus self-sufficient in life..",
  author: ""};

const TheSchool = {title: "The School",
  image: "logos/ins2.png",
  description: 
 "Kundan Public School is run by a society named as Kaushalya Kundan Progressive Medical Hospitals & Research Centre Registered Charitable Society. The society was established in the year 2000 & was registered under societies registration act (XXI of 1860) and as amended by Punjab amendment act 1957.",
  author: ""};
  

export default function About() {
  return (
    <>
    <Nav/>
    <br/>
    <h1 className={styles.heading}>About Us:</h1>
    <br/>
    <MobVisionaryMessage values={OurHistory}/>
    <br/>
    <MobVisionaryMessage values={TheVisionary}/>
    <br/>
    <MobVisionaryMessage values={TheSchool}/>
    <br/>
    <PcCard values={OurHistory}/>
    <br/>
    <PcCard values={TheVisionary}/>
    <br/>
    <PcCard values={TheSchool}/>
    <br/>
    
    <Footer/>
    </>
  )
}

