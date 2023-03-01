import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "./Footer.css";

function TheFooter() {
  return (
    <MDBFooter
      style={{
        paddingLeft: 20,
        bottom: "5px",
        marginBottom: "10px",
        position: "sticky",
        backgroundColor: "rgba(245, 245, 245, 0.5)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        borderRadius: "20px",
        marginRight: "0px",
      }}
      className="footer"
    >
      <span className="text" style={{ fontSize: "16px", color: 'rgb(76, 76, 76)', alignSelf: 'center' }}>
        Susan Hanssen 2023
      </span>

      <a
        className="socials"
        style={{ padding: "16px", paddingBottom: 0 }}
        href="https://github.com/Bfunk54"
        target="_blank"
        rel="noreferrer"
      >
        <i style={{ fontSize: "40px" }} className="bi bi-github">
          <span style={{ fontSize: "10px" }}>github</span>
        </i>
      </a>

      <a
        className="socials"
        style={{ padding: "16px", paddingBottom: 0 }}
        href="https://www.linkedin.com/in/benjamin-fein-5a73b2242/"
        target="_blank"
        rel="noreferrer"
      >
        <i style={{ fontSize: "40px" }} className="bi bi-linkedin">
          <span style={{ fontSize: "10px", padding: "4px" }}>linkedin</span>
        </i>
      </a>

      <a
        className="socials"
        style={{ padding: "16px", paddingBottom: 0 }}
        href="https://twitter.com/ben_fein"
        target="_blank"
        rel="noreferrer"
      >
        <i style={{ fontSize: "40px" }} className="bi bi-twitter">
          <span style={{ fontSize: "10px" }}>twitter</span>
        </i>
      </a>
    </MDBFooter>
  );
}

export default TheFooter;
