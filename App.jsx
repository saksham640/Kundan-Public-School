import HomeCarousel from "./components/HomeCarousel/HomeCarousel.jsx"
import CardSlider from "./components/CardSlider/CardSlider.jsx";
import Navbar from "./components/Navbar/Navbar.jsx"
import TopNav from "./components/TopNav/TopNav.jsx"
import styles from "../src/App.module.css"
import LongCard from "./components/LongCard/LongCard.jsx"
import CardSliderVertical from "./components/CardSliderVertical/CardSliderVertical.jsx";
import BgScroller from "./components/BgScroller/BgScroller.jsx";
let carouselImages = [];
for(let i = 0; i < 4; i++){
  carouselImages[i] = `/carousel_images/img_${i+1}.jpg`;
}

const titles = ["Welcome To Kundan Public School"];
const marqueeTitle = ["Admissions open for Batch 2025-2026", "Kundan Public School has been Officialy affiliated with CBSE"];
const events = [{name: "Independance Day Activitysdjfnsdkjfnsd", description: "It was a really fun day man", image: "/activity_Images/img_1.jpg"},
{name: "Teacher's Day Celebration", description: "some description about this event", image: "/activity_Images/img_2.jpg"},
{name: "Some activity", description: "some description about this event", image: "/activity_Images/img_3.jpg"},
{name: "Diwali Activity", description: "We made rangoli and stuff", image: "/activity_Images/img_4.jpg"},{name: "Teacher's Day Celebration", description: "some description about this event", image: "/activity_Images/img_2.jpg"},
{name: "Some activity", description: "some description about this event", image: "/activity_Images/img_3.jpg"},
{name: "Diwali Activity", description: "We made rangoli and stuff", image: "/activity_Images/img_4.jpg"}];

const achievements = [
  "Our school implemented a comprehensive STEM curriculum, significantly improving student engagement and performance in science, technology, engineering, and mathematics subjects.",
  "The school robotics team won first place in the regional robotics competition, demonstrating outstanding skills in engineering, programming, and teamwork.",
  "Launched a successful environmental awareness campaign, resulting in the school earning a Green School certification for its efforts in sustainability.",
  "The school's debate team advanced to the national finals, showcasing exceptional public speaking, critical thinking, and argumentation skills.",
  "Students organized and executed a large-scale charity fundraiser, raising significant funds for local and international humanitarian causes.",
  "Introduced a peer tutoring program that led to improved academic performance and stronger collaborative relationships among students.",
  "The school's music department performed a concert at a prestigious venue, receiving acclaim for their exceptional talent and dedication."
];

const message = {image: "/Faculty/president.jpg" ,name:"Some guy's Name", description: "Technical Education is the real jewellery & beauty of human life. It is matter of privilege & immense pleasure that our Institution is producing Technocrats & will help the Country to eradicate unemployment amongst the youth of the Country."}

const parallaxValues = {title:"Campus", description:"The school campus sprawls on an area of 3 acres in Sarpanch Colony Ludhiana amidst scenic beauty of the nature ensuring an eco-friendly environment. The campus and the classrooms are under 24 hour CCTV surveillance providing secure and safe environment for your kids."}


export default function App(){
  return(
    <>
      <TopNav></TopNav>
      <Navbar></Navbar>
      <HomeCarousel imageUrls={carouselImages} titleText={titles} marqueeText={marqueeTitle}/>
      <div className={styles.centreHeadings}>
      <h1 style={{fontFamily : "sans-serif", marginTop : "3rem", marginLeft : "6rem"}}>Latest Events:</h1>
      <h1 style={{fontFamily : "sans-serif", marginTop : "3rem", marginRight:"12vw", color:"navy"}}>Achievements</h1>
      </div>
      <div className={styles.eventsAndAchievements}>
      <CardSlider cardValues = {events}/>
      <CardSliderVertical cardValues = {achievements}/>
      </div>
      <br/>
      <br/>
      <LongCard cardValues={message}/>
      <h1 style={{marginLeft:"6rem"}}>Know The School:</h1>
      <BgScroller parallaxValues = {parallaxValues}/>
      <div style={{marginBottom:"70vh"}}></div>
    </>
  )
} 