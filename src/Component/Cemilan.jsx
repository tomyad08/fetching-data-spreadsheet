import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrders } from "../Lib/ProductSlice";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Cemilan = () => {
  const cemilan = useSelector((state) => state.product.cemilan[0]);
  const [data, setData] = useState(" ");
  const [count, setCount] = useState(1);

  if (count === 0) {
    setCount(1);
  }
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
  const hargaTotal = count * data.harga;

  return (
    <div className="container-fluid" id="menuPage">
      {cemilan ? (
        <>
          <div className="container">
            <div className="row justify-content-around">
              {cemilan.map((value) => (
                <div
                  className="col-md-3 col-6"
                  key={value.id}
                  onClick={() => handleShow(value)}
                >
                  <div className="mb-3 float-center">
                    <div
                      className="border border-0 rounded-3"
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
                      <h4 id="fontNama">{value.nama}</h4>
                      <h6 id="fontHarga" style={{ lineHeight: "10px" }}>
                        Rp. {value.harga}
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
        </>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};
export default Cemilan;
