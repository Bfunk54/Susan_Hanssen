import React from "react";
import "./Home.css";
import "./Contact.css";
import Typography from "@mui/material/Typography";

export default function Contact() {
  return (
    <div
      className="container contact"
      style={{
        marginTop: "100px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "10px",
          width: "28%",
          height: "40px",
          backgroundColor: "rgba(28, 28, 28, 0.75)",
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
                width: "320px",
                padding: "20px",
                backgroundColor: "rgba(28, 28, 28, 0.45)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "20px",
                marginBottom: '20px',
                alignSelf: 'center',
                textAlign: 'center'
              }}
            >
        <Typography style={{ fontSize: "18px" }} variant="p">
          Email: <a href="mailto:susan@susanhanssen.com"><nobr/>susan@susanhanssen.com</a>
          <br/>Phone: (954) 465-4117

        </Typography>
      </div>
    </div>
  );
}
