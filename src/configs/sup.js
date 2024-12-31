// Import Firebase Firestore
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
import db from "../configs/fireBaseConfig.js";

const schoolNewsArray = [
  { name: "Christmas Celebration", image: "https://i.ibb.co/7WHxXMb/Whats-App-Image-2024-12-24-at-12-16-31-e6075736.jpg", description: "The School carried out a Christmas Celebration on 24th December" },
  { name: "Sports Day", image: "https://i.ibb.co/344QXrR/Whats-App-Image-2024-12-21-at-10-31-08-1a739383.jpg", description: "Students Competing in various Sports Events for Sports Day" },
  { name: "Sports Day", image: "https://i.ibb.co/Vg6TVgn/Whats-App-Image-2024-12-21-at-10-31-10-67f8d88f.jpg", description: "Students being Awarded Medals for their performance in Sports Day" },
  { name: "Trip To Local Zoo", image: "https://i.ibb.co/QnKTSBB/img1.jpg", description: "The School Organized a Trip to The Ludhiana Zoo" },
  { name: "Religious Place Visit", image: "https://i.ibb.co/FHD46tq/Whats-App-Image-2024-12-02-at-13-54-17-60d4038a.jpg", description: "The School organized a trip to Gurudwara Sahib" },
  { name: "Field Excursion to Animal Park", image: "https://i.ibb.co/T4Kb67D/Whats-App-Image-2024-12-02-at-13-53-34-21021c0b.jpg", description: "Field Excursion to Animal Park" },
];

async function pushSchoolNewsWithId() {
  const collectionRef = collection(db, "schoolEvents");

  try {
    for (let i = 0; i < schoolNewsArray.length; i++) {
      const { name, image } = schoolNewsArray[i]; // Destructure to include only name and image
      const docRef = doc(collectionRef, i.toString()); // Use i as the document ID
      await setDoc(docRef, { name, image });
      console.log(`Document added with ID ${i} for: ${name}`);
    }
    console.log("All documents added successfully with IDs!");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

// Call the function
pushSchoolNewsWithId();
