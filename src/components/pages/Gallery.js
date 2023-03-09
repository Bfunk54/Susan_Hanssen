import React, { useState } from "react";
import img1 from "../img/gallery/1.jpg";
import img2 from "../img/gallery/2.jpg";
import img3 from "../img/gallery/3.jpg";
import img4 from "../img/gallery/4.jpg";
import img5 from "../img/gallery/5.jpg";
import img6 from "../img/gallery/6.jpg";
import img7 from "../img/gallery/7.jpg";
import img8 from "../img/gallery/8.png";
import img9 from "../img/gallery/9.jpg";
import img10 from "../img/gallery/10.jpg";
import img11 from "../img/gallery/11.jpeg";
import img12 from "../img/gallery/12.jpg";
import img13 from "../img/gallery/13.jpg";
import img14 from "../img/gallery/14.jpg";
import img15 from "../img/gallery/15.jpg";
import img16 from "../img/gallery/16.jpeg";
import img17 from "../img/gallery/17.png";
import img18 from "../img/gallery/18.jpg";
import img19 from "../img/gallery/19.jpg";
import img20 from "../img/gallery/20.jpg";
import img21 from "../img/gallery/21.jpg";
import img22 from "../img/gallery/22.jpg";
import img23 from "../img/gallery/23.jpg";
import img24 from "../img/gallery/24.jpg";
import img25 from "../img/gallery/25.jpg";
import img26 from "../img/gallery/26.webp";
import img27 from "../img/gallery/27.webp";
import img28 from "../img/gallery/28.jpg";
import img29 from "../img/gallery/29.jpg";
import img30 from "../img/gallery/30.jpg";
import img31 from "../img/gallery/31.jpg";
import img32 from "../img/gallery/32.jpg";
import img33 from "../img/gallery/33.jpg";
import img34 from "../img/gallery/34.jpg";
import img35 from "../img/gallery/35.jpg";

import Card from "react-bootstrap/Card";
import Popover from "@mui/material/Popover";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./Home.css";
import "./Gallery.css";

export default function Gallery() {
  const images = [
    {
      id: 1,
      image: img1,
      title: "The Messenger",
      size: "18x28",
      mode: "Gouache",
      sold: "SOLD",
    },
    {
      id: 2,
      image: img2,
      title: "Dear Prudence",
      size: "38x57",
      mode: "Acrylic on Canvas",
      sold: "",
    },
    {
      id: 3,
      image: img3,
      title: "The Fateful Choice",
      size: "36x60",
      mode: "Acrylic on Canvas",
      sold: "SOLD",
    },
    {
      id: 4,
      image: img4,
      title: "Harebrained",
      size: "30x40",
      mode: "Acrylic on Canvas",
      sold: "SOLD",
    },
    {
      id: 5,
      image: img5,
      title: "Feeling What I Can Not See",
      size: "36x48",
      mode: "Acrylic on Canvas",
      sold: "SOLD",
    },
    {
      id: 6,
      image: img6,
      title: "The Joy Ride",
      size: "30x40",
      mode: "Acrylic on Canvas",
      sold: "SOLD",
    },
    {
      id: 7,
      image: img7,
      title: "The Red Veil",
      size: "28x20",
      mode: "Watercolor",
      sold: "SOLD",
    },
    {
      id: 8,
      image: img8,
      title: "Grace and the Two Napoleons",
      size: "22x30",
      mode: "Watercolor/Gouache on Gold Gesso",
      sold: "",
    },
    {
      id: 9,
      image: img9,
      title: "The Dress Up",
      size: "22x30",
      mode: "Watercolor/Gouache on Gold Gesso",
      sold: "",
    },
    {
      id: 10,
      image: img10,
      title: "Bird Feed",
      size: "22x30",
      mode: "Watercolor/Gouache on Gold Gesso",
      sold: "",
    },
    {
      id: 11,
      image: img11,
      title: "Birds of a Feather",
      size: "20x16",
      mode: "Watercolor",
      sold: "",
    },
    {
      id: 12,
      image: img12,
      title: "The Disguise",
      size: "36x48",
      mode: "Acrylic on Canvas",
      sold: "SOLD",
    },
    {
      id: 13,
      image: img13,
      title: "The Visit",
      size: "36x48",
      mode: "Acrylic on Canvas",
      sold: "",
    },
    {
      id: 14,
      image: img14,
      title: "Sitting with Keith",
      size: "40x36",
      mode: "Acrylic on Canvas",
      sold: "",
    },
    {
      id: 15,
      image: img15,
      title: "The Unfamiliar Walk",
      size: "36x48",
      mode: "Acrylic on Canvas",
      sold: "",
    },
    {
      id: 16,
      image: img16,
      title: "Rush",
      size: "18x26",
      mode: "Watercolor/Gouache on Gold Gesso",
      sold: "",
    },
    {
      id: 17,
      image: img17,
      title: "Stars and Stripes and Christmas Tree Lights",
      size: "22x30",
      mode: "Watercolor",
      sold: "",
    },
    {
      id: 18,
      image: img18,
      title: "Going Forward",
      size: "21x22",
      mode: "Gouache",
      sold: "SOLD",
    },
    {
      id: 19,
      image: img19,
      title: "Out of the Everything into the Here",
      size: "36x48",
      mode: "Acrylic",
      sold: "",
    },
    {
      id: 20,
      image: img20,
      title: "The Red Coat",
      size: "30x40",
      mode: "Acrylic on Canvas",
      sold: "",
    },
    {
      id: 21,
      image: img21,
      title: "Something Is Going On",
      size: "30x40",
      mode: "Acrylic on Canvas",
      sold: "",
    },
    {
      id: 22,
      image: img22,
      title: "The Hatter",
      size: "24x36",
      mode: "Acrylic on Canvas",
      sold: "",
    },
    {
      id: 23,
      image: img23,
      title: "The Monstrous Wish",
      size: "24x36",
      mode: "Acrylic on Canvas",
      sold: "",
    },
    {
      id: 24,
      image: img24,
      title: "The White Truck",
      size: "24x37",
      mode: "Acrylic on Canvas",
      sold: "SOLD",
    },
    {
      id: 25,
      image: img25,
      title: "Rebecca",
      size: "28x37",
      mode: "Acrylic on Canvas",
      sold: "SOLD",
    },
    {
      id: 26,
      image: img26,
      title: "In or Out",
      size: "22x30",
      mode: "Watercolor",
      sold: "SOLD",
    },
    {
      id: 27,
      image: img27,
      title: "About Face",
      size: "20x20",
      mode: "Watercolor/Charcoal",
      sold: "",
    },
    {
      id: 28,
      image: img28,
      title: "Baa Baa Black Sheep",
      size: "22x30",
      mode: "Watercolor/Charcoal",
      sold: "",
    },
    {
      id: 29,
      image: img29,
      title: "Carbon Compound",
      size: "23x31",
      mode: "Watercolor/Acrylic",
      sold: "",
    },
    {
      id: 30,
      image: img30,
      title: "Into the Ether",
      size: "18x23",
      mode: "Gouache on Monoprint",
      sold: "",
    },
    {
      id: 31,
      image: img31,
      title: "Topless in Space",
      size: "16x20",
      mode: "Gouache on Monoprint",
      sold: "SOLD",
    },
    {
      id: 32,
      image: img32,
      title: "The Odd Sunset",
      size: "16x20",
      mode: "Gouache on Monoprint",
      sold: "SOLD",
    },
    {
      id: 33,
      image: img33,
      title: "The Broken Life Saver",
      size: "27x33",
      mode: "Watercolor/Collage",
      sold: "",
    },
    {
      id: 34,
      image: img34,
      title: "Shark Fin Soup",
      size: "12x16",
      mode: "Gouache/Collage",
      sold: "",
    },
    {
      id: 35,
      image: img35,
      title: "Egg Drop Soup",
      size: "12x16",
      mode: "Gouache/Collage",
      sold: "",
    },
  ];
  const imageAmount = images.length - 1;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [theImage, setTheImage] = React.useState([]);
  const [nextBtn, setNextBtn] = useState();
  const [prevBtn, setPrevBtn] = useState();
  const [index, setIndex] = useState();
  const open = Boolean(anchorEl);
  function handleImageClick(event, image) {
    setIndex(images.indexOf(image));
    const imageIndex = images.indexOf(image);
    setTheImage(image);
    setAnchorEl(event.currentTarget);
    if (imageIndex === imageAmount) {
      console.log("hit 1");
      setNextBtn("none");
      setPrevBtn("visible");
    } else if (imageIndex === 0) {
      console.log("hit 2");
      setPrevBtn("none");
      setNextBtn("visible");
    } else {
      setNextBtn("visible");
      setPrevBtn("visible");
    }
  }
  // Handle closing the Popover
  const handleClose = () => {
    setAnchorEl(null);
    console.log(theImage);
  };

  // Handle the Next and Previous button clicks in the Popover
  function handleNextClick(event, image) {
    if (index === 0) {
      setPrevBtn("visible");
    }
    if (index === imageAmount - 1) {
      setNextBtn("none");
    }
    if (index < imageAmount) {
      const newImageIndex = index + 1;
      const newImage = images[newImageIndex];
      setIndex(newImageIndex);
      setTheImage(newImage);
    }
  }

  function handlePreviousClick(event, image) {
    if (index === 1) {
      setPrevBtn("none");
    }
    if (index === imageAmount) {
      setNextBtn("visible");
    }
    if (index > 0) {
      const newImageIndex = index - 1;
      const newImage = images[newImageIndex];
      setIndex(newImageIndex);
      setTheImage(newImage);
    }
  }

  // Set media query to check if the user is on mobile
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const NextButtons = styled(Button)({
    borderRadius: "40px",
    backgroundColor: "rgb(178, 178, 178, .65)",
    border: "1px solid",
    borderColor: "rgb(178, 178, 178, .95)",
    color: "rgb(2, 47, 41)",
    backdropFilter: "blur(10px)",
    textTransform: "none",
    fontSize: "14px",
    ":hover": { backgroundColor: "rgb(0, 171, 179, .7)", fontSize: "14.2px" },
  });

  return (
    <div className="gallery" style={{ margin: "auto", marginTop: "-50px" }}>
      <section className="portfolio-block projects-with-sidebar portfolio">
        <div className="container">
          <div className="heading">
            <div
              className="recent"
              style={{
                textAlign: "center",
                marginBottom: "10px",
                width: "20%",
                height: "40px",
                backgroundColor: "rgba(41, 44, 49, 0.9)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "20px",
              }}
            >
              <h2 style={{ color: "white" }}>Gallery</h2>
            </div>
          </div>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center", alignItems: 'flex-start' }}
          >
            {images.map((image) => (
              <div
                key={image.id}
                style={{ marginBottom: 26, alignItems: 'flex-start' }}
                className="col-md-6 col-lg-4 project-sidebar-card"
              >
                <Card
                  className="card"
                  onClick={(event) => handleImageClick(event, image)}
                  bg="transparent"
                  style={{ cursor: "pointer", border: "none" }}
                >
                  <img alt="portfolio_imgs" style={{width: '100%'}} src={image.image} />

                  <Card.Header
                    style={{
                      textAlign: "center",
                      fontSize: "16px",
                      color: "white",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    {image.title}
                  </Card.Header>
                  {/* <Card.Body>
                    <Card.Text style={{ textAlign: 'center', fontSize: "14px", color: 'white' }}>
                    {image.size} <br/>
                    {image.mode} <br/>
                    {image.sold}
                    </Card.Text>
                  </Card.Body> */}
                </Card>
              </div>
            ))}
            <Popover
              id={images.id}
              key={images.id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorReference={"none"}
              className='pop'
              BackdropProps={{
                style: {
                  backgroundColor: "rgba(38, 38, 38, 0.98)",
                },
              }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "auto",
                height: "100vh",
              }}
            >
              <div style={{ height: "100vh", display:'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Close Icon */}
                <Button
                  sx={{
                    margin: "10px",
                    padding: 0,
                    maxWidth: "36px",
                    minWidth: "36px",
                    right: "5px",
                    top: "5px",
                    position: "absolute",
                    color:' rgb(178, 178, 178, 0.65)',
                  }}
                  onClick={handleClose}
                >
                  <CloseIcon sx={{ fontSize: 36 }} />
                </Button>
                {!isMobile ? (
                  <NextButtons
                  className="prevBtn"
                    sx={{
                      marginRight: 3,
                      height: 38.5,
                      padding: 2,
                      left: "20px",
                      top: "300px",
                      position: "absolute",
                      display: prevBtn,
                    }}
                    onClick={(event) => handlePreviousClick(event, theImage)}
                  >
                    <ArrowBackIosNewIcon fontSize="small"></ArrowBackIosNewIcon>
                    
                  </NextButtons>
                ) : (
                  <NextButtons
                  className="nextBtn"
                    sx={{
                      marginRight: 3,
                      position: "absolute",
                      left: "20px",
                      top: "300px",
                      height: 38.5,
                      display: prevBtn,
                    }}
                    onClick={(event) => handlePreviousClick(event, theImage)}
                  >
                    <ArrowBackIosNewIcon fontSize="small"></ArrowBackIosNewIcon>
                    
                  </NextButtons>
                )}
                <NextButtons
                className="nextBtn"
                  sx={{
                    marginLeft: 3,
                    height: 38.5,
                    right: "20px",
                    top: "300px",
                    position: "absolute",
                    display: nextBtn,
                  }}
                  onClick={(event) => handleNextClick(event, theImage)}
                >
                  
                  <ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
                </NextButtons>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "78vh",
                    maxWidth: "64vw",
                    position: "relative",
                    marginTop: "10px",
                  }}
                >
                  <img
                    alt="popover_imgs"
                    src={theImage.image}
                    style={{ width: "auto", height: 'intrinsic', maxHeight: '100%', maxWidth: '100%' }}
                    className='popCard'
                  />
                </div>
                <div className="popInfo">
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "center",
                      color: "white",
                      margin: 0,
                      padding: 1,
                      width: "100%",
                    }}
                  >
                    {theImage.title}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      textAlign: "center",
                      color: "white",
                      margin: 0,
                      width: "100%",
                      fontSize: "15px",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    {theImage.size} <br />
                    {theImage.mode} <br />
                    {theImage.sold}
                  </Typography>
                </div>
              </div>
            </Popover>
          </div>
        </div>
      </section>
    </div>
  );
}
