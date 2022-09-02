import React from 'react';
import { Container } from 'react-bootstrap';
import "./FearuredGear.css"
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FearuredGear = () => {
    return (
       <div className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="px-[140px]">
             <h1 className="text-[45px] font-[200px] font-style">
                FEATURED GEAR
             </h1>
             <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 py-4 g-4">
                <Col>
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
                <Col>
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
                <Col>
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
          </div>
       </div>
    );
};

export default FearuredGear;