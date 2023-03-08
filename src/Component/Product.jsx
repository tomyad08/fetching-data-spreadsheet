import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  addCemilan,
  addMakanan,
  addMinuman,
  addProducts,
} from "../Lib/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const [loading, setLoading] = useState(true);

  const products = useSelector((state) => state.product.products[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhwvMUd71P5PcgHFFUROHNPerzeCVSmuQSHknTifZcJuBrCZHJlfI5uB5ULjZpZk1p3Ye9M8326lvJ/pub?gid=0&single=true&output=csv",
      {
        download: true,
        header: true,
        complete: (value) => {
          dispatch(addProducts(value.data));
          setLoading(false);
        },
      }
    );
  }, [dispatch]);

  if (!loading) {
    const Makanan = products.filter((value) =>
      value.kategori.includes("Makanan")
    );
    const Minuman = products.filter((value) =>
      value.kategori.includes("Minuman")
    );
    const Cemilan = products.filter((value) =>
      value.kategori.includes("Cemilan")
    );
    dispatch(addMakanan(Makanan));
    dispatch(addMinuman(Minuman));
    dispatch(addCemilan(Cemilan));
  }

  return <></>;
};
export default Product;
