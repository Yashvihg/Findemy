import React from "react";
import { Row, Col, FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Signup.css";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { postSignupUser } from "../../utils/api";
import { useNavigate } from "react-router-dom";

// style={{width:560}}
export type SignupInputs = {
  email: string;
  fullName: string;
  password: string;
};

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInputs>();
  // console.log(errors);

  const onSubmit: SubmitHandler<SignupInputs> = async (data: SignupInputs) => {
    console.log("DATA", data);
    const _res = await postSignupUser(data);
    if (_res) {
      console.log(_res);
      alert(`User signed up successfully, welcome ${data.fullName}`);
      navigate("/");
    }
  };
  let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let password_regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  return (
    <div className="container SignupFormContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col className="py-2 fw-bold">Sign up and start learning</Col>
        </Row>
        <Row>
          <Col>
            <Form.Group
              className="my-1 border border-dark d-flex align-items-center signup-text"
              controlId="formBasicName"
            >
              <FloatingLabel
                controlId="floatingInputName"
                label="Full Name"
                className="m-0"
              >
                <Form.Control
                  {...register("fullName", { required: "this is required" })}
                  className="shadow-none border-0"
                  autoComplete="off"
                  type="name"
                  placeholder="Full Name"
                />
              </FloatingLabel>
            </Form.Group>
            {errors.fullName && (
              <span className="text-danger">This field is required</span>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group
              className="my-1 border border-dark d-flex align-items-center signup-text"
              controlId="formBasicEmail"
            >
              <FloatingLabel
                controlId="floatingInputEmail"
                label="Email"
                className="m-0"
              >
                <Form.Control
                  {...register("email", { required: "this is required" })}
                  className="shadow-none border-0"
                  type="email"
                  autoComplete="off"
                  placeholder="Email"
                />
              </FloatingLabel>
            </Form.Group>
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group
              className="my-1 border border-dark d-flex align-items-center signup-text"
              controlId="formBasicPassword"
            >
              <FloatingLabel
                controlId="floatingInputPassword"
                label="Password"
                className="m-0"
              >
                <Form.Control
                  {...register("password", { required: "this is required" })}
                  className="shadow-none border-0"
                  type="password"
                  placeholder="Password"
                />
              </FloatingLabel>
            </Form.Group>
            {errors.password && (
              <span className="text-danger">This field is required</span>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <button
              type="submit"
              className="btn w-100 signup-button-form py-3 my-1 rounded-0"
            >
              Sign Up
            </button> */}
            {/* <input
              className="btn w-100 login-button-form py-3 my-1 rounded-0"
              type={"submit"}
            /> */}
            <button
              className="border border-0 my-1 signup-button-form"
              type={"submit"}
            >
              Sign up
            </button>
          </Col>
        </Row>
        <Row>
          <Col>
            By signing up, you agree to our{" "}
            <span>
              <u>
                <a
                  className="condition-class p-1"
                  href="https://www.udemy.com/terms/"
                >
                  {" "}
                  Terms of use
                </a>
              </u>
            </span>{" "}
            and{" "}
            <span>
              <u>
                <a
                  className="condition-class p-1"
                  href="https://www.udemy.com/terms/privacy/"
                >
                  Privacy Policy
                </a>
              </u>
            </span>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="already-login">
            Already have an account?{" "}
            <span className="fw-bold">
              {" "}
              <u>
                {" "}
                <Link to="/login">Log In</Link>
              </u>
            </span>
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default Signup;
