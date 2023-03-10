import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBanner from "./Component/NavBanner";
import Kontak from "./Component/Kontak";
import Cemilan from "./Component/Cemilan";
import Minuman from "./Component/Minuman";
import Makanan from "./Component/Makanan";
import Product from "./Component/Product";
import Kategori from "./Component/NavMenu";
import Hasil from "./Component/hasil";

const App = () => {
  return (
    <div>
      <div style={{ background: "linear-gradient(#FFC74D,white, white)" }}>
        <NavBanner />
        <Product />
        <BrowserRouter>
          <Kategori />
          <Routes>
            <Route path="/" element={<Makanan />} />
            <Route path="/minuman" element={<Minuman />} />
            <Route path="/cemilan" element={<Cemilan />} />
          </Routes>
        </BrowserRouter>
        <Hasil />

        <Kontak />
      </div>
    </div>
  );
};

export default App;
