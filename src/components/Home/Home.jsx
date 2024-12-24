
import HomeCarousel from "../HomeCarousel/HomeCarousel.jsx"
import CardSlider from "../CardSlider/CardSlider.jsx";
import Navbar from "../Navbar/Navbar.jsx"
import TopNav from "../TopNav/TopNav.jsx"
import LongCard from "../LongCard/LongCard.jsx"
import CardSliderVertical from "../CardSliderVertical/CardSliderVertical.jsx";
import BgScroller from "../BgScroller/BgScroller.jsx";
import Experimental from "../Experimental/Experimental.jsx";
import Experimental2 from "../Experimental2/Experimental2.jsx";
import BigCard from "../BigCard/BigCard.jsx";
import PhotoGallery from "../PhotoGallery/PhotoGallery.jsx";
import EnquiryForm from "../EnquiryForm/EnquiryForm.jsx";
import Footer from "../Footer/Footer.jsx";
import MobileNavBar from "../mobileNavBar/MobileNavBar.jsx";
import MobVisionaryMessage from "../MobVisionaryMessage/MobVisionaryMessage.jsx"
import styles from "../Home/Home.module.css"

const carouselImages = [
  "https://i.ibb.co/fpwJ9B8/17.jpg",
  "https://i.ibb.co/rp4yL0d/13.jpg",
  "https://i.ibb.co/CQqVhP2/img9.jpg",
  "https://i.ibb.co/y0kFW4g/img3.jpg",
  "/carousel_images/img_4.jpg",

];

const titles = ["Welcome To Kundan Public School"];
const marqueeTitle = ["Admissions open for Batch 2025-2026", "Kundan Public School has been Approved by the government of punjab"];
const events = [{name: "Independance Day Activi", description: "It was a really fun day man", image: "/activity_Images/img_1.jpg"},
{name: "Teacher's Day Celebration", description: "some description about this event", image: "/activity_Images/img_2.jpg"},
{name: "Some activity", description: "some description about this event", image: "/activity_Images/img_3.jpg"},
{name: "Diwali Activity", description: "We made rangoli and stuff", image: "/activity_Images/img_4.jpg"},{name: "Teacher's Day Celebration", description: "some description about this event", image: "/activity_Images/img_2.jpg"},
{name: "Some activity", description: "some description about this event", image: "/activity_Images/img_3.jpg"},
{name: "Diwali Activity", description: "We made rangoli and stuff", image: "/activity_Images/img_4.jpg"}];

const achievements = [
  "Kundan Public School is soon to be affiliated with CBSE",
  "Some achievement",
  "some achievement",
  "some achievement",
  "some achievement",
  "some achievemnet",
  "some achievement"
];

const message = {image: "/Faculty/president.jpg" ,name:"Dr. Rajiner Hora", description: "Technical Education is the real jewellery & beauty of human life. It is matter of privilege & immense pleasure that our Institution is producing Technocrats & will help the Country to eradicate unemployment amongst the youth of the Country."}

const MobMessage = {title: "Visionary", image: "/Faculty/president.jpg", description: "Technical Education is the real jewellery & beauty of human life. It is matter of privilege & immense pleasure that our Institution is producing Technocrats & will help the Country to eradicate unemployment amongst the youth of the Country.", author: "-Dr. Rajinder Hora"}

const parallaxValues = {title:"Campus", description:"The school campus sprawls on an area of 3 acres in Sarpanch Colony Ludhiana amidst scenic beauty of the nature ensuring an eco-friendly environment. The campus and the classrooms are under 24 hour CCTV surveillance providing secure and safe environment for your kids.",offsetConstant: -2100}

const parallaxValues2 = {title:"Facilities", description:"Further, Kundan Public School offers Lush Green Lawns, 24 Hour Power Backup, Water Cooling Systems & Purifiers CCTV Surveillance, Ramp Facility, Latest Teaching Technology, Spacious Playgrounds etc. ",offsetConstant: -3200}

const ExperimentalValues = {title:"Staff And Faculty", description:"A collaborative team of well trained, experienced & dedicated teaching staff and supporting staff members, including special educator, Clerical Staff, Security Personnel and assistants, we at Kundan Public School strive to provide qualitative education.",image:"/activity_Images/img_4.jpg", scale: "1", translate: "0"}

const ourTeaching = {title:"Our Teaching Methodology", description: `At Kundan Public School we believe that learning is a lifelong process and the main aim of education is to help students to nurture their innate potentialities and to help them in acquiring quality personality traits for a holistic development We understand that every child is unique with their own strengths and capacities and hence it is our responsibility to enhance those capabilities to the maximum level, thus attaining the true purpose of education. For this purpose active engagement of student during the learning process is highly motivated in our school encouraging a student- centric curriculum thus keeping the students at a central position in the learning process`, image: "/logos/insignia.png"
}

const Experimental2Values = {title: "Infrastructure", description:"Kundan Public School offers Lush Green Lawns, 24 Hour Power Backup, Water Cooling Systems & Purifiers CCTV Surveillance, Ramp Facility, Latest Teaching Technology, Spacious Playgrounds etc. ", image: "/carousel_images/img_5.jpg",}

const photoGalleryData = [
  { id: 1, img: "/activity_Images/bgScroll.jpg" },
  { id: 2, img: "/activity_Images/img_1.jpg" },
  { id: 3, img: "/activity_Images/img_2.jpg" },
  { id: 4, img: "/activity_Images/img_3.jpg" },
  { id: 5, img: "/activity_Images/bgScroll.jpg" },
  { id: 6, img: "/activity_Images/img_1.jpg" },
  { id: 7, img: "/activity_Images/img_2.jpg" },
  { id: 8, img: "/activity_Images/img_3.jpg" },
  { id: 9, img: "/activity_Images/img_3.jpg" },
];

const afterExp2 = {title:"Our Objective", description:"Our objective is to provide the best kind of academic, scientific, technical, cultural, moral and sports education for 360 degree personality development.",image:"/carousel_images/img_5.jpg", scale: "1", translate: "0"}

const afterExp = {title:"The School", description:"Carrying forward the legacy of over 20 years of experience in academics, the society is now offering its expertise in the field of secondary education, where the young, developing brains of your kids are polished to bring out the genius in them. ",image:"/carousel_images/img_5.jpg", scale: "1", translate: "0"}

const researchMethodologyMob = {title: "Our Methodology", image: "/logos/ins2.png", description: "At Kundan Public School we believe that learning is a lifelong process and the main aim of education is to help students to nurture their innate potentialities and to help them in acquiring quality personality traits for a holistic development We understand that every child is unique with their own strengths and capacities and hence it is our responsibility to enhance those capabilities to the maximum level, thus attaining the true purpose of education. For this purpose active engagement of student during the learning process is highly motivated in our school encouraging a student- centric curriculum thus keeping the students at a central position in the learning process", author: ""}


export default function Home(){
  return(
    <>
    <nav>
      <TopNav></TopNav>
      <MobileNavBar/>
      <Navbar></Navbar>
    </nav>

      <HomeCarousel imageUrls={carouselImages} titleText={titles} marqueeText={marqueeTitle}/>
      <div className={styles.centreHeadings}>
      <h1 style={{fontFamily : "sans-serif", marginTop : "3rem", marginLeft : "6rem"}}>Latest Events:</h1>
      <h1 style={{fontFamily : "sans-serif", marginTop : "3rem", marginRight:"12vw", color:"navy"}}>Achievements</h1>
      </div>
      <br/>
      <div className={styles.eventsAndAchievements}>
      <CardSlider cardValues = {events}/>
      <br/>
      <CardSliderVertical cardValues = {achievements}/>
      </div>
      <br/>
      <br/>
      <LongCard cardValues={message}/>
      <MobVisionaryMessage values={MobMessage}/>
      <br/>
      <h1 style={{textAlign:"center", fontFamily:"sans-serif", color:"navy"}}>Know The School:</h1>
      <br/>
      <BgScroller parallaxValues = {parallaxValues}/>
      <br/>
      <div className={styles.supSenior}>
        <PhotoGallery photos = {photoGalleryData}/>
        <div className={styles.sup}>
          <Experimental values={ExperimentalValues}/>
          <Experimental2 values={Experimental2Values}/>
        </div>
      </div>
      <BgScroller parallaxValues={parallaxValues2}/>
      <div className={styles.supSenior}>
        <EnquiryForm/>
        <div className={styles.sup}>
          <Experimental values={afterExp}/>
          <Experimental2 values={afterExp2}/>
        </div>
      </div>
      <div className={styles.forBg}>
      <BigCard values={ourTeaching}/>
      <MobVisionaryMessage values={researchMethodologyMob}/>
      </div>
      <br/>
      <Footer/>
    </>
  )
} 