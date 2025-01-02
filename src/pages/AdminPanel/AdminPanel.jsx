import Footer from "../../components/Footer/Footer"
import Nav from "../../components/Nav.jsx"
import styles from "../AdminPanel/AdminPanel.module.css"
import PcCard from "../../components/PcCard/PcCard.jsx"
import MobVisionaryMessage from "../../components/MobVisionaryMessage/MobVisionaryMessage.jsx"
import RequestList from "../../components/RequstList/RequestList.jsx"
import { useEffect, useState } from "react"
import { collection, deleteDoc, getDocs, doc,getDoc,setDoc } from "firebase/firestore"
import db from "../../configs/fireBaseConfig.js"
import CardSlider from "../../components/CardSlider/CardSlider.jsx"
import { image } from "framer-motion/client"
import CardSliderVertical from "../../components/CardSliderVertical/CardSliderVertical.jsx"


export default function AdminPanel() {

    const [formVisibility, setFormVisibility] = useState("flex");
    const [requestValues, setRequestValues] = useState([{name: "Loading...", phone: "Loading...", date: "Loading...", email: "Loading..."}]);
    const [cardValues,setCardValues] = useState([{image: "", name: "Loading...", id: "1"},{image: "", name: "Loading...", id: "1"}]);
    const [news,setNews] = useState([{text: "Loading...",},{text: "Loading..."}]);

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

    const getEvents = async function () {
        const collectionRef = collection(db, "schoolEvents");
        const docSnaps = await getDocs(collectionRef);
        let newEvents = [];
        docSnaps.docs.forEach((doc) => {
          newEvents.push({
            name: doc.data().name,
            image: doc.data().image,
            id: doc.id,
          })
        })
        setCardValues(newEvents);
        console.log(newEvents);
        return newEvents;
      }

      const deleteEvent = async function(event){
        const userResponse = confirm("Do you want to delete this event (cannot be undone)");
        if(userResponse){
            const docRef = doc(db,"schoolEvents",`${event.target.value}`);
            await deleteDoc(docRef);
            setCardValues(await getEvents());
        }
      }

      const getNews = async function(){
        const collectionRef = collection(db,"schoolNews");
        const docSnaps = await getDocs(collectionRef);
        let newNews = [];
        docSnaps.docs.forEach((doc)=>{
          newNews.push(
            {
                text: doc.data().news,
                id: doc.id,
            }
          )
        })
        console.log(newNews);
        setNews(newNews);
        return newNews;
      }

      const deleteNews = async function(event){
        const userRequest = confirm("Are you sure you want to delete the news (cannot be undone) ");
        if(userRequest){
            const docRef = doc(db,"schoolNews",`${event.target.value}`);
            await deleteDoc(docRef);
            setNews(await getNews());
        }
      }

      useEffect(()=>{
        getEvents();
        getNews();
      },[]);



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
                    <br/>
                    <CardSlider cardValues={cardValues} deleteFunction={deleteEvent}/>
                    <br/>
                    <br/>
                    <CardSliderVertical cardValues={news} deleteFunction = {deleteNews}/>
                </div>
                <br />
            </div>
        </div>
    )
}