import Footer from "../../components/Footer/Footer"
import Nav from "../../components/Nav.jsx"
import styles from "../AdminPanel/AdminPanel.module.css"
import PcCard from "../../components/PcCard/PcCard.jsx"
import MobVisionaryMessage from "../../components/MobVisionaryMessage/MobVisionaryMessage.jsx"
import RequestList from "../../components/RequstList/RequestList.jsx"
import { useState } from "react"
import { collection, deleteDoc, getDocs, doc,getDoc,setDoc } from "firebase/firestore"
import db from "../../configs/fireBaseConfig.js"


export default function AdminPanel() {

    const [formVisibility, setFormVisibility] = useState("flex");
    const [requestValues, setRequestValues] = useState([{name: "Loading...", phone: "Loading...", date: "Loading...", email: "Loading..."}]);

    const authorization = function (event) {
        event.preventDefault();
        if (event.target.form[0].value == "kpsadmin" && event.target.form[1].value == "12345") {
            console.log("welcome");
            loadRequests();
        } else {
            alert("incorrect credentials");
            location.reload();
        }
    }

    const loadRequests = async (event) => {
        setFormVisibility("none");
        const info = await getDocs(collection(db, "requests"));
        console.log(info);
        let vals = [];
        info.docs.forEach((doc) => {
            vals.push({
                name: doc.data().formData.name,
                phone: doc.data().formData.phone,
                email: (doc.data().formData.email || "Not Given"),
                reqId: doc.id,
                deleteFunction: deleteRequest,
                date: `${doc.data().formData.date}`,
            })
        })
        setRequestValues(vals);
    }

    const getCount = async function () {
        const docRef = doc(db, "count", "requestCount");
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data().count);
        console.log("getCount() executed");
        return (docSnap.data().count);
    }

    const decreaseCount = async function () {
        let newcount = await getCount();
        await setDoc(doc(db, "count", "requestCount"), {
            count: newcount - 1,
        });
    }

    const deleteRequest = async function (e) {
        console.log(e.target);
        const docRef = doc(db, "requests",await e.target.value);
        await deleteDoc(docRef);
        console.log(`${e.target.value} document deleted`);
        await decreaseCount();
        console.log("count decreased");
        await loadRequests();
    }

    return (
        <div className={styles.adminPanel}>
            <div className={styles.contentWrap}>
            <Nav />
            <br />
                <div style={{ display: formVisibility}}>
                    <PcCard values={{
                        title: "Login to Access", description: <form>
                            <label for="username">Username: </label>
                            <input type="text" id="username" style={{
                                borderRadius: "1rem",
                                borderColor: "transparent",
                                padding: "0.5rem"
                                
                            }}></input>
                            <br />
                            <br/>
                            <label for="password">Password: </label>
                            <input type="password" id="password" style={{
                                borderRadius: "1rem",
                                borderColor: "transparent",
                                padding: "0.5rem",
                                
                            }}></input>
                            <br />
                            <br/>
                            <input type="submit" style={{
                                padding: "0.5rem",
                                borderRadius: "1rem",
                                borderColor: "transparent",
                                backgroundColor: "navy",
                                color: "white",
                                fontWeight: "700",
                                fontSize: "large",
                                cursor: "pointer"

                            }} onClick={(event) => { authorization(event) }}></input>
                        </form>,
                        image: "/logos/ins2.png"
                    }} />
                    <br />
                    <MobVisionaryMessage values={{
                        title: "Login to Access", description: <form>
                            <label for="username">Username: </label>
                            <input type="text" id="username" style={{
                                borderRadius: "1rem",
                                borderColor: "transparent",
                                padding: "0.5rem"
                                
                            }}></input>
                            <br />
                            <br/>
                            <label for="password">Password: </label>
                            <input type="password" id="password" style={{
                                borderRadius: "1rem",
                                borderColor: "transparent",
                                padding: "0.5rem",
                                
                            }}></input>
                            <br />
                            <br/>
                            <input type="submit" style={{
                                padding: "0.5rem",
                                borderRadius: "1rem",
                                borderColor: "transparent",
                                backgroundColor: "navy",
                                color: "white",
                                fontWeight: "700",
                                fontSize: "large",
                                cursor: "pointer"

                            }} onClick={(event) => { authorization(event)}}></input>
                        </form>,
                        image: "/logos/ins2.png"
                    }} />
                    <br />
                </div>
                <div className={styles.requests} style={formVisibility == "none" ? { display: "block" } : { display: "none" }}>
                    <h1 className={styles.heading}>Welcome, Admin</h1>
                    <h2 className={styles.heading}>All pending enquiry requests</h2>
                    <br/>
                    <RequestList values={requestValues} />
                    <br/>
                    
                </div>
                <br />
            </div>
        </div>
    )
}