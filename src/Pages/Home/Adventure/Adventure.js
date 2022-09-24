import React from "react";
import { Container } from "react-bootstrap";
import "./Adventure.css";

const Adventure = () => {
   return (
      <div className="mt-[100px] adventure">
         <Container>
            <div
               data-aos="fade-top"
               // data-aos-anchor-placement="top-center"
               data-aos-easing="ease-in-out"
               data-aos-duration="2000"
            >
               <div>
                  <h2 className="font-size pt-[100px] p-[10px]">
                     ADVENTURE WITHIN REACH
                  </h2>
                  <p
                     className=""
                     style={{
                        fontSize: "20px",
                        letterSpacing: "1px",
                        paddingBottom: "1em",
                        color: "white",
                        textAlign: "justify",
                        padding: "10px",
                     }}
                  >
                     Throughout 2022 we will be partnering with four
                     organizations: LGBT Outdoors, SOS Outreach, Outdoor Asian
                     and Women’s Wilderness — to address common barriers to
                     outdoor recreation with a 1% donation of all web sales,
                     gear donation, education and awareness-raising messaging.
                  </p>
               </div>
               <div>
                  <button className="common-button ml-3">
                     <span className="text-white text-[20px]">Learn More</span>
                  </button>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Adventure;
