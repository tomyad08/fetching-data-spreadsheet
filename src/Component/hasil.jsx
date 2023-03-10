import React from "react";
import { useSelector } from "react-redux";

import FAQ from "./FAQ";

const Hasil = () => {
  const products = useSelector((state) => state.product.orders);

  const numbers = products.map((data) => data.total);
  const sum = numbers.reduce(function (result, item) {
    return result + item;
  }, 0);

  let pesanan = [];
  console.log(pesanan);

  return (
    <div
      className="container-fluid"
      style={{ fontFamily: "'Signika Negative', sans-serif" }}
    >
      <div className="row">
        <div className="col-md">
          <div>
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
                {pesanan.push(
                  ` Pesan= ${value.nama}, Jumlah= ${value.jumlah}, Total= ${value.total} ||`
                )}
              </div>
            ))}
            <div className="px-2 mt-3">
              <h4>Total Pembayaran:</h4>
              <h5>Rp. {sum}</h5>
            </div>
          </div>
          <a
            href={`https://wa.me/6281383928459?text=${JSON.stringify(pesanan)}`}
          >
            <button
              className="btn btn-success p-2"
              style={{
                width: "100%",
                fontSize: "20px",
              }}
            >
              Pesanan Selesai
            </button>
          </a>
        </div>
        <div className="col-md">
          <FAQ />
        </div>
      </div>
    </div>
  );
};
export default Hasil;
