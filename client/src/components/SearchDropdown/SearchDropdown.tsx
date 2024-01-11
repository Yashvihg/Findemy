import React from "react";
import "./SearchDropdown.css";
function SearchDropdown() {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item rounded-0 border border-0 ">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button fw-bolder"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Level
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label">Beginner (1923)</label>
              </div>
            </div>
            <div className="accordion-body">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label">All Levels (1632)</label>
              </div>
            </div>
            <div className="accordion-body">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label">Interemdiate (680)</label>
              </div>
            </div>
            <div className="accordion-body">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label">Expert (79)</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchDropdown;
