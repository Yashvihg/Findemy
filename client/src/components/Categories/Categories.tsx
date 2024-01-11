import React from "react";
import "./Categories.css";

function Categories() {
  return (
    <>
      <div className="m-0 py-4 me-0 container-fluid category-container">
        <h3 className="mx-5 my-4 fw-bolder main-heading">Featured topics by category</h3>
        <div className="row mx-5">
          <div className="col-sm-12 col-md-3 columns">
            <div className="row fw-bold fs-5 mb-3">Developoment</div>
            <div className="row"><a href="" className="p-0 category-links">Python</a><p className="p-0">36,024,311 students</p></div>
            <div className="row"><a href="" className="p-0 category-links">Web Development</a><p className="p-0">11,227,872 students</p></div>
            <div className="row"><a href="" className="p-0 category-links">Machine Learning</a><p className="p-0">7,009,596 students</p></div>
          </div>
          <div className="col-sm-12 col-md-3 columns">
            <div className="row fw-bold fs-5 mb-3">Business</div>
            <div className="row"><a href="" className="p-0 category-links">Financial Analysis</a><p className="p-0">1,194,734 students</p></div>
            <div className="row"><a href="" className="p-0 category-links">SQL</a><p className="p-0">5,847,152 students</p></div>
            <div className="row"><a href="" className="p-0 category-links">PMP</a><p className="p-0">1,707,026 students</p></div>
          </div>
          <div className="col-sm-12 col-md-3 columns">
            <div className="row fw-bold fs-5 mb-3">IT and Software</div>
            <div className="row"><a href="" className="p-0 category-links">Ethical Hacking</a><p className="p-0">10,790,118 students</p></div>
            <div className="row"><a href="" className="p-0 category-links">Cyber Security</a><p className="p-0">3,934,661 students</p></div>
            <div className="row"><a href="" className="p-0 category-links">AWS certification</a><p className="p-0">5,910,964 students</p></div>
          </div>
          <div className="col-sm-12 col-md-3 columns">
            <div className="row fw-bold fs-5 mb-3">Design</div>
            <div className="row"><a href="" className="p-0 category-links">Photoshop</a><p className="p-0">10,812,560 students</p></div>
            <div className="row"><a href="" className="p-0 category-links">Graphic Design</a><p className="p-0">3,338,812 students</p></div>
            <div className="row"><a href="" className="p-0 category-links">Drawing</a><p className="p-0">2,446,701 students</p></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
