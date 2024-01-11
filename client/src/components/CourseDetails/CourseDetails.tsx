import React, { useEffect, useState } from "react";
import StarRating from "../Rating/Rating";
import "./CourseDetails.css";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";
import { Button } from "react-bootstrap";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import DoneIcon from "@mui/icons-material/Done";
import { useParams } from "react-router-dom";
import { getCourseById } from "../../utils/api";

interface CourseDetailsProps {
  _id: string;
  title: string;
  imageUrl: string;
  rating: number;
  instructorName: string;
  price: number;
  oldPrice: number;
  popularity: string;
  requirements: string[];
  learningOutcomes: string[];
}

function CourseDetails() {
  const params = useParams();
  const [coursesData, setCoursesData] = useState<CourseDetailsProps>();

  const fetchCourseDetails = async () => {
    const _res = await getCourseById(params.id!);
    setCoursesData(_res);
  };

  useEffect(() => {
    fetchCourseDetails();
  }, []);
  return (
    <>
      <div className="upper-strip ">
        <div className="big-title">
          <h3>{coursesData?.title}</h3>
        </div>
        <div className="best">
          <div className="rate-tag">{coursesData?.popularity}</div>
          <div className="header-rating">
            Rating: {coursesData?.rating} out of 5 (4,574 ratings) 25,759 students
          </div>
        </div>
      </div>
      <div className="container-fluid course-detail-container p-0 py-2">
        <div className="container description-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="container py-5">
                <h2 className="fw-bolder">{coursesData?.title}</h2>
                <p className="fw-normal fs-5">
                  {" "}
                  Fingerpicking Guitar Lessons: Step-by-step Fingerstyle Guitar
                  with Joe Robinson
                </p>
                <div className="d-flex align-items-center flex-wrap">
                  {coursesData?.popularity === "Bestseller" && (
                    <div className="rate-tag align-items-center">
                      {coursesData?.popularity}
                    </div>
                  )}
                  {coursesData?.popularity === "Hot seller" && (
                    <div className="hot-tag align-items-center">
                      {coursesData?.popularity}
                    </div>
                  )}
                  <div className="rating-component d-flex align-items-center">
                    <div className="rating-value m-2 mb-1 ms-2 py-1">{4.5}</div>
                    <StarRating ratingstar={coursesData?.rating!} />
                  </div>
                  <p className="course-info-links m-0 mt-1 mx-1">
                    (1855 ratings)
                  </p>
                  <p className="fw-bold m-0 mt-1 mx-1">7959 students</p>
                </div>
                <div className="d-flex">
                  <p className="fw-normal">
                    Created by{" "}
                    <span className="course-info-links">
                      {coursesData?.instructorName}
                    </span>
                  </p>
                </div>
                <div className="d-flex flex-wrap update-lang-icons">
                  <div className="ps-0 pe-3 py-1">
                    <InfoIcon fontSize="small" /> Lastupdated 2/2022
                  </div>
                  <div className="ps-0 pe-3 py-1">
                    <LanguageIcon fontSize="small" /> English
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container description-container">
          <div className="row">
            <div className="col-lg-8">
              hello ji 
              </div></div></div> */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="container">
              <div className="p-4 border border-secondary">
                <h2 className="fw-bold">What you'll learn</h2>
                <div className="learn-box row">
                  {coursesData?.learningOutcomes.map((item) => {
                    return (
                      <>
                        <div className="col-12 col-md-6 p-2 fs-5">
                          <DoneIcon />
                          {item}
                        </div>
                      </>
                    );
                  })}
                  {/* <div className="col-md-6">
                    <div className="p-2 fs-5">
                      <DoneIcon />
                      Fingerstyle Guitar
                    </div>
                    <div className="p-2 fs-5">
                      <DoneIcon />
                      Beginner Guitar
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-2 fs-5">
                      <DoneIcon />
                      Fingerpicking guitar
                    </div>
                    <div className="p-2 fs-5">
                      <DoneIcon />
                      strumming
                    </div>
                  </div> */}
                </div>
              </div>
              <h2 className="fw-bold p-3">Requirements</h2>
              <div className="learn-box row">
                <div className="col-md-6">
                  <ul className="">
                    <li>Guitar</li>
                    <li>Willing to practice</li>
                  </ul>
                </div>
              </div>
              <h2 className="fw-bold p-3">Description</h2>
              <p>
                Want to learn guitar from a world-renowned fingerstyle
                guitarist? Join Joe Robinson, award-winning guitarist, touring
                musician and singer-songwriter in Complete Fingerstyle Guitar
                Lessons - Beginner Fingerpicking. Joe will start you at the very
                basics, introducing you to some of his philosophy and expert
                practice tips, and before you know it you will be playing full
                fingerstyle songs. In this course, Joe gives you a complete
                breakdown of dozens of chords, then walks you step-by-step
                through building familiar songs and adding some style and groove
                to your playing. This course is perfect for any level of guitar
                player, but will be especially beneficial to beginner players or
                players with little to no knowledge of fingerstyle. In addition
                to learning brand new techniques, any player can benefit from
                the practice habits and advice throughout this course. Watch
                this program shape you into a more structured and
                technique-based player.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column course-preview-card course-preview-card-mobile position-fized shadow mb-5 bg-white">
        {/* <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></video> */}
        {/* <img src="" alt="" /> */}
        <img
          src={coursesData?.imageUrl}
          className="img-fluid w-100 p-0 pb-2"
          alt="angela yu course"
        />
        <div className="mx-4">
          <h3 className="my-1 fw-bold">₹{coursesData?.price}</h3>
          <div className="d-flex">
            <Button
              className="login-preview me-1 w-100 my-1 rounded-0"
              type="button"
            >
              Add to cart
            </Button>
            <Button className="heart-button ms-1 my-1 rounded-0" type="button">
              <FavoriteBorderIcon />
            </Button>
          </div>
          <Button
            className="buy-now-button w-100 rounded-0 my-1 fw-bold"
            type="button"
          >
            Buy now
          </Button>
          <div className="text-center m-2">30-Day Money-Back Gaurantee</div>
          <div className="d-flex flex-column mt-2 course-properties">
            <div className="fw-bold mb-2">This course includes:</div>
            <div>
              <OndemandVideoIcon fontSize="small" className="mb-1 me-3" />
              5.5 hours on-demand video
            </div>
            <div>
              <DriveFolderUploadIcon fontSize="small" className="mb-1 me-3" />
              70 downloadable resources
            </div>
            <div>
              <AllInclusiveIcon fontSize="small" className="mb-1 me-3" />
              Full lifetime access
            </div>
            <div>
              <SmartphoneIcon fontSize="small" className="mb-1 me-3" />
              Access on mobile and TV
            </div>
            <div>
              <EmojiEventsIcon fontSize="small" className="mb-1 me-3" />
              Certificate of completion
            </div>
            <div className="preview-links d-flex justify-content-between py-2">
              <a href="https://www.udemy.com/" className="course-preview-links">
                Share
              </a>
              <a href="https://www.udemy.com/" className="course-preview-links">
                Gift this course
              </a>
              <a href="https://www.udemy.com/" className="course-preview-links">
                Apply Coupon
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetails;
