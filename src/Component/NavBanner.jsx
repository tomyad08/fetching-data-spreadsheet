import React from "react";
import Banner from "./Banner";
import Navibar from "./NavBar";

const NavBanner = () => {
  return (
    <div
      className="container-fluid"
      style={{ backgroundImage: "url(./assets/banner.png)" }}
    >
      <Navibar />
      <Banner />
    </div>
  );
};
export default NavBanner;
