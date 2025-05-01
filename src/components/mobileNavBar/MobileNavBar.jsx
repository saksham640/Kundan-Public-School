import styles from "../mobileNavBar/MobileNavBar.module.css"
import { useState } from "react";
import TitleChanger from "../TitleChanger/TitleChanger.jsx"
import { IoCall, IoMenu } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { FaBookOpen } from "react-icons/fa6";
import { FaChalkboardTeacher, FaSchool } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdHolidayVillage } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { FaClock } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";

export default function MobileNavBar() {

    const [menuPos, setMenuPos] = useState(-70);
    const [menuDisplay, setMenuDisplay] = useState("none");
    function handleMenuButton() {
        if (menuDisplay == "none") {
            setMenuDisplay("flex");
            setTimeout(() => {
                setMenuPos(0);
            }, 5)
            return;
        } else if (menuDisplay == "flex") {
            setMenuPos(-70);

            setTimeout(() => {
                setMenuDisplay("none");
            }, 350)
        }
    }
    return (
        <div className={styles.NavBar}>
            <NavLink to={"/"} className={styles.NavLink}>
                <img className={styles.logo} src="logos/ins4.png"></img>
            </NavLink>

            <TitleChanger text1="Kundan Public School"
                text2="कुंदन पब्लिक स्कूल"
                size={5}
                color={"white"}
                marginLeft={25} />
            <IoMenu className={styles.menuIcon} onClick={handleMenuButton} />
            <div className={styles.menu} style={{ right: `${menuPos}vw`, display: menuDisplay }}>
                <div className={styles.navMenu}>
                    <div className={styles.navOptionBox}>

                        <NavLink to={"/"} className={styles.NavLink}>
                            <div className={styles.yo}>
                                <TiHome className={styles.icons} />
                                <h3 className={styles.option}>Home</h3>
                            </div>
                        </NavLink>
                        <NavLink to={"/admissions"} className={styles.NavLink}>
                            <div className={styles.yo} >
                                <PiStudentFill className={styles.icons} />
                                <h3 className={styles.option}>Admissions</h3>
                            </div>
                        </NavLink>
                        <NavLink to={"/contact"} className={styles.NavLink}>
                            <div className={styles.yo} >
                                <IoCall className={styles.icons} />
                                <h3 className={styles.option}>Contact Us</h3>
                            </div>
                        </NavLink>
                        <NavLink to={"/resources"} className={styles.NavLink}>
                            <div className={styles.yo}>
                                <FaBookOpen className={styles.icons} />
                                <h3 className={styles.option}>Resources</h3>
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
                        <NavLink to={"/calender"} className={styles.NavLink}>
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
                        <a href ={"/Mandatory_Public_Disclosure.pdf"} className={styles.NavLink}>
                            <div className={styles.yo}>
                                <FaFileAlt className={styles.icons} />
                                <h3 className={styles.option}>Mandatory Disclosures</h3>
                            </div>
                        </a>
                        <NavLink to={"/adminPanel"} className={styles.NavLink}>
                            <div className={styles.yo}>
                                <BiLogIn className={styles.icons} />
                                <h3 className={styles.option}>Login</h3>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}