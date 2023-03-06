import React from "react";
import Collapse from "react-bootstrap/Collapse";
import "./pages/Home.css";
import Logo from "./img/home/susan_hanssen.png";
import "./Header.css";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import createTheme from "@mui/material/styles/createTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

{
  /* <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} rounded size={20} color="#696eff" /> */
}

function Nav() {
  const [open, setOpen] = React.useState(false);

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 992,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    // 696eff  -- navbar color
    <nav
      style={{
        backgroundColor: "rgba(41, 44, 49, 0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottomLeftRadius: "40px",
        borderBottomRightRadius: "40px",
        width: "100%",
      }}
      className="navbar navbar-dark navbar-expand-lg fixed-top portfolio-navbar gradient"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="container"
      >
        <a
          className="navbar-brand logo"
          style={{
            fontSize: "34px",
            color: "black",
            paddingTop: "10px",
            fontWeight: 500,
          }}
          href="#"
        >
          {/* <img
              style={{ height: 80, width: 525 }}
              className="logo"
              src={Logo}
            /> */}
          {/* <div
            className="text"
            style={{
              textAlign: "center",
              width: "300px",
              height: "50px",
              backgroundColor: "rgba(41, 44, 49, 0.)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "20px",
              marginBottom: "10px",
              alignSelf: "flex-start",
            }}
          > */}
            <h1 style={{ color: "white", fontSize: '1.5em', fontFamily: 'Nanum Myeongjo',
  src: 'url(https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap)'}}>Susan Hanssen</h1>
          {/* </div> */}
        </a>
        <button
          style={{ marginTop: "-25px", textDecoration: "none", marginTop: 0 }}
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navbarNav"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <Hamburger
            id="nav"
            // onToggle={toggleDrawer(true)}
            toggle={setOpen}
            toggled={open}
            color="black"
            rounded={true}
            style={{ justifyContent: "center" }}
            className="navbar-toggler-icon"
          />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
            className="navbar-nav"
          >
            <li
              style={{
                display: "flex",
                justifyContent: "center",
                marginRight: "10px",
              }}
              className="nav-item home navbar-toggler"
            >
              <Link
                to="/"
                style={{ color: "white", textDecoration: "none", fontSize: 18 }}
                onClick={() => {
                  setOpen((open) => !open);
                }}
              >
                {isMobile ? (
                  <button
                    className="btn btn-bd-primary btn"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                    type="button"
                  >
                    Home
                  </button>
                ) : (
                  <button className="btn btn-bd-primary btn">Home</button>
                )}
              </Link>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "center",
                marginRight: "10px",
              }}
              className="nav-item navbar-toggler"
            >
              <Link
                to="/gallery"
                style={{ color: "white", textDecoration: "none", fontSize: 18 }}
                onClick={() => {
                  setOpen((open) => !open);
                }}
              >
                {isMobile ? (
                  <button
                    className="btn btn-bd-primary btn"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                    type="button"
                  >
                    Gallery
                  </button>
                ) : (
                  <button className="btn btn-bd-primary btn">Gallery</button>
                )}
              </Link>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "center",
                marginRight: "10px",
              }}
              className="nav-item navbar-toggler"
            >
              <Link
                to="/bio"
                style={{ color: "white", textDecoration: "none", fontSize: 18 }}
                onClick={() => {
                  setOpen((open) => !open);
                }}
              >
                {isMobile ? (
                  <button
                    className="btn btn-bd-primary btn"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                    type="button"
                  >
                    Bio
                  </button>
                ) : (
                  <button className="btn btn-bd-primary btn">Bio</button>
                )}
              </Link>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "center",
                marginRight: "10px",
              }}
              className="nav-item navbar-toggler"
            >
              <Link
                to="/statement"
                style={{ color: "white", textDecoration: "none", fontSize: 18 }}
                onClick={() => {
                  setOpen((open) => !open);
                }}
              >
                {isMobile ? (
                  <button
                    className="btn btn-bd-primary btn"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                    type="button"
                  >
                    Statement
                  </button>
                ) : (
                  <button className="btn btn-bd-primary btn">Statement</button>
                )}
              </Link>
            </li>
            <li
              style={{ display: "flex", justifyContent: "center" }}
              className="nav-item navbar-toggler"
            >
              <Link
                to="/contact"
                style={{ color: "white", textDecoration: "none", fontSize: 18 }}
                onClick={() => {
                  setOpen((open) => !open);
                }}
              >
                {isMobile ? (
                  <button
                    className="btn btn-bd-primary btn"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                    type="button"
                  >
                    Contact
                  </button>
                ) : (
                  <button className="btn btn-bd-primary btn">Contact</button>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
