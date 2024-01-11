import React from "react";
import Googleimg from "../../images/google.svg";
import Appleimg from "../../images/apple.svg";
import Facebookimg from "../../images/facebook.svg";
import { Row, Col } from "react-bootstrap";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { postLoginUser } from "../../utils/api";
import { stringify } from "querystring";
import { useNavigate } from "react-router-dom";


export type LoginInputs = {
  email: string;
  fullName: string;
  password: string;
};

// style={{width:560}}
function LoginForm() {
  const navigate = useNavigate();
  let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  // console.log(errors);

  const onSubmit: SubmitHandler<LoginInputs> = async (data: LoginInputs) => {
    console.log("DATA", data);
    const _res = await postLoginUser(data);
    if (_res) {
      console.log(_res);
      localStorage.setItem("user", JSON.stringify(_res))
      alert(`User Logged in successfully, welcome ${_res.fullName}`);
      navigate("/");
    }
  };

  console.log(errors);
  return (
    <div className="container mainFormContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <Container className="login-form" > */}
        <Row>
          <Col className="fw-bolder mb-3 p-0">
            Log In to Your Findemy Account
          </Col>
          <hr />
        </Row>
        <Row>
          <Col className="icon-login my-1 border border-dark rounded-0">
            <Button className="button-class" variant="white" type="button">
              <img className="icon" src={Facebookimg} alt="Facebook-logo" />
              <span>Continue with Facebook</span>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="icon-login my-1 border border-dark rounded-0">
            <Button className="button-class" variant="white" type="button">
              <img className="icon" src={Googleimg} alt="google-logo" />
              <span>Continue with Google</span>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="icon-login my-1 border border-dark rounded-0">
            <Button className="button-class" variant="white" type="button">
              <img className="icon" src={Appleimg} alt="apple-logo" />
              <span>Continue with Apple</span>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="icon-login d-flex align-items-center justify-content-start my-1 border border-dark rounded-0">
            <Form.Group
              className="d-flex align-items-center container-fluid p-0"
              controlId="formBasicEmail"
            >
              <EmailIcon className="comm-icon" />
              <Form.Control
                {...register("email", { required: true, pattern: email_regex })}
                className="shadow-none border-0"
                type="email"
                placeholder="Email"
                autoComplete="off"
              />
            </Form.Group>
            <p role="alert">
              {errors.email && (
                <span className="text-danger">
                  Please enter a valid email ID!
                </span>
              )}
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="icon-login my-1 border border-dark rounded-0">
            <Form.Group
              className="d-flex align-items-center"
              controlId="formBasicPassword"
            >
              <HttpsIcon className="comm-icon" />
              <Form.Control
                {...register("password", { required: true })}
                className="shadow-none border-0"
                type="password"
                placeholder="Password"
                autoComplete="off"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="icon-login p-0">
            <button
              className="border border-0 my-1 login-button-form"
              type={"submit"}
            >
              {/* {" "}
              <input
                className="btn w-100 m-0 py-3 my-1 rounded-0"
                type={"submit"}
              /> */}
              Log In
            </button>
          </Col>
        </Row>
        <Row>
          <Col className="already-login py-2">
            Don't have an account?
            <span className="fw-bold">
              <u>
                <Link to="/signup"> Sign up</Link>
              </u>
            </span>
          </Col>
        </Row>
        {/* <Row>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      </Row> */}
        {/* </Container> */}
      </form>
    </div>
  );
}

export default LoginForm;
