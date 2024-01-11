import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import SearchCoursePage from "./Pages/SearchCoursePage/SearchCoursePage";
import CartPage from "./Pages/CartPage/CartPage";
import CourseDetailsPage from "./Pages/CourseDetailsPage/CourseDetailsPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
// import { IconName } from "react-icons/fa";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/search" element={<SearchCoursePage/>} />
          <Route path="/cart" element={<CartPage/>}></Route>
          <Route path="/coursedetails/:id" element={<CourseDetailsPage/>}></Route>
          <Route path="/checkout" element={<CheckoutPage/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <CartPage/> */}
      
    </>
  );
}

export default App;
