import React from "react";
import { Container } from "react-bootstrap";
import "./RightGear.css";

const RightGear = () => {
   return (
      <div
         className="right-gear-back py-5"
         style={{ backgroundColor: "#f8f9fa" }}
      >
         <Container>
            <div>
               <h2 className="font-size pt-[600px] ">
                  FIND THE RIGHT GEAR FOR YOU
               </h2>
               <p
                  className=""
                  style={{
                     fontSize: "20px",
                     letterSpacing: "1px",
                     paddingBottom: "1em",
                     color: "white",
                  }}
               >
                  Use our gear finder to find the best gear for your next
                  adventure
               </p>
            </div>
            <div className="flex flex-wrap">
               <div className="pb-3">
                  <button className="common-button">
                     <span className="text-white text-[20px]">Find Tents</span>
                  </button>
               </div>

               <div className="lg:pl-3 ">
                  <button className="common-button  ">
                     <span className="text-white text-[20px]">
                        Find Sleeping Bags
                     </span>
                  </button>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default RightGear;
