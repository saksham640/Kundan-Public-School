import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer"
import Nav from "../../components/Nav"
import Table from "../../components/Table/Table";
import styles from "../Calender/Calender.module.css"

const headings = 
    ["Event","Date"];

const values = { data: [
    ["Term 1 Begins","1 April"],
    ["FA Cycle 1", "8 May - 16 May"],
    ["Summer Vacation", "1 June - 30 June"],
    ["FA Cycle 2", "22 July - 31 July"],
    ["SA cycle 1", "15 September - 26 September"],
    ["Term 2 Begins", "30 September"],
    ["FA Cycle 3", "6 November - 14 November"],
    ["FA cycle 4","18 December - 24 December"],
    ["Winter Break","25 December - 4 January"],
    ["Session Ends","19 February"],
    ["Annual Exams","20 February - 13 March"],
]
}

export default function Calender(){
    return(
        <div className={styles.Calender}>
            <Nav/>
            <br/>
            <h1 className={styles.heading}>Academic Calender:</h1>
            <h2 className={styles.heading} style={window.innerWidth <= 648 ? {display: "block" }: {display: "none"}}>Rotate Your Device</h2>
            
            <div style={{display:"none"}}>
            <Table headings={headings} values={values}/>
            </div>

            <div className={styles.noverflow}>
            <img className = {styles.calender} src="/calender-real.png"></img>
            </div>
            <br/>
            {/* <h2 className={styles.heading}>Click To Download Calender</h2>
            <div className={styles.downloadBox} onClick={()=>{location.assign("https://drive.google.com/uc?export=download&id=1fdKJ5x25ap-n60ptDFb5QJ6dcfgqlmQF")}}>
                <img src="/logos/pdf.png" style={{maxHeight: "100%"}} id={styles.pdflogo} onClick={()=>{location.assign("https://drive.google.com/uc?export=download&id=1fdKJ5x25ap-n60ptDFb5QJ6dcfgqlmQF")}}></img>
                <a href="https://drive.google.com/uc?export=download&id=1fdKJ5x25ap-n60ptDFb5QJ6dcfgqlmQF">
                    <button className={styles.downloadButton}>Download PDF </button>
                </a>
            </div> */}
            <br/>

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                justifyItems: "center",
                alignContent: "center"
            }}>

            <h2 className={styles.heading}>View All Holidays at: </h2>
            <NavLink to="/holidays"><h2 className={styles.heading} style={{
                backgroundColor:"skyblue",
                width: "5em",
                textAlign: "center",
                borderRadius: "1rem"
            }}>Holidays</h2></NavLink>
            </div>
            <br/>
            <br/>
            <Footer/>
        </div>
    )
}