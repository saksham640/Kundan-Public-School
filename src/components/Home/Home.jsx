
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
  "https://i.ibb.co/FHD46tq/Whats-App-Image-2024-12-02-at-13-54-17-60d4038a.jpg",
  "https://i.ibb.co/rp4yL0d/13.jpg",
  "/carousel_images/img_2.jpg",
  "https://i.ibb.co/y0kFW4g/img3.jpg",
  "https://i.ibb.co/JK9Jbmr/IMG-20241224-WA0003-1.jpg",
  "/carousel_images/img_4.jpg",
];

const titles = ["Welcome To Kundan Public School"];
const marqueeTitle = ["Admissions open for Batch 2025-2026", "Kundan Public School has been Approved by the government of punjab"];
const events = [
  { name: "Christmas Celebration", image: "https://i.ibb.co/7WHxXMb/Whats-App-Image-2024-12-24-at-12-16-31-e6075736.jpg", description: "The School carried out a Christmas Celebration on 24th December" },
  { name: "Sports Day", image: "https://i.ibb.co/344QXrR/Whats-App-Image-2024-12-21-at-10-31-08-1a739383.jpg", description: "Students Competing in various Sports Events for Sports Day" },
  { name: "Sports Day", image: "https://i.ibb.co/Vg6TVgn/Whats-App-Image-2024-12-21-at-10-31-10-67f8d88f.jpg", description: "Students being Awarded Medals for their performance in Sports Day" },
  { name: "Trip To Local Zoo", image: "https://i.ibb.co/QnKTSBB/img1.jpg", description: "The School Organized a Trip to The Ludhiana Zoo" },
  { name: "Religious Place Visit", image: "https://i.ibb.co/FHD46tq/Whats-App-Image-2024-12-02-at-13-54-17-60d4038a.jpg", description: "The School organized a trip to Gurudwara Sahib" },
  { name: "Field Excursion to Animal Park", image: "https://i.ibb.co/T4Kb67D/Whats-App-Image-2024-12-02-at-13-53-34-21021c0b.jpg", description: "Field Excursion to Animal Park" },
];

const achievements = [
  <p>Enquiries are Open for New Admission, Kindly Click on <a href="/#/admissions">Admissions</a> To Register</p>,
  <p>List of Holidays is Published. Click <a href="/#/holidays">Holidays</a> To View</p>,
  <p>Kundan Public School has been Approved by The Government of Punjab</p>,
];

const message = { image: "/Faculty/president.jpg", name: "Dr. Rajiner Hora", description: "Technical Education is the real jewellery & beauty of human life. It is matter of privilege & immense pleasure that our Institution is producing Technocrats & will help the Country to eradicate unemployment amongst the youth of the Country." }

const MobMessage = { title: "Visionary", image: "/Faculty/president.jpg", description: "Technical Education is the real jewellery & beauty of human life. It is matter of privilege & immense pleasure that our Institution is producing Technocrats & will help the Country to eradicate unemployment amongst the youth of the Country.", author: "-Dr. Rajinder Hora" }

const parallaxValues = { title: "Campus", description: "The school campus sprawls on an area of 3 acres in Sarpanch Colony Ludhiana amidst scenic beauty of the nature ensuring an eco-friendly environment. The campus and the classrooms are under 24 hour CCTV surveillance providing secure and safe environment for your kids.", offsetConstant: -1600 }

const parallaxValues2 = { title: "Facilities", description: <p>Further, Kundan Public School offers<ul> <li>Lush Green Lawns</li> <li>24 Hour Power Backup</li> <li>Water Cooling Systems & Purifiers</li> <li>CCTV Surveillance</li> <li>Ramp Facility</li> <li>Latest Teaching Technology</li> <li>Spacious Playgrounds</li> </ul></p>, offsetConstant: window.innerWidth <= 648 ? -3100 : -2300 }

const ExperimentalValues = { title: "Staff And Faculty", description: "A collaborative team of well trained, experienced & dedicated teaching staff and supporting staff members, including special educator, Clerical Staff, Security Personnel and assistants, we at Kundan Public School strive to provide qualitative education.", image: "/activity_Images/img_4.jpg", scale: "1", translate: "0" }

const ourTeaching = {
  title: "Our Teaching Methodology", description: `At Kundan Public School we believe that learning is a lifelong process and the main aim of education is to help students to nurture their innate potentialities and to help them in acquiring quality personality traits for a holistic development We understand that every child is unique with their own strengths and capacities and hence it is our responsibility to enhance those capabilities to the maximum level, thus attaining the true purpose of education. For this purpose active engagement of student during the learning process is highly motivated in our school encouraging a student- centric curriculum thus keeping the students at a central position in the learning process`, image: "/logos/insignia.png"
}

const Experimental2Values = { title: "Infrastructure", description: "Kundan Public School offers Lush Green Lawns, 24 Hour Power Backup, Water Cooling Systems & Purifiers CCTV Surveillance, Ramp Facility, Latest Teaching Technology, Spacious Playgrounds etc. ", image: "/carousel_images/img_5.jpg", }

const photoGalleryData = [
  { id: 1, img: "/activity_Images/bgScroll.jpg" },
  { id: 2, img: "/activity_Images/img_1.jpg" },
  { id: 3, img: "/activity_Images/img_2.jpg" },
  { id: 4, img: "/activity_Images/img_3.jpg" },
  { id: 5, img: "https://i.ibb.co/QnKTSBB/img1.jpg" },
  { id: 6, img: "https://i.ibb.co/3ddFnBr/Whats-App-Image-2024-12-21-at-10-31-07-76222969.jpg" },
  { id: 7, img: "https://i.ibb.co/344QXrR/Whats-App-Image-2024-12-21-at-10-31-08-1a739383.jpg" },
  { id: 8, img: "https://i.ibb.co/fYWp50b/Whats-App-Image-2024-12-02-at-13-54-50-d3fefbce.jpg" },
  { id: 9, img: "https://i.ibb.co/tbbwqM8/img12.jpg" },
];

const afterExp2 = { title: "Our Objective", description: "Our objective is to provide the best kind of academic, scientific, technical, cultural, moral and sports education for 360 degree personality development.", image: "https://i.ibb.co/344QXrR/Whats-App-Image-2024-12-21-at-10-31-08-1a739383.jpg", scale: "1", translate: "0" }

const afterExp = { title: "The School", description: "Carrying forward the legacy of over 20 years of experience in academics, the society is now offering its expertise in the field of secondary education, where the young, developing brains of your kids are polished to bring out the genius in them. ", image: "https://i.ibb.co/84ft8YX/Whats-App-Image-2024-12-21-at-10-31-09-d1339696.jpg", scale: "1", translate: "0" }

const researchMethodologyMob = { title: "Our Methodology", image: "/logos/ins2.png", description: "At Kundan Public School we believe that learning is a lifelong process and the main aim of education is to help students to nurture their innate potentialities and to help them in acquiring quality personality traits for a holistic development We understand that every child is unique with their own strengths and capacities and hence it is our responsibility to enhance those capabilities to the maximum level, thus attaining the true purpose of education. For this purpose active engagement of student during the learning process is highly motivated in our school encouraging a student- centric curriculum thus keeping the students at a central position in the learning process", author: "" }


export default function Home() {
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
          <CardSlider cardValues={events} />
          </div>
          <br/>
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
      <br/>
      <div className={styles.supSenior}>
        <PhotoGallery photos={photoGalleryData} />
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