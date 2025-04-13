import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav";
import styles from "../AcademicCalender/AcademicCalender.module.css";

export default function FeeStructOnly() {
    return (
        <div>
            <Nav />
            <br />
            <br/>
            <div className={styles.noverflow}>
                <img src="/calender-real.png" className={styles.calender}></img>
            </div>
            <br />
            <Footer />
        </div>

    )
}