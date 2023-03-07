import React from "react";
import Image from "react-bootstrap/Image";
import "./Home.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import img10 from "../img/gallery/10.jpg";

const techIconStyle = {
  padding: "5px",
};
const portfolioPreviewStyle = {
  marginRight: "20px",
};

export default function Home() {
  const image = [{
    id: 10,
    image: img10,
    title: "Bird Feed",
    size: "22x30",
    mode: "Watercolor/Gouache on Gold Gesso",
    sold: "",
  }]
  return (
    <div className="home">
      <section style={{justifyContent: 'center'}} className="portfolio-block block-intro">
      {image.map((image) => (
      <div
              key={image.id}
                style={{ marginBottom: 26 }}
                className="col-10 col-sm-8 col-md-6 col-lg-4 project-sidebar-card"
              >
                <Link
                to="/gallery"
                style={{ color: "white", textDecoration: "none", fontSize: 18 }}
              >
                <Card
                  className="card"
                  bg="transparent"
                  style={{ cursor: "pointer", border: "none"}}
                >
                  <img style={{ width: '100%' }} src={image.image} />

                  {/* <Card.Header
                    style={{
                      textAlign: "center",
                      fontSize: "16px",
                      color: "white",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    {image.title}
                  </Card.Header> */}
                  {/* <Card.Body>
                    <Card.Text style={{ textAlign: 'center', fontSize: "14px", color: 'white' }}>
                    {image.size} <br/>
                    {image.mode} <br/>
                    {image.sold}
                    </Card.Text>
                  </Card.Body> */}
                </Card>
                </Link>
              </div>
      ))}
      </section>
    </div>
  );
}
