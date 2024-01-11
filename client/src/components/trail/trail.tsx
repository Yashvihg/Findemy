
import React from "react";
import "./trail.css";
import LanguageIcon from '@mui/icons-material/Language';

export default function Trail() {
  return (
    <div className="footer-class">
      {/* <div className="container"> */}
        <div className="row">
          <div className="col-sm-12 col-md-3 footer-col">
            <div className="row">Udemy Business</div>
            <div className="row">Teach on Udemy</div>
            <div className="row">Get the app</div>
            <div className="row">About us</div>
            <div className="row">Contact us</div>
          </div>
          <div className="col-sm-12 col-md-3 footer-col">
            <div className="row">Careers</div>
            <div className="row">Blog</div>
            <div className="row">Help and Support</div>
            <div className="row">Affiliate</div>
            <div className="row">Investors</div>
          </div>
          <div className="col-sm-12 col-md-3 footer-col">
            <div className="row">Terms</div>
            <div className="row">Privacy policy</div>
            <div className="row">Cookie settings</div>
            <div className="row">Sitemap</div>
            <div className="row">Accessibility statement</div>
          </div>
          <div className="col-sm-12 col-md-3 p-0">
            <button className="language-button pe-2"><LanguageIcon className="p-1 fs-2"/>English</button>
          </div>
        </div>
      </div>
    // </div>
  );
}
