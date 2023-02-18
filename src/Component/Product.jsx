import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhwvMUd71P5PcgHFFUROHNPerzeCVSmuQSHknTifZcJuBrCZHJlfI5uB5ULjZpZk1p3Ye9M8326lvJ/pub?gid=0&single=true&output=csv";

const Product = () => {
  const [products, setProducts] = useState(" ");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Papa.parse(url, {
      download: true,
      header: true,
      complete: (value) => {
        setProducts(value.data);
        setLoading(false);
      },
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="container">
        <input
          style={{
            width: "100%",
            height: "45px",
            borderColor: "black",
            color: "black",
          }}
          className="border border-2 rounded-3 mb-4 p-1"
          placeholder="Mau nyari apa nih?"
        />
      </div>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="container">
          <h1
            className="text-center"
            style={{
              fontFamily: "'Signika Negative', sans-serif",
            }}
          >
            <strong>Menu Pilihan</strong>
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam minima
            mollitia rem rerum doloremque aliquid natus illum culpa, omnis
            nihil?
          </p>
          <div className="row justify-content-around">
            {products.map((value) => (
              <div className="col-md-4 col-6" key={value.id}>
                <div className="mb-3">
                  <div
                    className="border rounded-3"
                    style={{
                      width: "100%",

                      overflow: "hidden",
                    }}
                    id="wadah"
                  >
                    <img
                      src={value.gambar}
                      alt=" "
                      style={{ width: "100%" }}
                      id="gambar"
                    />
                  </div>
                  <div
                    className="ps-2 pt-1 text-center"
                    style={{
                      fontFamily: "'Signika Negative', sans-serif",
                    }}
                  >
                    <h4>{value.nama}</h4>
                    <h6 style={{ lineHeight: "10px" }}>Rp. {value.harga}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Product;
