import React from "react";
import "./CartCards.css";
import StarRating from "../Rating/Rating";
import { Link } from "react-router-dom";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

interface CartCardProps {
  title: string;
  imageUrl: string;
  rating: number;
  instructorName: string;
  price: number;
  popularity: string;
}

function CartCards({
  title,
  imageUrl,
  rating,
  instructorName,
  price,
  popularity,
}: CartCardProps) {
  return (
    <>
      <div className="card mb-3 border p-2 rounded-0 container-fluid">
        <div className="row g-0 ">
          <div className="col-md-2 p-0">
            <img src={imageUrl} className="img-fluid w-100" alt={title} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <div className="card-title m-0 fs-6">{title}</div>
              {/* <p className="card-text m-0">
                {" "}
                Become a Full-Stack Web Developer with just ONE course. HTML,
                CSS, Javascript, Node, React, MongoDB, Web3 and DApps
              </p> */}
              <p className="card-text m-0">
                <small className="text-muted">{instructorName}</small>
              </p>
              {/* <div className="d-flex justify-content-between"> */}
              <div>
                {" "}
                <div className="rating-component d-flex align-items-center">
                  <div className="rating-value m-2 mb-1 ms-0">{rating}</div>
                  <StarRating ratingstar={rating} />
                  <span className="brackets">
                    <small className="text-muted">(1232)</small>
                  </span>
                </div>
                <p className="time-span m-0">
                  <small className="text-muted">
                    40 total time • 126 lectures • Beginner
                  </small>
                </p>
              </div>
              {/* <Link to="/cart"></Link> */}
              {/* <button className="horizontalcard-button">Add to Cart</button> */}
              {/* </div> */}
              {/* <div className="rate-tag">{popularity}</div> */}
          <span className="span-buttons pt-2">
              <button className="border-0 cart-buttons-mobile ps-0 pe-5">Remove</button>
              <button className="border-0 cart-buttons-mobile ps-0">Move to Wishlist</button>
          </span>
            </div>
          </div>
          {/* </div> */}
          <div className="col-md-2 cart-functions">
            <div className="cart-buttons-div text-end">
              <button className="border-0 cart-buttons">Remove</button>
            </div>
            <div className="cart-buttons-div text-end">
              <button className="border-0 cart-buttons">
                Move to Wishlist
              </button>
            </div>
          </div>

          <div className="col-md-2">
            <p className="card-text price-text fw-bold p-1 m-0 ps-md-3 px-sm-0">
              ₹{price} <LocalOfferIcon fontSize="small"/>
            </p>
            <p className="striked-text p-1 pt-0 ps-md-3 px-sm-0">
              <del>₹3,499</del>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartCards;
