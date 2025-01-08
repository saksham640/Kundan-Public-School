import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "../PhotoGallery/PhotoGallery.module.css";

export default function PhotoGallery({ photos, isAuth, deleteFunction }) {
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
          <h2 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
            Photo Gallery (Click To View)
          </h2>
        </div>
        <div className={styles.grid}>
          {photos.map((photo) => (
            <div key={photo.id} className={styles.photoItem}>
              <img
                src={photo.img}
                alt={`Photo ${photo.id}`}
                className={styles.img}
                onClick={() => handleImageClick(photo.img)}
              />
              {isAuth && (
                <button
                  className={styles.deleteButton}
                  value={photo.id}
                  onClick={(e) => deleteFunction(e.target.value)}
                >
                  Delete
                </button>
              )}
            </div>
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
          <div
            className={styles.popupContent}
            onClick={(e) => e.stopPropagation()}
          >
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
