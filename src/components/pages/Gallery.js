import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import img1 from "../img/gallery/1.jpeg";
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

import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
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
    { id: 1, image: img1 }, 
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 },
    { id: 8, image: img8 },
    { id: 9, image: img9 },
    { id: 10, image: img10 },
    { id: 11, image: img11 },
    { id: 12, image: img12 },
    { id: 13, image: img13 },
    { id: 14, image: img14 },
    { id: 15, image: img15 },
    { id: 16, image: img16 },
    { id: 17, image: img17 },
    { id: 18, image: img18 },
    { id: 19, image: img19 },
    { id: 20, image: img20 },
    { id: 21, image: img21 },
    { id: 22, image: img22 },
    { id: 23, image: img23 },
    { id: 24, image: img24 },
    { id: 25, image: img25 },
    { id: 26, image: img26 },
    { id: 27, image: img27 },
    { id: 28, image: img28 },
    { id: 29, image: img29 },
    { id: 30, image: img30 },
    { id: 31, image: img31 },
    { id: 32, image: img32 },
    { id: 33, image: img33 },
    { id: 34, image: img34 },
    { id: 35, image: img35 }
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
    console.log('hit 1');
    setNextBtn("none");
    setPrevBtn("visible");
    } else if (imageIndex === 0) {
    console.log('hit 2');
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
    backgroundColor: "rgba(23, 185, 255, 0.35)",
    border: "1px solid",
    borderColor: "rgb(23, 129, 221)",
    color: "rgb(2, 47, 41)",
    backdropFilter: "blur(10px)",
    textTransform: "none",
    fontSize: "14px",
    ":hover": { backgroundColor: "rgb(23, 162, 221)", fontSize: "14.2px" },
  });

  return (
    <div style={{ margin: "auto" }}>
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
                backgroundColor: "rgba(28, 28, 28, 0.55)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "20px",
              }}
            >
              <h2 style={{ color: 'white'}}>Recent Work</h2>
            </div>
          </div>
          <div className="row">
            {images.map((image) => (
              <div
              key={image.id}
                style={{ marginBottom: 26 }}
                className="col-md-6 col-lg-4 project-sidebar-card"
              >
                <Card onClick={(event) => handleImageClick(event, image)} bg="dark" border="none" style={{borderRadius: '20px'}}>
                  <img src={image.image} style={{borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}} />

                  <Card.Header style={{ textAlign: 'center', fontSize: "16px", color: 'white' }}>
                    Sample Title
                  </Card.Header>
                  <Card.Body>
                    <Card.Text style={{ textAlign: 'center', fontSize: "14px", color: 'white' }}>
                      This is a sample caption.
                    </Card.Text>
                  </Card.Body>
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
              BackdropProps={{
                style: {
                  backgroundColor: "rgba(38, 38, 38, 0.55)"
                },
              }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "auto",
                height: "100vh"
              }}
            >
              <div>
              {/* Close Icon */}
              <Button
                  sx={{ margin: '10px', padding: 0, maxWidth: "36px", minWidth: "36px", right: '5px', top: '5px', position: 'absolute' }}
                  onClick={handleClose}
                >
                  <CloseIcon sx={{ fontSize: 36 }} />
                </Button>
              {!isMobile ? (
                <NextButtons
                  sx={{ marginRight: 3, height: 38.5, left: '40px', top: '300px', position: 'absolute', display: prevBtn }}
                  onClick={(event) => handlePreviousClick(event, theImage)}
                >
                  <ArrowBackIosNewIcon fontSize="small"></ArrowBackIosNewIcon>
                  Previous
                </NextButtons>
              ) : (
                <NextButtons
                  sx={{ marginRight: 3, position: 'absolute', left: '40px', top: '300px', height: 38.5, display: prevBtn }}
                  onClick={(event) => handlePreviousClick(event, theImage)}
                >
                  <ArrowBackIosNewIcon fontSize="small"></ArrowBackIosNewIcon>
                  Prev
                </NextButtons>
              )}
              <NextButtons
                sx={{ marginLeft: 3, height: 38.5, right: '40px', top: '300px', position: 'absolute', display: nextBtn }}
                onClick={(event) => handleNextClick(event, theImage)}
              >
                Next<ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
              </NextButtons>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  height: '78vh',
                  maxWidth: "64vw",
                  position: 'relative',
                  marginTop: '10px'
                }}
              >
              
                  <img
                    src={theImage.image}
                    style={{ maxHeight: '100%', width: '100%' }}
                  />
                  </div>
                  <div>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  color: 'white',
                  margin: 0,
                  padding: 2,
                  width: '100%'
                }}
              >
                Sample Name
              </Typography>
              <Typography
                variant="p"
                sx={{
                  textAlign: "center",
                  color: 'white',
                  margin: 0,
                  padding: 2,
                  width: '100%',
                  display: 'block'
                }}
              >
                Sample Caption
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
