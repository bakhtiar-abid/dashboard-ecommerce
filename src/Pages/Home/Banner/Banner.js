import React from "react";
import {  Container } from "react-bootstrap";
import "./Banner.css";
import { Link } from 'react-router-dom';





const Banner = () => {



   return (
      <div className="top-banner">
         <Container
            data-aos="fade-down"
            // data-aos-anchor-placement="top-center"
            // data-aos-easing="ease-in-out"
            data-aos-duration="1000"
         >
            {/* Top Banner Section Start */}

            <div>
               {" "}
               <h2 className="font-size pt-[600px] ">
                  END OF SUMMER SALE-EBRATION
               </h2>{" "}
               <p
                  className=""
                  style={{
                     fontSize: "20px",
                     letterSpacing: "1px",
                     paddingBottom: "1em",
                     color: "white",
                  }}
               >
                  Save 25% Sitewide - Including Sale Items - With Code
                  LABORDAY2022
               </p>
            </div>
            <div className="pb-[50px]">
               <Link to="/new-arrivals">
                  <button className="common-button">
                     <span className="text-white text-[20px]">
                        Shop New Arrivals
                     </span>
                  </button>
               </Link>
            </div>
            {/* Top Banner Section End */}
         </Container>
      </div>
   );
};

export default Banner;
