import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LoginForm from "../../components/LoginForm/LoginForm";

function LoginPage() {
  return (
    <div>
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default LoginPage;
