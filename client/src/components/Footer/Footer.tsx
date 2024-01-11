import React from "react";
import "./Footer.css";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-class pb-3">
      {/* <div className="container"> */}
      <div className="col-sm-12 col-md-3 p-0 my-2">
        <button className="language-button-mobile pe-2">
          <LanguageIcon className="p-1 fs-2" />
          English
        </button>
      </div>
      {/* <div className="row flex-wrap-reverse">
      <div className="row">      
      </div> button </div> */}
      <div className="row">
        <div className="col-sm-12 col-md-3">
          <div className="row row-list">Udemy Business</div>
          <div className="row row-list">Teach on Udemy</div>
          <div className="row row-list">Get the app</div>
          <div className="row row-list">About us</div>
          <div className="row row-list">Contact us</div>
        </div>
        <div className="col-sm-12 col-md-3">
          <div className="row row-list">Careers</div>
          <div className="row row-list">Blog</div>
          <div className="row row-list">Help and Support</div>
          <div className="row row-list">Affiliate</div>
          <div className="row row-list">Investors</div>
        </div>
        <div className="col-sm-12 col-md-3">
          <div className="row row-list">Terms</div>
          <div className="row row-list">Privacy policy</div>
          <div className="row row-list">Cookie settings</div>
          <div className="row row-list">Sitemap</div>
          <div className="row row-list">Accessibility statement</div>
        </div>
        <div className="col-sm-12 col-md-3 p-0">
          <button className="language-button pe-2 ms-5">
            <LanguageIcon className="p-1 fs-2" />
            English
          </button>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between pt-3">
        <div className="heading row">
        <Link to="/">
            <span
              style={{ color: "white" }}
              className="findemy-header text-xl-start fs-2 fw-bold me-2"
            >
              F
              <span className="findemy-header-i" style={{ color: "#a435f0" }}>
                i
              </span>
              ndemy
            </span>
          </Link>
        </div>
        <div className="copyright">© 2023 Udemy, Inc.</div>
      </div>
    </div>

    // </div>
  );
}
