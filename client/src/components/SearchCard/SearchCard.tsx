import React from "react";
import "./SearchCard.css";
import StarRating from "../Rating/Rating";
import { Link } from "react-router-dom";

interface SearchCardProps {
  _id:string;
  title: string;
  imageUrl: string;
  rating: number;
  instructorName: string;
  price: number;
  popularity: string;
}

function SearchCard({
  _id,
  title,
  imageUrl,
  rating,
  instructorName,
  price,
  popularity,
}: SearchCardProps) {
  return (
    <>
    <Link to={`/coursedetails/${_id}`}>
      {/* style={{ width: 1000 }} */}
      <div className="card mb-3 border border-0 rounded-0 container-fluid">
        <div className="row justify-content-center g-0 ">
          {/* <div className=""> */}
          {/* width={260} height={145} */}
          <div className="col-md-3 p-0">
            <img src={imageUrl} className="img-fluid w-100" alt={title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-lg m-0">{title}</h5>
              <p className="card-text m-0">
                {" "}
                Become a Full-Stack Web Developer with just ONE course. HTML,
                CSS, Javascript, Node, React, MongoDB, Web3 and DApps
              </p>
              <p className="card-text m-0">
                <small className="text-muted">{instructorName}</small>
              </p>
              <div className="d-flex justify-content-between">
                <div>
                  {" "}
                  <div className="rating-component d-flex align-items-center">
                    <div className="rating-value m-2 mb-1 ms-0">{rating}</div>
                    <StarRating ratingstar={rating} />
                    <span className="brackets"><small className="text-muted">(1232)</small></span>
                  </div>
                  <p className="time-span m-0">
                    <small className="text-muted">40 total time • 126 lectures • beginner</small>
                  </p>
                </div>
                {/* <Link to="/cart"></Link> */}
                <button className="horizontalcard-button">Add to Cart</button>
                
              </div>
              <div className="rate-tag">{popularity}</div>
            </div>
          </div>
          {/* </div> */}

          <div className="col-md-1 ">
            <p className="card-text fw-bold p-1 m-0">₹{price}</p>
            <p className="card-text p-1 pt-0"><del>₹3,499</del></p>
          </div>
        </div>
      </div>
    </Link>
    </>
  );
}

export default SearchCard;
