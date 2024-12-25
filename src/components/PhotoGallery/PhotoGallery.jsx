import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../PhotoGallery/PhotoGallery.module.css";

export default function PhotoGallery({ photos }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className={styles.photoGallery}>
        <div className={styles.row}>
          <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
            Photo Gallery (click to view)
          </h1>
        </div>
        <div className={styles.grid}>
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo.img}
              alt={`Photo ${index}`}
              className={styles.img}
              onClick={() => handleImageClick(photo.img)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <motion.div
          className={styles.popup}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePopup}
        >
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closePopup}>
              &times;
            </button>
            <motion.img
              src={selectedImage}
              alt="Full view"
              className={styles.popupImage}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </>
  );
}
