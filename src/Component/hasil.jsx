import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import FAQ from "./FAQ";

const Hasil = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "struk-data",
  });

  const products = useSelector((state) => state.product.orders);

  const numbers = products.map((data) => data.total);
  const sum = numbers.reduce(function (result, item) {
    return result + item;
  }, 0);

  return (
    <div
      className="container-fluid"
      style={{ fontFamily: "'Signika Negative', sans-serif" }}
    >
      <div className="row">
        <div className="col-md" ref={componentRef}>
          <h1 className="text-center">Pesanan</h1>
          {products.map((value) => (
            <div className="row px-2 justify-content-around">
              <div className="col " key={value.id}>
                <h6>{value.nama}</h6>
                <p
                  style={{
                    lineHeight: "15px",
                    fontSize: "12px",
                    fontFamily: "'Signika Negative', sans-serif",
                  }}
                >
                  Jumlah: {value.jumlah}
                </p>
              </div>

              <div className="col">
                <p className="float-end" key={value.id}>
                  Rp. {value.total}
                </p>
              </div>
            </div>
          ))}
          <div className="px-2 mt-3">
            <h4>Total Pembayaran:</h4>
            <h5>Rp. {sum}</h5>
          </div>
          <button
            className="btn mt-2"
            onClick={handlePrint}
            style={{ width: "100%", backgroundColor: "#FFC74D" }}
          >
            <span>
              <img
                src="./assets/logoPrint.png"
                alt=""
                style={{ width: "10%" }}
              />
            </span>
            <span>Print Out</span>
          </button>
        </div>
        <div className="col-md">
          <FAQ />
        </div>
      </div>
    </div>
  );
};
export default Hasil;
