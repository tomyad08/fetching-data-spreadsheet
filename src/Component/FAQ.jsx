import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  const Data = [
    {
      id: 1,
      pertanyaan: "Gimana cara pesennya?",
      jawaban:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      id: 2,
      pertanyaan: "Apakah ada biaya ongkir?",
      jawaban:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      id: 3,
      pertanyaan: "Berapa harga outfit lu?",
      jawaban:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      id: 4,
      pertanyaan: "Siapa sih ini?",
      jawaban:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
  ];
  return (
    <div className="container-fluid py-4" id="faq">
      <div
        className="container"
        style={{ fontFamily: "'Signika Negative', sans-serif" }}
      >
        <div className="text-center">
          <h1>Frequently Ask Question (FAQ)</h1>
          <p>Pertanyaan yang sering ditanyakan oleh pelanggan kami ...</p>
        </div>
        <div>
          <Accordion>
            {Data.map((value) => (
              <Accordion.Item eventKey={value.id}>
                <Accordion.Header>{value.pertanyaan}</Accordion.Header>
                <Accordion.Body>{value.jawaban}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
