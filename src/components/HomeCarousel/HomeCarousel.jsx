import { useEffect, useState } from "react"
import styles from "./HomeCarousel.module.css"
import FrontTitle from "../FrontTitle/FrontTitle";
import Marquee from "../Marquee/Marquee";

export default function HomeCarousel({imageUrls,titleText,marqueeText}){

    const [index,setIndex] = useState(0);

    function nextImage(){
        if(index == imageUrls.length - 1){
            setIndex(0);
            return;
        }
        setIndex(index+1);
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            nextImage();
        },3000);
        return ()=>{
            clearInterval(interval);
        }
    },[index])


    return(
        <div className={styles.homeCarousel}>
            <FrontTitle titles={titleText}/>
            {imageUrls.map(url=>(
                <img className={styles.carouselImages}
                src={url}
                key={url}
                style={{translate:`${-100*index}%`}}></img>
            ))}
            <Marquee texts = {marqueeText}/>
        </div>
    )
}