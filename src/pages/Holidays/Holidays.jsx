import Footer from "../../components/Footer/Footer.jsx";
import styles from "../Holidays/Holidays.module.css"
import Nav from "../../components/Nav.jsx";
import Table from "../../components/Table/Table.jsx"

const holidayHeading = ["Date", "Name of the Holiday"];

const holidayTableData = {
    data: [
        ["17 January", "Birthday of Sri Guru Gobind Singh Ji"],
        ["26 January", "Republic Day"],
        ["27 February", "Birthday of Sri Guru Ravi Dass Ji"],
        ["8 March", "Maha Shivratri"],
        ["23 March", "Shahidi Divas of S. Bhagat Singh Ji"],
        ["25 March", "Holi"],
        ["29 March", "Good Friday"],
        ["10 April", "Id-ul-Fitr"],
        ["13 April", "Baisakhi"],
        ["14 April", "Birthday of Dr. B. R. Ambedkar"],
        ["17 April", "Ram Navami"],
        ["21 April", "Mahavir Jayanti"],
        ["22 April", "Parshuram Jayanti"],
        ["1 June", "Martyrdom Day of Sri Guru Arjun Dev Ji"],
        ["17 June", "Id-ul-Zuha (Bakrid)"],
        ["16 July", "Muharram"],
        ["15 August", "Independence Day"],
        ["26 August", "Janam Ashtami"],
        ["2 October", "Mahatama Gandhi Jayanti"],
        ["3 October", "Agarsain Jayanti"],
        ["12 October", "Dussehra"],
        ["27 October", "Birthday of Maharishi Valmiki Ji"],
        ["30 October", "Birthday of Sri Guru Ram Dass Ji"],
        ["12 November", "Diwali"],
        ["27 November", "Birthday of Sri Guru Nanak Dev Ji"],
        ["24 December", "Martyrdom Day of Sri Guru Teg Bahadur Ji"],
        ["25 December", "Christmas Day"]
    ]
    
}

export default function Holidays(){
    return(
        <>
            <Nav/>
            <br/>
            <br/>
            <h1 className={styles.heading}>List of Holidays: </h1>
            <Table values={holidayTableData} headings={holidayHeading}/>
            <br/>
            <Footer/>
        </>
    )
}