import Footer from "../../components/Footer/Footer"
import Nav from "../../components/Nav.jsx"
import styles from "../AdminPanel/AdminPanel.module.css"
import PcCard from "../../components/PcCard/PcCard.jsx"
import MobVisionaryMessage from "../../components/MobVisionaryMessage/MobVisionaryMessage.jsx"
import RequestList from "../../components/RequstList/RequestList.jsx"
import { useEffect, useState } from "react"
import { collection, deleteDoc, getDocs, doc, getDoc, setDoc, addDoc } from "firebase/firestore"
import db from "../../configs/fireBaseConfig.js"
import CardSlider from "../../components/CardSlider/CardSlider.jsx"
import { image } from "framer-motion/client"
import CardSliderVertical from "../../components/CardSliderVertical/CardSliderVertical.jsx"
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery.jsx"


export default function AdminPanel() {

    const [formVisibility, setFormVisibility] = useState("flex");
    const [requestValues, setRequestValues] = useState([{ name: "Loading...", phone: "Loading...", date: "Loading...", email: "Loading..." }]);
    const [cardValues, setCardValues] = useState([{ image: "", name: "Loading...", id: "1" }, { image: "", name: "Loading...", id: "1" }]);
    const [news, setNews] = useState([{ text: "Loading...", }, { text: "Loading..." }]);
    const [galleryData, setGalleryData] = useState([{}, {}]);
    const [newsField, setNewsField] = useState();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [file, setFile] = useState(null);
    const [fileResponse, setFileResponse] = useState("nothing");
    const API_KEY = "6ec2a3a46418c34ce73ee2dbbbc93cf8";
    const [eventField, setEventField] = useState("");
    const [galleryFile, setGalleryFile] = useState(null);

    const authorization = function (event) {
        event.preventDefault();
        if (event.target.form[0].value == "kpsadmin" && event.target.form[1].value == "12345") {
            console.log("welcome");
            loadRequests();
            setIsAuthorized(true);
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
        const docRef = doc(db, "requests", await e.target.value);
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

    const deleteEvent = async function (event) {
        if (isAuthorized) {
            const userResponse = confirm("Do you want to delete this event (cannot be undone)");
            if (userResponse) {
                const docRef = doc(db, "schoolEvents", `${event.target.value}`);
                await deleteDoc(docRef);
                setCardValues(await getEvents());
            }
        } else {
            prompt("not authorized/Login again");
        }
    }

    const getNews = async function () {
        const collectionRef = collection(db, "schoolNews");
        const docSnaps = await getDocs(collectionRef);
        let newNews = [];
        docSnaps.docs.forEach((doc) => {
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

    const deleteNews = async function (event) {
        if (isAuthorized) {
            const userRequest = confirm("Are you sure you want to delete the news (cannot be undone) ");
            if (userRequest) {
                const docRef = doc(db, "schoolNews", `${event.target.value}`);
                await deleteDoc(docRef);
                setNews(await getNews());
            }
        } else {
            prompt("not authorized/Login again");
        }
    }

    const addNews = async function () {
        if (isAuthorized) {
            await addDoc(collection(db, "schoolNews"), { news: newsField });
            setNews(await getNews());
        } else {
            prompt("not authorized/Login again");
        }
    }

    const handleImage = async function (event) {
        setFile(event.target.files[0]);
    }

    const uploadImage = async function (imageTarget) {
        const formData = new FormData();
        formData.append("image", imageTarget == "gallery" ? galleryFile : file);
        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
                method: "POST",
                body: formData,
            });
            const result = await response.json();
            console.log(result);

            if (result.success) {
                console.log("Successfully uploaded image link is : ", result.data.url);
                setFileResponse("url-generated");
                return (result.data.url);
            }
        } catch (event) {
            console.log("error ", event);
        }
    }

    const handleEventField = function (event) {
        setEventField(event.target.value);
    }

    const addEvent = async function () {
        if(isAuthorized){
        const docRef = collection(db, "schoolEvents");
        await addDoc(docRef, {
            image: await uploadImage(),
            name: eventField,
        });
        console.log("successfully added");
        setCardValues(await getEvents());
    }
    }

    const getPhotoGallery = async function () {
        const collectionRef = collection(db, "photoGallery");
        const docSnaps = await getDocs(collectionRef);
        let newPhotoGallery = [];
        docSnaps.docs.forEach((doc) => {
            newPhotoGallery.push({
                id: doc.id,
                img: doc.data().img,
            })
        })
        setGalleryData(newPhotoGallery);
        return (newPhotoGallery);
    }

    const deleteGalleryPhoto = async function (event) {
        if (isAuthorized) {
            const userRequest = confirm("Are you sure you want to delete the news (cannot be undone) ");
            if (userRequest) {
                const docRef = doc(db, "photoGallery", `${event.target.value}`);
                await deleteDoc(docRef);
                setGalleryData(await getPhotoGallery());
            }
        } else {
            prompt("not authorized/Login again");
        }
    }

    const handleGalleryImage = function (event) {
        setGalleryFile(event.target.files[0])
    }

    const addPhotoGallery = async function () {
        if (isAuthorized) {
            const collectionRef = collection(db, "photoGallery");
            await addDoc(collectionRef, {
                img: await uploadImage("gallery"),
                id: Math.ceil(Math.random() * 100),
            })
            setGalleryData(await getPhotoGallery());
        }
    }

    useEffect(() => {
        getEvents();
        getNews();
        getPhotoGallery();
    }, []);



    return (
        <div className={styles.adminPanel}>
            <div className={styles.contentWrap}>
                <Nav />
                <br />
                <div style={{ display: formVisibility }}>
                    <PcCard values={{
                        title: "Login to Access", description: <form>
                            <label for="username">Username: </label>
                            <input type="text" id="username" style={{
                                borderRadius: "1rem",
                                borderColor: "transparent",
                                padding: "0.5rem"

                            }}></input>
                            <br />
                            <br />
                            <label for="password">Password: </label>
                            <input type="password" id="password" style={{
                                borderRadius: "1rem",
                                borderColor: "transparent",
                                padding: "0.5rem",

                            }}></input>
                            <br />
                            <br />
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
                            <br />
                            <label for="password">Password: </label>
                            <input type="password" id="password" style={{
                                borderRadius: "1rem",
                                borderColor: "transparent",
                                padding: "0.5rem",

                            }}></input>
                            <br />
                            <br />
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
                </div>
                <div className={styles.requests} style={formVisibility == "none" ? { display: "block" } : { display: "none" }}>
                    <h1 className={styles.heading}>Welcome, Admin</h1>
                    <h2 className={styles.heading}>All pending enquiry requests</h2>
                    <br />
                    <RequestList values={requestValues} />
                    <br />
                    <br />
                    <div className={styles.iAmTired}>
                        <h2 className={styles.heading}>School News Controls (Delete)</h2>
                        <CardSlider cardValues={cardValues} deleteFunction={deleteEvent} isAuth={true} />
                        <h2 className={styles.heading}>School News Controls (Add a New Card)</h2>
                        <div className={styles.addCard}>
                            <h2 style={fileResponse == "file-sending" ? {} : { display: "none" }}>PLEASE WAIT DATA IS BEING SENT...</h2>
                            <div style={fileResponse == "file-sending" ? { display: "none" } : {}}>
                                <h2>Click to add New Card's Image</h2>
                                <input type="file" onChange={handleImage}></input>
                                <input type="text" placeholder="Text Material Goes here" onChange={() => { handleEventField(event) }}></input>
                                <button className={styles.btn} onClick={() => { addEvent(); setFileResponse("file-sending") }}>Submit</button>
                            </div>

                        </div>
                        <div style={{ borderBottom: "1px solid black", width: "100%" }}></div>
                        <hr />
                        <h2 className={styles.heading}>School News Controls (Delete)</h2>
                        <br />
                        <CardSliderVertical cardValues={news} deleteFunction={deleteNews} isAuth={true} />
                        <br />
                        <h2 className={styles.heading}>Add News</h2>
                        <br />
                        <div className={styles.addNews}>
                            <input type="text" onChange={() => { setNewsField(event.target.value) }}></input>
                            <br />
                            <button onClick={addNews} className={styles.btn}>Add News!</button>
                        </div>
                        <div style={{ borderBottom: "1px solid black", width: "100%" }}></div>
                        <div style={{}}>
                            <PhotoGallery photos={galleryData} isAuth={true} deleteFunction={() => { deleteGalleryPhoto(event) }} />
                            <br />
                            <div className={styles.addCard}>
                                <h2 style={fileResponse == "file-sending" ? {} : { display: "none" }}>PLEASE WAIT DATA IS BEING SENT...</h2>
                                <div style={fileResponse == "file-sending" ? { display: "none" } : {}}>
                                    <h2>Click to add New Card's Image</h2>
                                    <input type="file" onChange={handleGalleryImage}></input>
                                    <button className={styles.btn} onClick={() => { addPhotoGallery(); setFileResponse("file-sending") }}>Submit</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <br />
            </div>
            <Footer />
        </div>
    )
}