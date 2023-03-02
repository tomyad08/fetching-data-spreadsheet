import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.css";
import Menu from "./Page/Menu";
import { Provider } from "react-redux";
import { store } from "./Lib/Store";
import PDFFile from "./Nyoba";
import Struk from "./Nyoba";
import Navibar from "./Component/NavBar";
import Banner from "./Component/Banner";
import NavBanner from "./Component/NavBanner";
import Kontak from "./Component/Kontak";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NavBanner />
      <Menu />
      <Kontak />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
