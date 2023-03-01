import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qstwfii",
        "template_2v2cgql",
        form.current,
        "1hxpTCUFw0SqFVKrD"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email succesfully sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong!");
        }
      );
    e.target.reset();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginRight: -200,
        marginTop: "180px",
        marginBottom: "20px",
      }}
      className="portfolio-block contact"
    >
      <div style={{ height: "auto" }} className="container">
        <div
          style={{
            textAlign: "center",
            marginBottom: "25px",
            width: "20%",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(245, 245, 245, 0.5)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "20px",
          }}
          className="heading contact"
        >
          <h1>Contact Me</h1>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <label
              style={{
                textAlign: "center",
                marginBottom: "10px",
                width: "8%",
                height: "25px",
                backgroundColor: "rgba(245, 245, 245, 0.4)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "20px",
              }}
              className="form-label labels"
              htmlFor="name"
            >
              Your Name
            </label>
            <input className="form-control item" type="text" id="name"></input>
          </div>
          <div className="mb-3">
            <label
              style={{
                textAlign: "center",
                marginBottom: "10px",
                width: "8%",
                height: "25px",
                backgroundColor: "rgba(245, 245, 245, 0.4)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "20px",
              }}
              className="form-label labels"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="form-control item"
              type="text"
              id="subject"
            ></input>
          </div>
          <div className="mb-3">
            <label
              style={{
                textAlign: "center",
                marginBottom: "10px",
                width: "8%",
                height: "25px",
                backgroundColor: "rgba(245, 245, 245, 0.4)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "20px",
              }}
              className="form-label labels"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="form-control item"
              type="email"
              id="email"
            ></input>
          </div>
          <div className="mb-3">
            <label
              style={{
                textAlign: "center",
                marginBottom: "10px",
                width: "8%",
                height: "25px",
                backgroundColor: "rgba(245, 245, 245, 0.4)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "20px",
              }}
              className="form-label labels"
              htmlFor="message"
            >
              Message
            </label>
            <textarea className="form-control item" id="message"></textarea>
          </div>
          <div className="mb-3">
            <button
              className="btn btn-bd-primary btn lastBtn"
              style={{ width: "100%" }}
              type="submit"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
