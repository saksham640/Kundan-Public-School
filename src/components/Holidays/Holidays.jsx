import Footer from "../Footer/Footer";
import styles from "../Holidays/Holidays.module.css"
import Nav from "../Nav";
import Table from "../Table/Table"

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

export default function Holidays(){
    return(
        <>
            <Nav/>
            <br/>
            <br/>
            <h1>List of Holidays: </h1>
            <Table values={holidayTableData} headings={holidayHeading}/>
            <Footer/>
            <br/>
            <br/>
        </>
    )
}