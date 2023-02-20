import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Struk = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "struk-data",
    onAfterPrint: () => alert("print success"),
  });
  return (
    <>
      <div
        ref={componentRef}
        style={{ width: "100%", height: window.innerHeight }}
      >
        <h1>Ini Adalah struk</h1>
      </div>
      <button onClick={handlePrint}>Print</button>
    </>
  );
};
export default Struk;
