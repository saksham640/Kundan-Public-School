import { data } from "react-router-dom"
import styles from "../Admissions/Admissions.module.css"
import Footer from "../Footer/Footer"
import Nav from "../Nav"
import Table from "../Table/Table"
import EnquiryForm from "../EnquiryForm/EnquiryForm"

const AgeHeadings = ["Class", "Age as on March 31, 2025", "Date of Birth Range"]

const AgeTableData = {data: [
    ["Pre-Nursery", "between 2 and 3 Years", "born between April 01, 2022 and March 31, 2023"],
    ["Nursery", "between 3 and 4 Years", "born between April 01, 2021 and March 31, 2022"],
    ["LKG", "between 4 and 5 Years", "born between April 01, 2020 and March 31, 2021"],
    ["UKG", "between 5 and 6 Years", "born between April 01, 2019 and March 31, 2020"],
    ["Class I", "between 6 and 7 Years", "born between April 01, 2018 and March 31, 2019"],
    ["Class II", "between 7 and 8 Years", "born between April 01, 2017 and March 31, 2018"]
]};

const feeHeadings = ["Fee Head", "Frequency", "Class", "Amount (INR)"]
const feeTableData = {
    data : [
        ["Registration & Processing Fee", "One Time; At the time of Registration", "All new registrants", "1500"],
        ["Admission Fee", "One Time; At the time of Admission", "All new admissions", "3000"],
        ["Annual Miscellaneous Charge", "Annual; At the beginning of the Academic Session", "All new admissions", "6000"],
        ["Tuition Fee", "Bi-Monthly", "Pre-Nursery & Nursery", "1800 per month"],
        ["Tuition Fee", "Bi-Monthly", "LKG & UKG", "1500 per month"],
        ["Tuition Fee", "Bi-Monthly", "I - III", "2200 per month"],
        ["Tuition Fee", "Bi-Monthly", "IV - VI", "2500 per month"],
        ["Tuition Fee", "Bi-Monthly", "VII - X", "2700 per month"]
    ]   
}

const style = {marginLef: 500};
export default function Admissions(){
    return(
        <>
            <Nav/>
            <br/>
            <h1>All Information about Admissions: </h1>
            <br/>
            <h1>Age Criteria: </h1>
            <Table values={AgeTableData} headings={AgeHeadings}/>
            <br/>
            <br/>
            <h1>Fee Structure: </h1>
            <Table values={feeTableData} headings={feeHeadings}/>
            <br/>
            <div style={{display: "flex", justifyContent: "center"}}>
            <EnquiryForm/>
            </div>
            <br/>
            <Footer/>
        </>
    )
}