import styles from "../mobileNavBar/MobileNavBar.module.css"
import { useState } from "react";
import TitleChanger from "../TitleChanger/TitleChanger.jsx"
import { IoMenu } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { FaBookOpen } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdHolidayVillage } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { FaClock } from "react-icons/fa6";
import { BiHome } from "react-icons/bi";
import { CgHome } from "react-icons/cg";
import { FcHome } from "react-icons/fc";
import { TiHome } from "react-icons/ti";

export default function MobileNavBar(){

    const [menuPos, setMenuPos] = useState(-70);
    const [menuDisplay, setMenuDisplay] = useState("none");
    function handleMenuButton(){
        if(menuDisplay == "none"){
            setMenuDisplay("flex");
            setTimeout(()=>{
                setMenuPos(0);
            },5)
            return;
        } else if(menuDisplay == "flex"){
            setMenuPos(-70); 
            
            setTimeout(()=>{
                setMenuDisplay("none");
            },350)
        }
    }
    return(
        <div className={styles.NavBar}>
            <img className={styles.logo} src="logos/ins2.png" onClick={()=>{
                location.assign("/");
            }}></img>
            <TitleChanger text1= "Kundan Public School"
            text2 = "कुंदन पब्लिक स्कूल"
            size={5}
            color = {"white"}
            marginLeft = {25}/>
            <IoMenu className={styles.menuIcon} onClick={handleMenuButton}/>
            <div className={styles.menu} style={{right: `${menuPos}vw`, display: menuDisplay}}>
                <div className={styles.navMenu}>
                                <div className={styles.navOptionBox}>
                                <div className={styles.yo} onClick={()=>{
                                    location.assign("/");
                                }}>
                                    <TiHome className={styles.icons}/>
                                    <h3 className={styles.option}>Home</h3>
                                    </div>
                                    <div className={styles.yo} >
                                    <PiStudentFill className={styles.icons}/>
                                    <h3 className={styles.option}>Admissions</h3>
                                    </div>
                                    <div className={styles.yo}>
                                    <FaBookOpen className={styles.icons}/>
                                    <h3 className={styles.option}>Curriculum</h3>
                                    </div>
                                    <div className={styles.yo}>
                                    <FaChalkboardTeacher className={styles.icons}/>
                                    <h3 className={styles.option}>Faculty</h3>
                                    </div>
                                    <div className={styles.yo}>
                                    <FaClock className={styles.icons}/>
                                    <h3 className={styles.option} onClick={()=>{location.assign("/about")}}>Our History</h3>
                                    </div>
                                </div>
                                <div className={styles.navOptionBox}>
                                    <div className={styles.yo}>
                                        <SlCalender className={styles.icons}/>
                                        <h3 className={styles.option}>Calender</h3>
                                    </div>
                
                                    <div className={styles.yo}>
                                        <MdHolidayVillage className={styles.icons}/>
                                        <h3 className={styles.option}>Holidays</h3>
                                    </div>
                
                                    <div className={styles.yo}>
                                        <CiLogin className={styles.icons}/>
                                        <h3 className={styles.option}>Teacher Login</h3>
                                    </div>
                                </div>
                            </div>
            </div>
        </div>
    );
}