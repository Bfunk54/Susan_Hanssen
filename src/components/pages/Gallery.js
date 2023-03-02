import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import sample from "../img/portfolio/sample.jpg";

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
  const images = [{ id: 1, image: sample }, { id: 2, image: sample2 }];
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
                <Card onClick={(event) => handleImageClick(event, image)} bg="light" border="secondary">
                  <img src={image.image} />

                  <Card.Header style={{ textAlign: 'center', fontSize: "16px" }}>
                    Sample Title
                  </Card.Header>
                  <Card.Body>
                    <Card.Text style={{ textAlign: 'center', fontSize: "14px" }}>
                      This is sample text.
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
                  backgroundColor: "transparent",
                  boxShadow: "none"
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  height: '88vh',
                  width: "100%",
                  backgroundColor: "rgba(38, 38, 38, 0.55)",
                  borderTopLeftRadius: '20px',
                  borderTopRightRadius: '20px',
                  position: 'relative'
                }}
              >
              
                  <img
                    src={theImage.image}
                    style={{ maxHeight: '100%', width: '100%'}}
                  />
                  {/* Close Icon */}
                  <Button
                  sx={{ margin: '10px', padding: 0, maxWidth: "36px", minWidth: "36px", position: 'absolute', alignSelf: 'flex-start' }}
                  onClick={handleClose}
                >
                  <CloseIcon sx={{ fontSize: 36 }} />
                </Button>
              {!isMobile ? (
                <NextButtons
                  sx={{ marginRight: 3, height: 38.5, left: '10px', position: 'absolute', display: prevBtn }}
                  onClick={(event) => handlePreviousClick(event, theImage)}
                >
                  <ArrowBackIosNewIcon fontSize="small"></ArrowBackIosNewIcon>
                  Previous
                </NextButtons>
              ) : (
                <NextButtons
                  sx={{ marginRight: 3, position: 'absolute', left: '10px', height: 38.5, display: prevBtn }}
                  onClick={(event) => handlePreviousClick(event, theImage)}
                >
                  <ArrowBackIosNewIcon fontSize="small"></ArrowBackIosNewIcon>
                  Prev
                </NextButtons>
              )}
              <NextButtons
                sx={{ marginLeft: 3, height: 38.5, right: '10px', position: 'absolute', display: nextBtn }}
                onClick={(event) => handleNextClick(event, theImage)}
              >
                Next<ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
              </NextButtons>
                  </div>
                  <div>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  color: 'white',
                  width: "420px",
                  borderRadius: "20px",
                  margin: 0,
                  padding: 2,
                  "@media (max-width: 770px)": {
                    width: "180px",
                  },
                  "@media (max-width: 525px)": {
                    width: "140px",
                  },
                }}
              >
                Sample Name
              </Typography>
              </div>
            </Popover>
          </div>
        </div>
      </section>
    </div>
  );
}
