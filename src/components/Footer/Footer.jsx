import { color } from "framer-motion";
import "../Footer/Footer.css"

const Footer = () => {
  const schoolTitle = "Kundan Public School";
  const address = "Sarpanch Colony, Ludhiana";
  const contactInfo = {
    phone: "123456789",
    email: "xyz",
  };
  const googleMapsUrl = "https://goo.gl/maps/example"; // Replace with the actual link to your location on Google Maps

  return (

    <footer style={footerStyles}>
      <div style={containerStyles}>
        <h2 style={{color:"black"}}>{schoolTitle}</h2>
        <p style={textStyles}>
          <strong >Address:</strong> {address}
        </p>
        <p style={textStyles}>
          <strong>Phone:</strong> {contactInfo.phone}
        </p>
        <p style={textStyles}>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${contactInfo.email}`} style={linkStyles}>
            {contactInfo.email}
          </a>
        </p>
        <p style={textStyles}>
          <strong>Location:</strong>{" "}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyles}
          >
            View on Google Maps
          </a>
        </p>
      </div>
    </footer>
  );
};

// Styles
const footerStyles = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "20px 0",
  textAlign: "center",
};

const containerStyles = {
  maxWidth: "800px",
  margin: "0 auto",
};

const textStyles = {
  margin: "10px 0",
  color: "black"
};

const linkStyles = {
  color: "#00bcd4",
  textDecoration: "none",
  backgroundColor:"white",
  borderRadius: "20%",
  padding: "1rem"
};

export default Footer;
