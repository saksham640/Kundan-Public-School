import Footer from "../../components/Footer/Footer"
import Nav from "../../components/Nav.jsx"
import styles from "../AdminPanel/AdminPanel.module.css"
import PcCard from "../../components/PcCard/PcCard.jsx"
import MobVisionaryMessage from "../../components/MobVisionaryMessage/MobVisionaryMessage.jsx"
import RequestList from "../../components/RequstList/RequestList.jsx"
import { useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import db from "../../configs/fireBaseConfig.js"


export default function AdminPanel() {

    const [formVisibility, setFormVisibility] = useState("flex");
    const [requestValues, setRequestValues] = useState([{}]);

    const handleSumbit = async (event) => {
        event.preventDefault();
        if (event.target.form[0].value == "kpsadmin" && event.target.form[1].value == "12345") {
            console.log("welcome");
            setFormVisibility("none");
            const info = await getDocs(collection(db, "requests"));
            console.log(info);
            let vals = [];
            info.docs.forEach((doc) => {
                vals.push({
                    name: doc.data().formData.name,
                    phone: doc.data().formData.phone,
                    email: doc.data().formData.email,
                })
            })
            setRequestValues(vals);
        } else {
            console.log("invalid creds");
        }
    }

    return (
        <div className={styles.adminPanel}>
            <Nav />
            <br />
            <div style={{ display: formVisibility }}>
                <PcCard values={{
                    title: "Login to Access", description: <form>
                        <label for="username">Username: </label>
                        <input type="text" id="username"></input>
                        <br />
                        <label for="password">Password: </label>
                        <input type="password" id="password"></input>
                        <br />
                        <input type="submit" onClick={(event) => { handleSumbit(event) }}></input>
                    </form>,
                    image: "/logos/ins2.png"
                }} />
                <br />
                <MobVisionaryMessage values={{
                    title: "Login to Access", description: <form>
                        <label for="username">Username: </label>
                        <input type="text" id="username"></input>
                        <br />
                        <label for="password">Password: </label>
                        <input type="password" id="password"></input>
                        <br />
                        <input type="submit" onClick={(event) => { handleSumbit(event) }}></input>
                    </form>,
                    image: "/logos/ins2.png"
                }} />
                <br />
            </div>
            <br />
            <div className={styles.requests} style={formVisibility == "none" ? { display: "block" } : { display: "none" }}>
                <RequestList values={requestValues} />
            </div>
            <br />
            <Footer />
        </div>
    )
}