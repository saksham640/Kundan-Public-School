// Import Firestore from Firebase
import {collection, addDoc } from "firebase/firestore"; 
import db from "../configs/fireBaseConfig.js";

// Array of objects to be inserted
const photoGallery = [
  { id: 1, img: "https://i.ibb.co/bKdX49T/bgScroll.jpg" },
  { id: 2, img: "https://i.ibb.co/nkxsPpR/img-1.jpg" },
  { id: 3, img: "https://i.ibb.co/kHkNQL7/img-2.jpg" },
  { id: 4, img: "https://i.ibb.co/88kVrNf/img-3.jpg" },
  { id: 5, img: "https://i.ibb.co/QnKTSBB/img1.jpg" },
  { id: 6, img: "https://i.ibb.co/3ddFnBr/Whats-App-Image-2024-12-21-at-10-31-07-76222969.jpg" },
  { id: 7, img: "https://i.ibb.co/344QXrR/Whats-App-Image-2024-12-21-at-10-31-08-1a739383.jpg" },
  { id: 8, img: "https://i.ibb.co/fYWp50b/Whats-App-Image-2024-12-02-at-13-54-50-d3fefbce.jpg" }, 
];

// Function to add documents to Firestore
const uploadToFirestore = async () => {
  const collectionRef = collection(db, "photoGallery");

  try {
    for (const photo of photoGallery) {
      await addDoc(collectionRef, photo);
      console.log(`Document with id ${photo.id} added successfully.`);
    }
    console.log("All documents added successfully!");
  } catch (error) {
    console.error("Error adding documents: ", error);
  }
};

// Call the function
uploadToFirestore();
