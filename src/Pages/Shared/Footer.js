import React from "react";
import { Container } from 'react-bootstrap';

const Footer = () => {
   return (
      <div className="py-5" style={{ backgroundColor: "#00000e" }}>
         <Container className="p-[120px]">
            <div className="row ">
               <div className="col-lg-3 col-md-4 col-sm-6 pb-[50px] space-y-5 ">
                  <h2 className="text-white font-bold text-[20px]">SHOP</h2>
                  <p className="py-1  ">
                     <a className="text-decoration-none text-white" href="">
                        Tents
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Sleeping Bags
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Backpacks
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Men's Apparel
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Women's Apparel
                     </a>
                  </p>
               </div>
               <div className="col-lg-3  col-md-4 col-sm-6 pb-[50px] space-y-5">
                  <h2 className="text-white font-bold text-[20px]">PRODUCT</h2>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Return Policy
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Product Care
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Product Registration
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Parts & Warranty Info
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Pro Purchase Program
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Distributors
                     </a>
                  </p>
               </div>
               <div className="col-lg-3  col-md-4 col-sm-6 pb-[50px] space-y-5">
                  <h2 className="text-white font-bold text-[20px]">HELP</h2>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        FAQ
                     </a>
                  </p>
                  <p className="py-1">
                     <a className="text-decoration-none text-white" href="">
                        Contact Us
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Dealer Location
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Shipping
                     </a>
                  </p>
               </div>
               <div className="col-lg-3  col-md-4 col-sm-6 pb-[50px] space-y-5">
                  <h2 className="text-white font-bold text-[20px]">ABOUT</h2>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Blog
                     </a>
                  </p>
                  <p className="py-1">
                     <a className="text-decoration-none text-white" href="">
                        Our Story
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Affiliate Program
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Social Responsibility
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        CA Prop 65 FAQy
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Sitemap
                     </a>
                  </p>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Footer;
