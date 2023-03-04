import React from "react";
import Image from "react-bootstrap/Image";
import "./Home.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import img12 from "../img/gallery/12.jpg";

const techIconStyle = {
  padding: "5px",
};
const portfolioPreviewStyle = {
  marginRight: "20px",
};

export default function Home() {
  const image = [{ id: 12, image: img12, title: 'The Disguise', size: '36x48', mode: 'Acrylic on Canvas', sold: 'SOLD' }]
  return (
    <div className="home">
      <section style={{justifyContent: 'center'}} className="portfolio-block block-intro">
      {image.map((image) => (
      <div
              key={image.id}
                style={{ marginBottom: 26 }}
                className="col-8 col-sm-8 col-md-6 col-lg-4 project-sidebar-card"
              >
                <Link
                to="/gallery"
                style={{ color: "white", textDecoration: "none", fontSize: 18 }}
              >
                <Card bg="dark" border="none" style={{borderRadius: '20px', cursor: 'pointer'}}>
                  <img src={image.image} style={{borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}} />

                  <Card.Header style={{ textAlign: 'center', fontSize: "16px", color: 'white' }}>
                    {image.title}
                  </Card.Header>
                  <Card.Body>
                    <Card.Text style={{ textAlign: 'center', fontSize: "14px", color: 'white' }}>
                    {image.size} <br/>
                    {image.mode} <br/>
                    {image.sold}
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Link>
              </div>
      ))}
      </section>
    </div>
  );
}
