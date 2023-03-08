import React from "react";
import { Link } from "react-router-dom";

const Kategori = () => {
  return (
    <div className="my-3 container" id="menuPage">
      <h1
        className="text-center"
        style={{ fontFamily: "'Signika Negative', sans-serif" }}
      >
        Menu Pilihan
      </h1>
      <p
        className="text-center"
        style={{ fontFamily: "'Signika Negative', sans-serif" }}
      >
        Silahkan pilih menu yang kamu inginkan.
      </p>
      <div className="d-flex justify-content-center my-2">
        <Link to="/">
          <div
            type="button"
            className="btn fs-6 p-1 border border-0 rounded-2 mx-1"
            style={{
              fontFamily: "'Signika Negative', sans-serif",
              backgroundColor: "#614124",
              color: "white",
            }}
          >
            Makanan
          </div>
        </Link>
        <Link to="/minuman">
          <div
            type="button"
            className="btn fs-6 p-1 border border-0 rounded-2 mx-1"
            style={{
              fontFamily: "'Signika Negative', sans-serif",
              backgroundColor: "#614124",
              color: "white",
            }}
          >
            Minuman
          </div>
        </Link>
        <Link to="/cemilan">
          <div
            type="button"
            className="btn fs-6 p-1 border border-0 rounded-2 mx-1"
            style={{
              fontFamily: "'Signika Negative', sans-serif",
              backgroundColor: "#614124",
              color: "white",
            }}
          >
            Cemilan
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Kategori;
