import React, { useState } from "react";
import Nav from "./Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Bio from "./pages/Bio";
import Statement from "./pages/Statement";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PortfolioContainer() {
  // var background = {

  // };

  // const [currentPage, setCurrentPage] = useState("Home");

  // // const renderPage = () => {
  // //   if (currentPage === "Home") {
  // //     return <Home />;
  // //   }
  // //   if (currentPage === "Portfolio") {
  // //     return <Portfolio />;
  // //   }
  // //   if (currentPage === "Resume") {
  // //     return <Resume />;
  // //   }
  // //   return <Contact />;
  // // };

  // const handlePageChange = (page) => setCurrentPage(page);

  // const history = createBrowserHistory({ basename: '/Susan_Hanssen' });

  return (
    <Router>
      <div>
        <Nav/>
        <main >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/statement" element={<Statement />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
