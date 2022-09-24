import React from 'react';
import { Container, Card } from 'react-bootstrap';
import "./FearuredGear.css"
import { Col } from 'react-bootstrap';
import api from "../../../hooks/useAxios";
import MoonLoader from "react-spinners/MoonLoader";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


const FearuredGear = () => {
   const [details, setDetails] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   /* Fetching Data From Backend */
   useEffect(() => {
      setIsLoading(true);
      api.get("/products")
         .then((response) => {
            setDetails(response.data);
            setIsLoading(false);
         })

         .catch((error) => {
            console.error("There was an error!", error);
         });
   }, []);
   return (
      <div
         className="py-5"
         style={{ backgroundColor: "#f8f9fa" }}
         id="featuredGear"
      >
         <Container fluid>
            <h1 className="text-[45px] font-[200px] font-style">
               FEATURED GEAR
            </h1>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1  py-4 g-4 ">
               <Col
                  data-aos="fade-right"
                  // data-aos-anchor-placement="top-center"
                  // data-aos-easing="ease-in-out"
                  data-aos-duration="1000"
               >
                  <div className="image-background relative">
                     <div>
                        <Link to={"/new-arrivals"}>
                           <button className=" common-button absolute top-[775px] left-[20px]">
                              Shop Sleeping Bags
                           </button>
                        </Link>
                     </div>
                  </div>
               </Col>
               <Col
                  data-aos="fade-down"
                  // data-aos-anchor-placement="top-center"
                  // data-aos-easing="ease-in-out"
                  data-aos-duration="1000"
               >
                  <div className="image-background1 relative">
                     <div>
                        <Link to={"/new-arrivals"}>
                           <button className=" common-button absolute top-[775px] left-[20px]">
                              Shop Packs
                           </button>
                        </Link>
                     </div>
                  </div>
               </Col>
               <Col
                  data-aos="fade-left"
                  // data-aos-anchor-placement="top-center"
                  // data-aos-easing="ease-in-out"
                  data-aos-duration="1000"
               >
                  <div className="image-background2 relative">
                     <div>
                        <Link to={"/new-arrivals"}>
                           <button className=" common-button absolute top-[775px] left-[20px]">
                              Shop Tents
                           </button>
                        </Link>
                     </div>
                  </div>
               </Col>
            </div>
            <div
               className="py-4"
               data-aos="fade-top"
               // data-aos-anchor-placement="top-center"
               // data-aos-easing="ease-in-out"
               data-aos-duration="1000"
            >
               <h1 className="text-[45px] font-[200px] font-style">
                  NEW ARRIVALS
               </h1>
               <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 row-cols-sm-1 g-4 py-5">
                  {isLoading ? (
                     <div
                        className="pt-[20px]"
                        style={{
                           paddingLeft: "50%",
                        }}
                     >
                        <MoonLoader loading size={80} />
                     </div>
                  ) : (
                     <>
                        {details
                           .slice(0, 6)
                           .map((detail, index) => {
                              return (
                                 <>
                                    <Col
                                       key={index}
                                       data-aos="fade-top"
                                       // data-aos-anchor-placement="top-center"
                                       data-aos-easing="ease-in-out"
                                       data-aos-duration="1000"
                                    >
                                       <Card>
                                          <Card.Img
                                             variant="top"
                                             src={`${detail.img}`}
                                          />
                                          <Card.Body>
                                             <Card.Title>{`${detail.name}`}</Card.Title>
                                             <div className="flex justify-content-between py-5 relative">
                                                <div className="pt-2">
                                                   <h1>
                                                      Price: ${detail.price}
                                                   </h1>
                                                </div>
                                                <div className="">
                                                   <Link to={`/new-arrivals`}>
                                                      <button
                                                         style={{
                                                            background: "black",
                                                            borderRadius:
                                                               "10px",
                                                            color: "white",
                                                         }}
                                                         className="py-[2px] px-[10px]"
                                                      >
                                                         Buy Now
                                                      </button>
                                                   </Link>
                                                </div>
                                             </div>
                                          </Card.Body>
                                       </Card>
                                    </Col>
                                 </>
                              );
                           })
                           .reverse()}
                     </>
                  )}
               </div>
            </div>
         </Container>
      </div>
   );
};

export default FearuredGear;