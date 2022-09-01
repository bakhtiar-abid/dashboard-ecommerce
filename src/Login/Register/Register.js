import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaGofore, FaTwitter } from "react-icons/fa";
import { Link, useHistory, useLocation } from "react-router-dom";
import Navigation from "../../Pages/Shared/Navigation";
import useAuth from "./../../hooks/useAuth";
import "./Register.css";

const Register = () => {
      const [loginData, setLoginData] = useState({});
      const history = useHistory();
      const location = useLocation();
      const { user, signInWithGoogle, registerUser, isLoading, authError } = useAuth();

      const handleOnBlur = (e) => {
         const field = e.target.name;
         const value = e.target.value;
         const newLoginData = { ...loginData };
         newLoginData[field] = value;
         setLoginData(newLoginData);
      };
      const handleLoginSubmit = (e) => {
         if (loginData.password !== loginData.password2) {
            alert("Your password did not match");
            return;
         }
         registerUser(
            loginData.email,
            loginData.password,
            loginData.name,
            history
         );
         e.preventDefault();
      };

         const handleGoogleSignIn = () => {
            signInWithGoogle(location, history);
         };
   return (
      <>
      <Navigation/>
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
                           <small> Already have an account?</small>
                           <Link to="/login">
                              <button className="border-0 bg-transparent signup-toggle-btn pl-1">
                                 <small>Sign In!</small>
                              </button>
                           </Link>
                        </p>

                        <form onSubmit={handleLoginSubmit}>
                           <div className="">
                              <input
                                 className="w-100 py-2 ps-3  user-input "
                                 placeholder="Your Name"
                                 name="name"
                                 onBlur={handleOnBlur}
                                 required
                              />
                           </div>

                           <br />
                           <input
                              className="w-100 py-2 ps-3 user-input"
                              placeholder="Email"
                              type="email"
                              onBlur={handleOnBlur}
                              name="email"
                              required
                           />
                           <br />

                           <input
                              className="w-100 py-2 ps-3 mt-4 user-input"
                              placeholder="Password"
                              type="password"
                              name="password"
                              onBlur={handleOnBlur}
                              required
                           />
                           <br />
                           <input
                              className="w-100 py-2 ps-3 mt-4 user-input"
                              placeholder="ReType Password"
                              type="password"
                              name="password2"
                              onBlur={handleOnBlur}
                              required
                           />
                           <br />
                           <div className="text-end pt-3">
                              <button className="border-0 bg-transparent forgot-btn">
                                 Forgot Password?
                              </button>
                              {authError ? (
                                 <div className="text-danger pt-2">
                                    <small>{authError}</small>
                                 </div>
                              ) : (
                                 ""
                              )}
                           </div>
                           <button className="mt-4 w-100 px-[5px] py-[15px] submit-btn1 border-0">
                              Register
                           </button>
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
      </>
   );
};

export default Register;
