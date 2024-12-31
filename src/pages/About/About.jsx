import React from 'react'
import Nav from '../../components/Nav.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import styles from "./About.module.css"
import MobVisionaryMessage from "../../components/MobVisionaryMessage/MobVisionaryMessage.jsx"
import PcCard from "../../components/PcCard/PcCard.jsx"

const OurHistory = { title: "Kaushalya Kundan Progressive Medical Hospitals & Research Centre Charitable Society, Ludhiana",
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
  
const PrincipalMessage = {
  title: <div>Principal's Message
  
  </div>,
  image:"https://i.ibb.co/zxXhVHz/image.png",
  description: <div>
    <h5 style={{
      fontWeight: "500",
    }}><i>Dr. Anu Singh
  (BPT, MPT, MA (Psy), MA (Edu), Ph. D)
 </i></h5><br/>
 <i> “True teachers are those who use themselves as bridges over which they invite their students to cross; then, having facilitated their crossing, joyfully collapse, encouraging them to create their own.”</i>
  <br/>
  <h3 style={{fontWeight: "500"}}>Here at Kundan Public School, we believe that learning is a lifelong process and the main aim of education is to help students to nurture their innate potentialities and to help them in acquiring quality personality traits for a holistic development</h3>
  <br/>

  <h4 style={{fontWeight: "600"}}>We understand that every child is unique with their own strengths and capacities and hence it is our responsibility to enhance those capabilities to the maximum level, thus attaining the true purpose of education. For this purpose active engagement of student during the learning process is highly motivated in our school encouraging a “student- centric curriculum” thus keeping the students at a central position in the learning process.</h4>
  <br/>
  <h3 style={{
    color: "rgb(49, 49, 49)"
  }}><i>I heartily welcome all the students and their parents into the KPS family assuring good quality education and full support from our KPS Team.</i></h3>
  </div>,
  author: "",
}

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
    <MobVisionaryMessage values={PrincipalMessage}/>
    <br/>
    <PcCard values={OurHistory}/>
    <br/>
    <PcCard values={TheVisionary}/>
    <br/>
    <PcCard values={TheSchool}/>
    <br/>
    <PcCard values={PrincipalMessage}/>
    <br/>
    
    <Footer/>
    </>
  )
}

