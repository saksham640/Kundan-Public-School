import React, { useState } from "react";
import "../EnquiryForm/EnquiryForm.css";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted successfully!\n${JSON.stringify(formData, null, 2)}`);
  };

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
