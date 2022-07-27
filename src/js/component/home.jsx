import React from "react";
//include images into your bundle
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx"
import Cardx from "./cartas.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
  return (
    <div className="container-fluid padding-none">
      <Navbar />
      <Jumbotron />
      <Cardx />
      <Footer />
  </div>

  );
};

export default Home;
