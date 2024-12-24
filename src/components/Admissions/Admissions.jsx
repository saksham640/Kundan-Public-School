import { data } from "react-router-dom"
import styles from "../Admissions/Admissions.module.css"
import Footer from "../Footer/Footer"
import Nav from "../Nav"
import Table from "../Table/Table"

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

const holidayHeading = ["S. No.", "Name of the Holiday"];

const holidayTableData = {
    data : [
        ["1", "Birthday of Sri Guru Gobind Singh Ji"],
        ["2", "Republic Day"],
        ["3", "Birthday of Sri Guru Ravi Dass Ji"],
        ["4", "Maha Shivratri"],
        ["5", "Shahidi Divas of S. Bhagat Singh Ji"],
        ["6", "Holi"],
        ["7", "Good Friday"],
        ["8", "Id-ul-Fitr"],
        ["9", "Baisakhi"],
        ["10", "Birthday of Dr. B. R. Ambedkar"],
        ["11", "Ram Navami"],
        ["12", "Mahavir Jayanti"],
        ["13", "Parshuram Jayanti"],
        ["14", "Martyrdom Day of Sri Guru Arjun Dev Ji"],
        ["15", "Id-ul-Zuha (Bakrid)"],
        ["16", "Muharram"],
        ["17", "Independence Day"],
        ["18", "Janam Ashtami"],
        ["19", "Mahatama Gandhi Jayanti"],
        ["20", "Agarsain Jayanti"],
        ["21", "Dussehra"],
        ["22", "Birthday of Maharishi Valmiki Ji"],
        ["23", "Birthday of Sri Guru Ram Dass ji"],
        ["24", "Diwali"],
        ["25", "Birthday of Sri Guru Nanak Dev Ji"],
        ["26", "Martyrdom Day of Sri Guru Teg Bahadur Ji"],
        ["27", "Christmas Day"]
    ]
}

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
            <h1>Fee Structure: </h1>
            <Table values={feeTableData} headings={feeHeadings}/>
            <br/>
            <h1>List Of Holidays: </h1>
            <Table values={holidayTableData} headings={holidayHeading}/>
        </>
    )
}