import React from "react";

const Banner = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-md text-center mt-3">
          <p
            style={{
              fontFamily: "'Signika Negative', sans-serif",
              fontSize: "20px",
            }}
          >
            Makanan berkualitas dengan harga terjangkau?
          </p>
          <h1
            style={{
              fontFamily: "'Luckiest Guy', cursive",
              fontSize: "70px",
              lineHeight: "50px",
              textShadow: "4px 2px #FFFFFF",
            }}
          >
            Warunk Coffee
          </h1>
          <h5
            style={{
              fontFamily: "'Signika Negative', sans-serif",
              lineHeight: "50px",
              fontSize: "200%",
            }}
          >
            <strong>solusinya!</strong>
          </h5>
          <a href="#menuPage" style={{ textDecoration: "none" }}>
            <button
              style={{
                fontFamily: "'Signika Negative', sans-serif",
                backgroundColor: "#614124",
                color: "white",
              }}
              className="btn px-5 py-2 border border-0 rounded-2 fs-4"
            >
              Menu
            </button>
          </a>
        </div>
        <div className="col-md py-3">
          <img
            src="./assets/food2.png"
            alt=" "
            style={{ width: "80%" }}
            className="mx-5"
          />
        </div>
      </div>
    </div>
  );
};
export default Banner;
