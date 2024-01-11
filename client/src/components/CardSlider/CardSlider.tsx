import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CardElement from "../CardElement/CardElement";
// import courseData from "../../dummy/coursedetails.json";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { getCourse } from "../../utils/api";

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

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        borderRadius: "50%",
        color: "white",
        padding: "0.3rem",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosIcon
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        borderRadius: "50%",
        color: "white",
        padding: "0.3rem",
        paddingLeft: "0.4rem",
      }}
      onClick={onClick}
    />
  );
}

function CardSlider() {
  const [coursesData, setCoursesData] = useState<CardElementProps[]>();

  const fetchCoursesData = async () => {
    const _res = await getCourse();
    if (_res) {
      setCoursesData(_res);
    }
  };

  useEffect(() => {
    // on page reload, we want to fetch all courses, and display, and that is why the array is empty
    fetchCoursesData();
  }, []); // and that is why the array is empty

  var settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider className="pt-5" {...settings}>
        {coursesData?.map((item) => {
          return (
            <div>
              <CardElement
                _id={item?._id} //item hai, tabhi hi uski ID nikaalo.
                title={item?.title}
                imageUrl={item?.imageUrl}
                rating={item?.rating}
                instructorName={item?.instructorName}
                price={item?.price}
                oldPrice={item?.oldPrice}
                popularity={item?.popularity}
              />
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default CardSlider;
