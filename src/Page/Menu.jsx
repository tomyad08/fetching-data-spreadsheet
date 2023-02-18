import React from "react";
import Hasil from "../Component/hasil";
import Product from "../Component/Product";

const Menu = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-around">
        <div
          className="col-md-9 border border-0 pt-4"
          style={{ backgroundColor: "#FFFAF0" }}
        >
          <Product />
        </div>
        <div className="col-md-3" style={{ backgroundColor: "#FFE4C4" }}>
          <Hasil />
        </div>
      </div>
    </div>
  );
};
export default Menu;
