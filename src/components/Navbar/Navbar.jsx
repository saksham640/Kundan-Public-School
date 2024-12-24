import styles from "./Navbar.module.css";
import logo from "/logos/insignia.png";
import TitleChanger from "../TitleChanger/TitleChanger.jsx";
import { PiStudentFill } from "react-icons/pi";
import { FaBookOpen } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdHolidayVillage } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { FaClock } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function Navbar() {

    const title = "Kundan Public School";

    return (
        <div className={styles.navbar}>
            <div className={styles.titleBox}>
                <h1 className={styles.motto}>Learn Achieve Inspire</h1>
            </div>

            <img className={styles.logo} src={logo} alt="Logo" onClick={()=>{
                location.assign("/");
            }}/>

            <div className={styles.titleBox}>
                <h1
                    className={styles.name}>
                    <TitleChanger text1= "Kundan Public School" text2= "कुंदन पब्लिक स्कूल"></TitleChanger>
                </h1>
            </div>

            <div className={styles.navMenu}>
                <div className={styles.navOptionBox}>

                    
                    <div className={styles.yo}>
                    <PiStudentFill className={styles.icons}/>
                    <h3 className={styles.option} onClick={()=>{location.assign("/admissions")}}>Admissions</h3>
                    </div>


                    <div className={styles.yo}>
                    <FaBookOpen className={styles.icons}/>
                    <h3 className={styles.option} onClick={()=>{location.assign("/cirriculum")}}>Curriculum</h3>
                    </div>


                    <div className={styles.yo}>
                    <FaChalkboardTeacher className={styles.icons}/>
                    <h3 className={styles.option} onClick={()=>{location.assign("/faculty")}}>Faculty</h3>
                    </div>


                    <NavLink to={"/about"} className={styles.NavLink}>
                    <div className={styles.yo}>
                    <FaClock className={styles.icons}/>
                    <h3 className={styles.option}>Our History</h3>
                    </div>
                    </NavLink>

                </div>
                <div className={styles.navOptionBox}>
                    <div className={styles.yo}>
                        <SlCalender className={styles.icons}/>
                        <h3 className={styles.option} onClick={()=>{location.assign("/calender")}}>Calender</h3>
                    </div>

                    <div className={styles.yo}>
                        <MdHolidayVillage className={styles.icons}/>
                        <h3 className={styles.option} onClick={()=>{location.assign("/holidays")}}>Holidays</h3>
                    </div>

                    <div className={styles.yo}>
                        <CiLogin className={styles.icons}/>
                        <h3 className={styles.option} onClick={()=>{location.assign("/login")}}>Teacher Login</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
