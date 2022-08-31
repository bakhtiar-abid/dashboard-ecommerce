import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaGofore } from "react-icons/fa";
import useAuth from "./../../hooks/useAuth";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Register.css";

const Register = () => {
   const location = useLocation();
   const [loginData, setLoginData] = useState({});
   const history = useHistory();
   const { signInWithGoogle, loginUser, authError } =
      useAuth();

   const handleGoogleSignIn = () => {
      signInWithGoogle(location, history);
   };
   const handleLoginSubmit = (e) => {
      loginUser(loginData.email, loginData.password, location, history);
      e.preventDefault();
   };

   const handleOnChange = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
   };
   return (
      <div className="login-back1">
         <div className="login-form1 d-flex justify-content-center align-items-center">
            <Container className="login1">
               <Row>
                  <Col
                     className="login-form-right1 text-center px-4 pt-5"
                     md={7}
                  >
                     <h4 className="fw-bold">Register to your account</h4>
                     <p>
                        Already have an account?{" "}
                        <Link to="/login" >
                           <button className="border-0 bg-transparent signup-toggle-btn">
                              <small>Sign In!</small>
                           </button>
                        </Link>
                     </p>

                     <form onSubmit={handleLoginSubmit}>
                        <input
                           className="w-100 py-2 ps-3 user-input"
                           placeholder="Email"
                           name="email"
                           onChange={handleOnChange}
                        />
                        <br />

                        <input
                           className="w-100 py-2 ps-3 mt-4 user-input"
                           placeholder="Password"
                           type="password"
                           name="password"
                           onChange={handleOnChange}
                           required
                        />
                        <br />
                        <div className="text-end pt-3">
                           <button className="border-0 bg-transparent forgot-btn">
                              Forgot Password?
                           </button>
                           {authError ? (
                              <div className="text-danger pt-2">
                                 <h1>{authError}</h1>
                              </div>
                           ) : (
                              ""
                           )}
                        </div>
                        <input
                           className="mt-4 w-100 py-2 submit-btn1 border-0"
                           type="submit"
                        />
                     </form>
                  </Col>
                  <Col className="login-form-left1 p-5" md={5}>
                     <div>
                        <img className="login-form-logo1" src="" />
                        <p className="text-white py-4">
                           Login using social media to get quick access
                        </p>
                        <div>
                           <button className="text-white facebook-btn1 border-0">
                              <FaFacebookF className="d-inline-block" />
                              <small>Signin with facebook</small>
                           </button>
                           <button className="text-white twitter-btn1 border-0 mt-3">
                              <FaTwitter className="d-inline-block" />
                              <small>Signin with twitter</small>
                           </button>
                           <button
                              onClick={handleGoogleSignIn}
                              className="text-white google-btn1 border-0 mt-3"
                           >
                              <FaGofore className="d-inline-block" />
                              <small>Signin with google</small>
                           </button>
                        </div>
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
      </div>
   );
};

export default Register;
