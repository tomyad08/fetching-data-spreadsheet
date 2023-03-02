import React, { useState } from "react";

const Navibar = () => {
  const [kondisi, setKondisi] = useState(false);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col px-3 pt-3">
          <h2 style={{ fontFamily: "'Signika Negative', sans-serif" }}>
            <strong>Warunk Coffee</strong>
          </h2>
        </div>
        <div className="col p-3">
          <div className="float-end">
            <span
              className="mx-3 fs-4"
              id="menu"
              style={{ fontFamily: "'Signika Negative', sans-serif" }}
            >
              Beranda
            </span>
            <a href="#menuPage" style={{ textDecoration: "none" }}>
              <span
                className="mx-3 fs-4"
                id="menu"
                style={{
                  fontFamily: "'Signika Negative', sans-serif",
                  color: "black",
                }}
              >
                Menu
              </span>
            </a>
            <a href="#kontak" style={{ textDecoration: "none" }}>
              <span
                className="mx-3 fs-4"
                id="menu"
                style={{
                  fontFamily: "'Signika Negative', sans-serif",
                  color: "black",
                }}
              >
                Kontak
              </span>
            </a>
            <span className="mx-2 float-end" id="sandwich">
              <img
                src="./assets/fi_menu.png"
                style={{ width: "160%" }}
                alt=" "
                onClick={() => setKondisi(!kondisi)}
              />
            </span>
          </div>
        </div>
      </div>
      {kondisi && (
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
          }}
          className="p-1 border border-0 rounded-3 d-flex justify-content-around"
        >
          <div
            id="menuSandwich"
            style={{ fontFamily: "'Signika Negative', sans-serif" }}
          >
            Beranda
          </div>
          <div
            id="menuSandwich"
            style={{ fontFamily: "'Signika Negative', sans-serif" }}
          >
            Menu
          </div>
          <div
            id="menuSandwich"
            style={{ fontFamily: "'Signika Negative', sans-serif" }}
          >
            Kontak
          </div>
        </div>
      )}
    </div>
  );
};
export default Navibar;
