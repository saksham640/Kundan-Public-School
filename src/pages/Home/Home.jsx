import HomeCarousel from "../../components/HomeCarousel/HomeCarousel.jsx"
import CardSlider from "../../components/CardSlider/CardSlider.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx"
import TopNav from "../../components/TopNav/TopNav.jsx"
import CardSliderVertical from "../../components/CardSliderVertical/CardSliderVertical.jsx";
import BgScroller from "../../components/BgScroller/BgScroller.jsx";
import Experimental from "../../components/Experimental/Experimental.jsx";
import Experimental2 from "../../components/Experimental2/Experimental2.jsx";
import BigCard from "../../components/BigCard/BigCard.jsx";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery.jsx";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import MobileNavBar from "../../components/mobileNavBar/MobileNavBar.jsx";
import MobVisionaryMessage from "../../components/MobVisionaryMessage/MobVisionaryMessage.jsx"
import styles from "../Home/Home.module.css"

import db from "../../configs/fireBaseConfig.js"
import { getDocs, setDoc, collection, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

const carouselImages = [
  "https://i.ibb.co/FHD46tq/Whats-App-Image-2024-12-02-at-13-54-17-60d4038a.jpg",
  "https://i.ibb.co/rp4yL0d/13.jpg",
  "/carousel_images/img_2.jpg",
  "https://i.ibb.co/y0kFW4g/img3.jpg",
  "https://i.ibb.co/JK9Jbmr/IMG-20241224-WA0003-1.jpg",
  "/carousel_images/img_4.jpg",
];

const titles = ["“Education is not the filling of a pail, but the lighting of a fire.”"];
const marqueeTitle = ["Admissions open for Batch 2025-2026", "Kundan Public School has been Approved by the government of punjab"];

const message = { image: "/Faculty/president.jpg", name: "Dr. Rajiner Hora", description: "Technical Education is the real jewellery & beauty of human life. It is matter of privilege & immense pleasure that our Institution is producing Technocrats & will help the Country to eradicate unemployment amongst the youth of the Country." }

const MobMessage = { title: "Visionary", image: "/Faculty/president.jpg", description: "Technical Education is the real jewellery & beauty of human life. It is matter of privilege & immense pleasure that our Institution is producing Technocrats & will help the Country to eradicate unemployment amongst the youth of the Country.", author: "-Dr. Rajinder Hora" }

const parallaxValues = { 
  title: "Campus", 
  description: 
    <div style={{ maxWidth: "50vw", margin: "0 auto" }}>
      The school campus sprawls on an area of 3 acres in Sarpanch Colony Ludhiana amidst scenic beauty of the nature ensuring an eco-friendly environment. The campus and the classrooms are under 24 hour CCTV surveillance providing secure and safe environment for your kids.
      <ul style={window.innerWidth <= 648 ? {fontSize: "95%"}: {display: "flex", margin: "1rem", fontSize: "110%", justifyContent: "center", alignItems: "center", justifySelf: "center",}}>
        <br/>
      </ul>
    </div>,
  offsetConstant: window.innerWidth <= 648 ? -1500 : -1600, 
  image: window.innerWidth <= 648 
    ? "https://i.ibb.co/344QXrR/Whats-App-Image-2024-12-21-at-10-31-08-1a739383.jpg"
    : "https://i.ibb.co/Czkct9x/img-3.jpg"
}

const parallaxValues2 = { 
  title: "Facilities", 
  description:
    <div style={{ maxWidth: "50vw", margin: "0 auto" }}>
      Kundan Public School offers
      <ul style={window.innerWidth <= 648 ? {fontSize: "95%"}: {display: "flex", margin: "1rem", fontSize: "110%", justifyContent: "center", alignItems: "center", justifySelf: "center",}}>
        <br/>
        <div style={{marginRight: "10%",paddingLeft: "10px"}}>
          <li style={{paddingBottom: "5px"}}>Lush Green Lawns</li>
          <li style={{paddingBottom: "5px"}}>24 Hour Power Backup</li>
        </div>
        <div style={{marginRight: "10%",paddingLeft: "10px"}}>
          <li style={{paddingBottom: "5px"}}>Water Cooling Systems & Purifiers</li>
          <li style={{paddingBottom: "5px"}}>CCTV Surveillance</li> <li style={{paddingBottom: "5px"}}>Ramp Facility</li>
        </div>
        <div style={{paddingLeft: "10px"}}>
          <li style={{paddingBottom: "5px"}}>Latest Teaching Technology</li>
          <li style={{paddingBottom: "5px"}}>Spacious Playgrounds</li> 
        </div>
      </ul>
    </div>,
  offsetConstant: window.innerWidth <= 648 ? -3200 : -2600, 
  image: "https://i.ibb.co/yVd3CXv/18.jpg"
}

const ExperimentalValues = { title: "Staff And Faculty", description: <b style={window.innerWidth <= 648? {fontWeight: "400"}: {fontWeight: "100"}}>A collaborative team of well trained, experienced & dedicated teaching staff and supporting staff members, including special educator, Clerical Staff, Security Personnel and assistants, we at Kundan Public School strive to provide qualitative education.</b> , image: "/activity_Images/img_4.jpg", scale: "1", translate: "0" }

const ourTeaching = {
  title: "Our Teaching Methodology", description: <p style={{fontWeight: "400"}}>At Kundan Public School we believe that learning is a lifelong process and the main aim of education is to help students to nurture their innate potentialities and to help them in acquiring quality personality traits for a holistic development We understand that every child is unique with their own strengths and capacities and hence it is our responsibility to enhance those capabilities to the maximum level, thus attaining the true purpose of education. For this purpose active engagement of student during the learning process is highly motivated in our school encouraging a student- centric curriculum thus keeping the students at a central position in the learning process</p>, image: "/logos/ins2.png"
}

const Experimental2Values = { title: "", description: <b style={window.innerWidth <= 648? {fontWeight: "400"}: {fontWeight: "100"}}>Kundan Public School offers Lush Green Lawns, 24 Hour Power Backup, Water Cooling Systems & Purifiers CCTV Surveillance, Ramp Facility, Latest Teaching Technology, Spacious Playgrounds etc.</b>, image: "/carousel_images/img_5.jpg", }

const afterExp2 = { title: "Our Objective", description: <b style={window.innerWidth <= 648? {fontWeight: "400"}: {fontWeight: "100"}}>Our objective is to provide the best kind of academic, scientific, technical, cultural, moral and sports education for 360 degree personality development.</b>, image: "https://i.ibb.co/344QXrR/Whats-App-Image-2024-12-21-at-10-31-08-1a739383.jpg", scale: "1", translate: "0" }

const afterExp = { title: "The School", description: <b style={window.innerWidth <= 648? {fontWeight: "400"}: {fontWeight: "100"}}>Carrying forward the legacy of over 20 years of experience in academics, the society is now offering its expertise in the field of secondary education, where the young, developing brains of your kids are polished to bring out the genius in them.</b>, image: "https://i.ibb.co/84ft8YX/Whats-App-Image-2024-12-21-at-10-31-09-d1339696.jpg", scale: "1", translate: "0" }

const researchMethodologyMob = { title: "Our Methodology", image: "/logos/ins2.png", description: <p>At Kundan Public School we believe that learning is a lifelong process and the main aim of education is to help students to nurture their innate potentialities and to help them in acquiring quality personality traits for a holistic development We understand that every child is unique with their own strengths and capacities and hence it is our responsibility to enhance those capabilities to the maximum level, thus attaining the true purpose of education. For this purpose active engagement of student during the learning process is highly motivated in our school encouraging a student- centric curriculum thus keeping the students at a central position in the learning process</p>, author: "" }



export default function Home() {

  const [events, setEvents] = useState([{name: "Loading...", image: "Loading..."}])
  const [achievements,setAchievements] = useState([{text: "Loading..."},{text: "Loading..."}]);
  const [galleryData,setGalleryData] = useState([{id: "0", img: ""},{id: "1", img: ""}]);

  const getEvents = async function () {
    const collectionRef = collection(db, "schoolEvents");
    const docSnaps = await getDocs(collectionRef);
    let newEvents = [];
    docSnaps.docs.forEach((doc) => {
      newEvents.push({
        name: doc.data().name,
        image: doc.data().image,
      })
    })
    setEvents(newEvents);
  }

  const getNews = async function(){
    const collectionRef = collection(db,"schoolNews");
    const docSnaps = await getDocs(collectionRef);
    let newNews = [];
    docSnaps.docs.forEach((doc)=>{
      newNews.push({
        text: doc.data().news,
        id: doc.id,
      }
      )
    })
    setAchievements(newNews);
  }

  const getPhotoGallery = async function(){
    const collectionRef = collection(db,"photoGallery");
    const docSnaps = await getDocs(collectionRef);
    let newPhotoGallery = [];
    docSnaps.docs.forEach((doc)=>{
      newPhotoGallery.push({
        id:doc.id,
        img: doc.data().img,
      })
    })
    setGalleryData(newPhotoGallery);
  }


  useEffect(() => {
    getEvents();
    getNews();
    getPhotoGallery();
  }, []);

  return (
    <>
      <nav>
        <TopNav></TopNav>
        <MobileNavBar />
        <Navbar></Navbar>
      </nav>

      <HomeCarousel imageUrls={carouselImages} titleText={titles} marqueeText={marqueeTitle} />
      <br />
      <div className={styles.eventsAndAchievements}>

        <div className={styles.withHeadings}>
          <h1>Events:</h1>
          <CardSlider cardValues={events} isAuth={false}/>
        </div>
        <br />
        <div className={styles.withHeadings}>
          <h1>School News:</h1>
          <CardSliderVertical cardValues={achievements} />
        </div>
      </div>
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: "center", fontFamily: "sans-serif", color: "navy" }}>Know The School:</h1>
      <br />
      <BgScroller parallaxValues={parallaxValues} />
      <br />
      <div className={styles.supSenior}>
        <PhotoGallery photos={galleryData} />
        <div className={styles.sup}>
          <Experimental values={ExperimentalValues} />
          <Experimental2 values={Experimental2Values} />
        </div>
      </div>
      <br />
      <BgScroller parallaxValues={parallaxValues2} />
      <br />
      <div className={styles.supSenior}>
        <EnquiryForm />
        <div className={styles.sup}>
          <Experimental values={afterExp} />
          <Experimental2 values={afterExp2} />
        </div>
      </div>
      <div className={styles.forBg}>
        <BigCard values={ourTeaching} />
        <MobVisionaryMessage values={researchMethodologyMob} />
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}