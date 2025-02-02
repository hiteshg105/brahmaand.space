import React from "react";
import { useEffect, useState } from "react";
import "../styles/Login.css";
import { signInWithGoogle } from "../Firebase";
import { Check } from "react-feather";
import google from "../images/g1.png";
import logonew from "../images/logonew.png";
import newlogin from "../images/newlogin.png";
import Logo1 from "../images/Logo1.png";
import { useNavigate } from "react-router-dom";
import { Col, Row, Container, Form, Button, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input, InputGroup, Label } from "reactstrap";
import swal from "sweetalert";
import axios from "axios";
import axiosConfig from "./axiosConfig";
import { FaRegEyeSlash } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "../../src/css/Signup.css";
import useAnalyticsEventTracker from '../useAnalyticsEventTracker';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
    setPassword(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const [error, setError] = useState(null);
  const eye = <FontAwesomeIcon icon={faEye} />;

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  // function performValidation() {
  //   return email.length > 4 && password.length > 4;
  // }

  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    if (!isValidEmail(e.target.value)) {
      // swal("Email is invalid");
    } else {
      setError(null);
    }

    e.preventDefault();
    console.log(email, password);
    axiosConfig
      .post(`/user/login`, {
        username: email,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("data", response.data);
        console.log(response.data.user);
        console.log("you logged in");
        console.log(response.data.msg);
        console.log(response.data.status);

        if (response.data.status === true) {
          // swal("Successfully login");
        } else if (response.data.status === false) {
          console.log(response.data.status);
          swal("Failed to login try again ");
        }

        if (
          response.data.user._id !== null &&
          response.data.user._id !== "" &&
          response.data.user._id !== undefined
        ) {
          localStorage.setItem("userId", response.data.user._id);
        }

        if (localStorage.getItem("userId")) {
          navigate("/topbar");
        } else navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.msg === "User Doesnot Exist") {
          swal("User Does Not Exist");
        } else if (error.response.data.msg === "Incorrect Password") {
          swal("You Entered Incorrect Password ", "Try Again");
        }
      });
    setEmail("");
    setPassword("");
  };

  const handlegooglelogin = async () => {
    await signInWithGoogle();

    const Fireuid = await localStorage.getItem("Fireuid");
    const FirephotoURL = await localStorage.getItem("FirephotoURL");
    const Fireemail = await localStorage.getItem("Fireemail");
    const Firename = localStorage.getItem("Firename");

    if (Fireemail !== "" && Firename !== "" && Fireuid !== "") {
      axiosConfig

        .post(`/user/signinwithgoogle`, {
          username: Firename,
          email: Fireemail,
          password: Fireuid,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.message === "Successfully Login") {
            handleLoginGoogleSubmit();
          }
        })
        .catch((error) => {
          console.log(error.response.data);
          if (error.response.data.message == "already exists") {
            swal("Already Registered", " Reset your password Password");
          }
        });
    }
  };
  const handleLoginGoogleSubmit = () => {
    const Fireuid = localStorage.getItem("Fireuid");
    const FirephotoURL = localStorage.getItem("FirephotoURL");
    const Fireemail = localStorage.getItem("Fireemail");
    const Firename = localStorage.getItem("Firename");
    axiosConfig
      .post(`/user/login`, {
        username: Firename,
        email: Fireemail,
        password: Fireuid,
      })
      .then((response) => {
        if (response.data.status === true) {
          localStorage.removeItem("Fireuid");
          localStorage.removeItem("FirephotoURL");
          localStorage.removeItem("Fireemail");
          localStorage.removeItem("Firename");
        } else if (response.data.status === false) {
          console.log(response.data.status);
          swal("Failed to login try again ");
        }

        if (
          response.data.user._id !== null &&
          response.data.user._id !== "" &&
          response.data.user._id !== undefined
        ) {
          localStorage.setItem("userId", response.data.user._id);
        }

        if (localStorage.getItem("userId")) {
          navigate("/");
        } else navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data);
        if (error.response.data.msg === "Incorrect Password") {
          //swal("User already Exists With this Mail");
          swal("You have already register with email and password this email address. Please try to login with that");
        }
        // else if (error.response.data.msg === "Incorrect Password") {
        //   swal("you Entered Incorrect password ", "try again");
        // }
      });
  };
  const gaEventTracker = useAnalyticsEventTracker('Login');
  return (
    <>
      <Container className="login-container">
        <div className="login">
          <Form className="login-form">
            <Row>
              <Col lg="8" md="6" sm="12" className="mb-3  ipad">
                <div

                // style={{
                //   backgroundImage: `url(${logo})`,
                //   backgroundPosition: "left",
                //   backgroundSize: "cover",
                //   backgroundRepeat: "no-repeat",
                //   height: "100%",
                //   width: "100%",
                // }}
                >
                  <img src={newlogin} className="signupimage" alt="img" />
                  <div className="d-flex justify-content-center rtt-1">
                    <img src={logonew} style={{ width: "150px" }} />
                  </div>
                </div>
                {/* <div
                  style={{
                    backgroundImage: `url(${newlogin})`,
                    backgroundPosition: "left",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <div className="d-flex justify-content-left rtt-2">
                    <img
                      src={logonew}
                      style={{ height: "95px", width: "173px" }}
                    />
                  </div>
                  
                </div> */}
              </Col>
              <Col lg="4" md="6" sm="12" className=" head ipadspace  ipad">
                <h4 className="mb-1 py-2 ">Welcome Back!</h4>
                <FormGroup
                  className="mb-1 mt-3 login-form-group"
                  controlId="formBasicLoginEmail"
                >
                  <div className="d-flex">
                    <Label className=" d-flex">Email Id/Username</Label>
                  </div>
                  <Input
                    required="true"
                    for="exampleEmail"
                    type="email"
                    className="login form-control mt-2 emailoflogin"
                    placeholder="Email or Username  "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup
                  className=" mt-3 login-form-group"
                  controlId="formBasicLoginEmail"
                >
                  <Label className=" mt-2 from-label">Password</Label>
                  <div className="justify-content-center loginpassword">
                    <InputGroup>
                      <Input
                        type={passwordType}
                        required="required"
                        className="login form-control passwordloginforbutton"
                        placeholder="Password"
                        value={passwordInput}
                        onChange={handlePasswordChange}
                      />

                      <span
                        className="d-flex eyeiconhideshow "
                        onClick={togglePassword}
                      >
                        {passwordType === "password" ? (
                          <span className="ey-t">
                            <FaRegEyeSlash size={28} />
                          </span>
                        ) : (
                          <span className="ey-t">
                            <AiOutlineEye size={28} />
                          </span>
                        )}
                      </span>
                    </InputGroup>
                  </div>
                </FormGroup>
                <Row>
                  <Col className="mt-3 ">
                    <Link
                      style={{ float: "right", paddingRight: "25px" }}
                      to="/send-reset-password-request"
                      className="login-new-account-link "
                    >
                      Forgot Password ?
                    </Link>
                  </Col>
                </Row>
                {/* <div className="login-signup-res-pass-div text-align-left"></div> */}
                <Row className="d-flex">
                  <Col className="d-flex" lg="2" md="2" sm="2">
                    <div style={{ width: "100%" }}>
                      <Input
                        className="check"
                        type="checkbox"
                        color="primary"
                        icon={<Check className="vx-icon" size={10} />}
                        label="Remember me"
                        defaultChecked={false}
                        required
                      />
                    </div>
                  </Col>
                  <Col className="d-flex " lg="10" md="10" sm="10">
                    <Label className="label-button  mx-2 d-flex">
                      Remember me
                    </Label>
                  </Col>
                </Row>
                <div className="d-flex justify-content-center loginbuttonsize">
                  <button
                    // disabled={!performValidation()}
                    style={{ borderRadius: "11px" }}
                    type="button"
                    class="btn btn-primary loginbuttonsize"
                    onClick={(e) => (handleLoginSubmit(e), gaEventTracker('LOGIN')) }
                  >
                    <b>LOGIN</b>
                  </button>
                </div>

                <div className="last"></div>
                <div className="mx-4">
                  Don't have an account yet ?<Link to="/signup">Sign Up</Link>
                </div>
                <Row className="d-flex justify-content-center mt-3">OR</Row>
                <div className="mt-4">
                  <Row className="signupwithgoogle">
                    <button
                      onClick={(e) => (handlegooglelogin(e), gaEventTracker('Sign in with Google'))}
                      className="d-flex justify-content-center signupwithgoogle"
                    >
                      <img
                        style={{
                          margin: "3px",
                          height: "20px",
                        }}
                        src={google}
                      />
                      <Link
                        // style={{ color: "black" }}
                        className=" signinwithgooglesignup"
                      >
                        Sign in with Google
                      </Link>
                    </button>
                  </Row>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Login;
