import React from "react";
import Hasil from "../Component/hasil";
import Product from "../Component/Product";

const Menu = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#FFFAF0" }}>
      <div className="row justify-content-around">
        <div className="pt-5 col-md-9 ">
          <Product />
        </div>
        <div className="col-md-3">
          <Hasil />
        </div>
      </div>
    </div>
  );
};
export default Menu;
