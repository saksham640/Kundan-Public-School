import React, { useState } from "react";

const ImgBBUploader = () => {
  const [file, setFile] = useState(null);
  const API_KEY = "6ec2a3a46418c34ce73ee2dbbbc93cf8"; // Replace with your ImgBB API key

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log(result);

      if (result.success) {
        console.log("HTML Image Link:", result.data.url);
        alert("Image uploaded successfully! Check the console for the HTML image link.");
      } else {
        console.error("Upload failed:", result.error.message);
        alert("Image upload failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>UPLOAD CARD IMAGE:</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} style={{ marginLeft: "10px" }}>
        Upload
      </button>
    </div>
  );
};

export default ImgBBUploader;
