import React, { useState } from "react";
import "../styles/Card.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Card = ({ data, getMovieDetails, mDetails }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="movieCard mx-auto my-5 rounded-2 ">
        <img
          className="rounded-2 object-fit-cover movieImg"
          src={`${data.Poster == "N/A" ? `/noImg.png` : `${data.Poster}`}`}
          alt=""
          height={`450px`}
          width={`325px`}
          onClick={() => {
            let name = `${data.Title}`;
            getMovieDetails(name);
            handleShow();
          }}
        />
        <h1 className="text-center fs-4 pt-2 cardName">{data.Title}</h1>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Body
          className="d-flex flex-column "
          style={{ height: `max-content` }}
        >
          <div>
            <img
              src={`${data.Poster == "N/A" ? `/noImg.png` : `${data.Poster}`}`}
              alt=""
              className="object-fit-contain"
              height={`300px`}
              width={`100%`}
            />
          </div>
          <div className=" text-center">
            <h1 className="fs-5 pt-3">{mDetails.Title}</h1>
            <h2 className="fs-5">{mDetails.Year}</h2>
            <h3 className="fs-5">{mDetails.Genre}</h3>
            <p className="py-3">{mDetails.Plot}</p>
            <h4 className="fs-5">Ratings : {mDetails.imdbRating}</h4>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Card;
