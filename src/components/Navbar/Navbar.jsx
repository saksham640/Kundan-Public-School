import styles from "./Navbar.module.css";
import logo from "/logos/insignia.png";
import TitleChanger from "../TitleChanger/TitleChanger.jsx";
import { PiStudentFill } from "react-icons/pi";
import { FaBook, FaBookOpen } from "react-icons/fa6";
import { FaChalkboardTeacher, FaSchool } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdHolidayVillage } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";


export default function Navbar() {

    const title = "Kundan Public School";

    return (
        <div className={styles.navbar}>
            <div className={styles.titleBox}>
                <h1 className={styles.motto}>Learn Achieve Inspire</h1>
            </div>
            <NavLink to={"/"} className={styles.NavLink}>
                <img className={styles.logo} src={logo} alt="Logo" />
            </NavLink>
            <div className={styles.titleBox}>
                <TitleChanger text1={"Kundan Public School, Ludhiana"} text2={"कुंदन पब्लिक स्कूल, लुधियाना"}/>
            </div>

            <div className={styles.navMenu}>
                <div className={styles.navOptionBox}>

                    <NavLink to={"/admissions"} className={styles.NavLink}>
                        <div className={styles.yo}>
                            <PiStudentFill className={styles.icons} />
                            <h3 className={styles.option}>Admissions</h3>
                        </div>
                    </NavLink>
                    <NavLink to={"/cirriculum"} className={styles.NavLink}>
                        <div className={styles.yo}>
                            <FaBookOpen className={styles.icons} />
                            <h3 className={styles.option}>Curriculum</h3>
                        </div>
                    </NavLink>
                    <NavLink to={"/prayer"} className={styles.NavLink}>
                        <div className={styles.yo}>
                            <FaChalkboardTeacher className={styles.icons} />
                            <h3 className={styles.option}>Our Prayer</h3>
                        </div>
                    </NavLink>
                    <NavLink to={"/about"} className={styles.NavLink}>
                        <div className={styles.yo}>
                            <FaSchool className={styles.icons} />
                            <h3 className={styles.option}>About Us</h3>
                        </div>
                    </NavLink>

                </div>
                <div className={styles.navOptionBox}>
                    <NavLink to={"/"} className={styles.NavLink}>
                        <div className={styles.yo}>
                            <HiHome className={styles.icons} />
                            <h3 className={styles.option} >Home</h3>
                        </div>
                    </NavLink>
                    <NavLink to={"/cirriculum"} className={styles.NavLink}>
                        <div className={styles.yo}>
                            <SlCalender className={styles.icons} />
                            <h3 className={styles.option}>Calender</h3>
                        </div>
                    </NavLink>
                    <NavLink to={"/holidays"} className={styles.NavLink}>
                        <div className={styles.yo}>
                            <MdHolidayVillage className={styles.icons} />
                            <h3 className={styles.option}>Holidays</h3>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
