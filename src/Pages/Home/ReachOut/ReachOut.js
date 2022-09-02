import React from 'react';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img3 from "../../../images/hiker-pack-warranty2.webp"
import img2 from "../../../images/hiker-blog-image.webp"
import img1 from "../../../images/group-shot-reachout.webp"
import "./ReachOut.css"

const ReachOut = () => {
    return (
       <Container fluid className="py-5">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 ">
             <Col>
                <div className="">
                   <img src={img1} width={"600px"} alt="" />
                </div>
                <div className="py-4">
                   <span className="font-bold text-[25px]">REACH OUT</span>
                   <br />
                   Our Partnerships with Nonprofits
                </div>
             </Col>
             <Col>
                <div className="">
                   <img src={img2} width={"600px"} alt="" />
                </div>
                <div className="py-4">
                   <span className="font-bold text-[25px]">
                      LIFETIME WARRANTY
                   </span>
                   <br />
                   Gear meant to last
                </div>
             </Col>
             <Col>
                <div className="">
                   <img src={img3} width={"600px"} alt="" />
                </div>
                <div className="py-4">
                   <span className="font-bold text-[25px]">
                      TIPS FOR YOUR NEXT ADVENTURE
                   </span>
                   <br />
                   Check out the blog
                </div>
             </Col>
          </div>
       </Container>
    );
};

export default ReachOut;