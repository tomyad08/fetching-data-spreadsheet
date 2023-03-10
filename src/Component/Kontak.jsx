import React from "react";

const Kontak = () => {
  return (
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient(white,#FFC74D)",
      }}
      id="kontak"
    >
      <div className="row justify-content around px-1 py-5 text-center">
        <div
          className="col-md-3 my-1"
          style={{ fontFamily: "'Signika Negative', sans-serif" }}
        >
          <h5>Jl. Imam Bonjol No.5</h5>
          <p style={{ lineHeight: "8px" }}>Kec. Babakan, Kab. Cirebon</p>
          <p style={{ lineHeight: "8px" }}>Kode Pos 45191</p>
          <p style={{ lineHeight: "8px" }}>
            <strong>WhatsApp: 081543344766</strong>
          </p>
        </div>

        <div className="col-md-3 my-1">
          <a href="#menuPage" style={{ textDecoration: "none" }}>
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
          </a>
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
