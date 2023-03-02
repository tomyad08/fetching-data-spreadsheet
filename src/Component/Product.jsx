import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { addOrders, addProducts } from "../Lib/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhwvMUd71P5PcgHFFUROHNPerzeCVSmuQSHknTifZcJuBrCZHJlfI5uB5ULjZpZk1p3Ye9M8326lvJ/pub?gid=0&single=true&output=csv";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [nama, setNama] = useState(" ");
  const [data, setData] = useState(" ");
  const [count, setCount] = useState(1);

  if (count == 0) {
    setCount(1);
  }

  const products = useSelector((state) => state.product.products[0]);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose1 = () => setShow(false);
  const handleClose = () => {
    const datas = {
      id: data.id,
      nama: data.nama,
      kategori: data.kategori,
      jumlah: count,
      total: hargaTotal,
    };
    dispatch(addOrders(datas));
    axios.post(
      "https://sheet.best/api/sheets/e7f254a6-d19b-4b83-bacc-0bf54eb74417",
      datas
    );
    Swal.fire({
      title: "Pesanan Tercatat",
      text: "Untuk melihat pesanan, silahkan klik menu pesanan.",
      icon: "success",
      confirmButtonText: "Mantap",
    });
    setShow(false);
  };
  const handleShow = (value) => {
    setShow(true);
    setData(value);
  };

  useEffect(() => {
    Papa.parse(url, {
      download: true,
      header: true,
      complete: (value) => {
        dispatch(addProducts(value.data));
        setLoading(false);
      },
    });
  }, [dispatch]);

  const hargaTotal = count * data.harga;

  return (
    <div className="container-fluid">
      <h1
        className="text-center"
        style={{
          fontFamily: "'Signika Negative', sans-serif",
        }}
      >
        <strong>Menu Pilihan</strong>
      </h1>
      <div className="container mb-3" style={{ width: "85%", height: "55px" }}>
        <input
          style={{ width: "100%", height: "47px" }}
          className="border border-2 rounded-3 mb-4 p-1"
          placeholder="Mau nyari apa nih?"
          onChange={(e) => setNama(e.target.value)}
        />
      </div>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="container">
          <div className="row justify-content-around">
            {products
              .filter((value) => {
                if (nama === "") {
                  return value;
                } else if (
                  value.nama.toLowerCase().includes(nama.toLowerCase())
                ) {
                  return value;
                } else if (
                  value.kategori.toLowerCase().includes(nama.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((value) => (
                <div
                  className="col-md-4 col-6"
                  key={value.id}
                  onClick={() => handleShow(value)}
                >
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
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.nama}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Jumlah:
            <span className="px-1" onClick={() => setCount(count - 1)}>
              -
            </span>
            <span>{count}</span>
            <span className="px-1" onClick={() => setCount(count + 1)}>
              +
            </span>
          </p>
          <h6>Harga Total: Rp. {hargaTotal} </h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Product;
