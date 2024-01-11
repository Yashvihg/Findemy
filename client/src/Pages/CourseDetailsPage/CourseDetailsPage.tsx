import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import "./CourseDetailsPage.css"


function CourseDetailsPage() {
  return (
    <>
    <Navbar/>
    {/* <div className="container-fluid course-detail-container py-4 px-5"> */}
        <CourseDetails/>
    {/* </div> */}
    <Footer/>
    </>
  )
}

export default CourseDetailsPage