import React from "react";
import "./Home.css";
import "./Contact.css";
import Typography from "@mui/material/Typography";

export default function Contact() {
  return (
    <div
      className="container contact"
      style={{
        marginTop: "110px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
      className="contactHeader"
        style={{
          textAlign: "center",
          marginBottom: "10px",
          width: "28%",
          height: "40px",
          backgroundColor: "rgba(41, 44, 49, 0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "20px",
          marginBottom: "20px",
          alignSelf: "flex-start",
        }}
      >
        <h2>Contact</h2>
      </div>
      <div
              style={{
                marginBottom: "10px",
                width: "328px",
                padding: "20px",
                backgroundColor: "rgba(41, 44, 49, 0.5)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "20px",
                marginBottom: '20px',
                alignSelf: 'center',
                textAlign: 'left'
              }}
            >
        <Typography style={{ fontSize: "18px" }} variant="p">
          Email: <a style={{textAlign: 'center', backgroundColor: 'rgba(41, 44, 49, 0.55)', borderRadius: '20px', padding: '8px'}} href="mailto:susan@susanhanssen.com"><nobr/>susan@susanhanssen.com</a>

        </Typography>
      </div>
      <div
              style={{
                marginBottom: "10px",
                width: "240px",
                padding: "20px",
                backgroundColor: "rgba(41, 44, 49, 0.5)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "20px",
                marginBottom: '20px',
                alignSelf: 'center',
                textAlign: 'left'
              }}
            >
        <Typography style={{ fontSize: "18px", textAlign: 'center' }} variant="p">
        Phone: <span style={{textAlign: 'center'}}>(954) 465-4117</span>

        </Typography>
      </div>
    </div>
  );
}
