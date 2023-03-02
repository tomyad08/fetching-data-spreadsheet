import React from "react";

const Kontak = () => {
  return (
    <div
      className="container-fluid"
      style={{ backgroundImage: "url(./assets/banner.png)" }}
    >
      <div className="row justify-content around px-1 py-5 text-center">
        <div
          className="col-md-3 my-1"
          style={{ fontFamily: "'Signika Negative', sans-serif" }}
        >
          <h5>Jl. Imam Bonjol No.5</h5>
          <p style={{ lineHeight: "8px" }}>Kec. Babakan, Kab. Cirebon</p>
          <p style={{ lineHeight: "8px" }}>Kode Pos 45191</p>
        </div>
        <div className="col-md-3 my-1">
          <span className="mx-1">
            <img src="./assets/icon_facebook.png" alt=" " />
          </span>
          <span className="mx-1">
            <img src="./assets/icon_instagram.png" alt=" " />
          </span>
          <span className="mx-1">
            <img src="./assets/icon_mail.png" alt=" " />
          </span>
        </div>
        <div className="col-md-3 my-1">
          <button
            style={{
              fontFamily: "'Signika Negative', sans-serif",
              backgroundColor: "#bc8819",
              color: "white",
            }}
            className="btn px-5 py-2 border border-0 rounded-2 fs-4"
          >
            Menu
          </button>
        </div>
        <div className="col-md-3">
          <h2 style={{ fontFamily: "'Signika Negative', sans-serif" }}>
            <strong>Warunk Coffee</strong>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Kontak;
