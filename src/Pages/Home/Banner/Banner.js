import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
   return (
      <div className="top-banner">
         <Container>
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
            <div>
               <button className="py-[10px] px-[40px] bg-black border-white border-1">
                  {" "}
                  <span className="text-white text-[20px]">Shop New Arrivals</span>{" "}
               </button>
            </div>
            {/* Top Banner Section End */}
         </Container>
      </div>
   );
};

export default Banner;
