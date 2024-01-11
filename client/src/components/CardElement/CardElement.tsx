import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import StarRating from "../Rating/Rating";
import "./CardElement.css";

interface CardElementProps {
  _id: string;
  title: string;
  imageUrl: string;
  rating: number;
  instructorName: string;
  price: number;
  oldPrice: number;
  popularity: string;
}

function CardElement({
  _id,
  title,
  imageUrl,
  rating,
  instructorName,
  price,
  oldPrice,
  popularity,
}: CardElementProps) {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/coursedetails/${_id}`)}
      className="col class-card border-0 rounded-0"
    >
      <Card.Img variant="top" src={imageUrl} className="border-0 rounded-0" />
      <Card.Body>
        <Card.Title className="class-title card-title">{title}</Card.Title>
        <Card.Text className="instructor-name m-0">{instructorName}</Card.Text>
        <div className="rating-component d-flex align-items-center">
          <Card.Text className="rating-value m-2 mb-1 ms-0">{rating}</Card.Text>
          <StarRating ratingstar={rating} />
        </div>
        <Card.Text className="price-tag m-0">
          <span className="fw-bold">₹</span>
          {price}
          <span className=" px-1">
            <del>{oldPrice}</del>
          </span>
        </Card.Text>
        {/* {something && somethingelse} // if */}
        {/* {something ? something1 (true) : something2 (false) // if else aka conditional rendering} */}
        {popularity === "Bestseller" && (
          <Card.Text className="rate-tag">{popularity}</Card.Text>
        )}
        {popularity === "Hot seller" && (
          <Card.Text className="hot-tag">{popularity}</Card.Text>
        )}

        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default CardElement;
