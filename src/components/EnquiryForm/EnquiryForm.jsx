import React, { useState } from "react";
import "../EnquiryForm/EnquiryForm.css";
import db from "../../configs/fireBaseConfig.js"
import { collection,addDoc } from "firebase/firestore";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    callback: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    event.preventDefault()
    console.log(formData);
    const newDoc = await addDoc(collection(db,"requests"),{
      formData
    });
    console.log("sumbitted");
    alert("form submitted, you will get the response as soon as possible");
    window.scrollTo(0,0)
  }

  return (
    <div className="admission-form-container">
      <form className="admission-form" onSubmit={handleSubmit}>
        <h2>Admission Enquiry</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group phone-group">
          <label htmlFor="phone">Phone Number</label>
          <div className="phone-input">
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="1234567890"
              maxLength="10"
              required
            />
          </div>
        </div>
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="callback"
            name="callback"
            checked={formData.callback}
            onChange={handleInputChange}
          />
          <label htmlFor="callback">Request Callback</label>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
