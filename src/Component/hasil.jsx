import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";

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
    <div className="container-fluid">
      <div
        className="mt-5 border border-3 rounded-3"
        style={{ backgroundColor: "white" }}
        ref={componentRef}
      >
        <h1 className="text-center">Pesanan</h1>
        {products.map((value) => (
          <div className="row px-2 justify-content-around">
            <div className="col " key={value.id}>
              <h6>{value.nama}</h6>
              <p style={{ lineHeight: "15px", fontSize: "12px" }}>
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
      </div>
      <div>
        <button
          className="btn btn-secondary mt-2"
          onClick={handlePrint}
          style={{ width: "100%" }}
        >
          <span>
            <img src="./assets/logoPrint.png" alt="" style={{ width: "10%" }} />
          </span>
          <span>Print Out</span>
        </button>
      </div>
      <div style={{ width: "70%", margin: " 0 auto" }}>
        <img src="./assets/barcode.png" alt=" " style={{ width: "100%" }} />
      </div>

      <h5 className="pt-3 text-center">Bayar pakai QRIS atau cash?</h5>
    </div>
  );
};
export default Hasil;
