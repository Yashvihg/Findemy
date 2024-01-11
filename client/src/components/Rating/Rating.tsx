import React from "react";
import StarRatings from "react-star-ratings";

interface StarRatingProps {
  ratingstar: number;
}

function StarRating({ ratingstar }: StarRatingProps): JSX.Element {
  return (
    <>
      <div className="star-ratings">
        <StarRatings
          name="rating"
          rating={ratingstar}
          starRatedColor="orange"
          numberOfStars={5}
          starDimension="14.5px"
          starSpacing="0.1px"
        />
      </div>
    </>
  );
}

// Typescript question mark: Make a particular field optional
// Conditional render: if(res?.data?.title) then ...do something
// Ternary operator: dataLoaded ? showData : showLoader

export default StarRating;
