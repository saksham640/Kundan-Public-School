import Footer from "../../components/Footer/Footer"
import Nav from "../../components/Nav"
import Table from "../../components/Table/Table";

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


export default function FeeStructOnly(){
    return(
        <div>
            <Nav/>
            <br/>
            <Table headings={feeHeadings} values={feeTableData} />
            <br/>
            <Footer/>
        </div>

    )
}