import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Navbar.css";
// import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const handleSearch = (e: any) => {
    console.log(e.key);
    if (e.key === "Enter") {
      navigate(`/search?query=${e.target.value}`);
    }
  };
  
  const getInitials = () => {
    const name = JSON.parse(localStorage.getItem("user")!)["fullName"];
    let firstInitial = name.split(" ")[0].charAt(0).toUpperCase();
    let lastInitial = name.split(" ")[1].charAt(0).toUpperCase();
    return firstInitial + lastInitial;
  };

  const logoutHandler = () => {
    localStorage.removeItem("user");
    alert("successfully logged out");
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-md bg-white navbar-light py-3 justify-content-between shadow-sm pe-3 header-main-div">
        <div className="container justify-content-between flex-nowrap navbar-container align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="" to="/">
            <span
              style={{ color: "#000000" }}
              className="findemy-header text-xl-start fs-2 fw-bold me-2"
            >
              F
              <span className="findemy-header-i" style={{ color: "#a435f0" }}>
                i
              </span>
              ndemy
            </span>
          </Link>

          <div className="search-bar container-fluid p-3">
            <i className="fa-solid fa-magnifying-glass search-icon fa-xl"></i>
            <input
              onKeyUp={(e) => handleSearch(e)}
              className="input-field border-0"
              type="text"
              placeholder=" Search for anything"
              name="search"
              // onChange={}
            />
          </div>
          <i className="fa-solid fa-magnifying-glass search-icon-mobile fa-xl"></i>
        </div>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            {/* conditional redering */}
            {!localStorage.getItem("user") ? (
              <>
                <Link to="/login">
                  <li className="nav-item">
                    <button className="nav-button login-button bg-transparent text-black">
                      Log in
                    </button>
                  </li>
                </Link>
                <Link to="/signup">
                  <li className="nav-item">
                    <button className="nav-button signup-button bg-black text-white">
                      Sign up
                    </button>
                  </li>
                </Link>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/cart">
                    <button
                      className="nav-icon bg-transparent cart-icon border-0"
                      type="button"
                    >
                      <i className="fa-solid fa-cart-shopping fa-2xl"></i>
                    </button>
                  </Link>
                </li>{" "}
                {/* <div className="avatar border rounded-5 d-flex align-items-center mx-2 justify-content-center"> */}
                {/* {getInitials()} */}
                {/* </div> */}
                {/* avatar border rounded-5 d-flex align-items-center mx-2 justify-content-center dropdown-toggle */}
                <div className="loginBtns d-flex">
                  <div className="btn-group dropstart">
                    <button
                      type="button"
                      className="avatar border rounded-5 d-flex align-items-center mx-2 justify-content-center dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {getInitials()}
                    </button>
                    <div className="navBarBtn">
                      <ul className="dropdown-menu rounded-0">
                        <li>
                          <button
                            className="avatar-buttons"
                            onClick={logoutHandler}
                          >
                            Log out
                          </button>
                        </li>
                        <li>
                          <button className="avatar-buttons">Wish List</button>
                        </li>
                        <li>
                          <button className="avatar-buttons">Settings</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}

            <li className=" nav-item">
              <button className="nav-button globe-button bg-transparent ">
                <i className="fa-solid fa-globe fa-xl"></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
function toUpperCase(name: any) {
  throw new Error("Function not implemented.");
}

