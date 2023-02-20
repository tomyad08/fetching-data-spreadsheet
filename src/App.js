import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./Nyoba";

const App = () => {
  return (
    <div className="App">
      <PDFDownloadLink document={<PDFFile />} filename="FORM">
        {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <button
              className="btn"
              style={{ width: "100%", backgroundColor: "white" }}
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
          )
        }
      </PDFDownloadLink>
      {/* <PDFFile /> */}
    </div>
  );
};

export default App;
