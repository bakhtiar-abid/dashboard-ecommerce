import React from 'react';
import { Col, Card } from 'react-bootstrap';

const zipperLessProduct = [
   {
      name: "Women's Night Cap 20°",
      price: 199.95,
      img: "https://cdn11.bigcommerce.com/s-k4vqoje/images/stencil/1280x1280/products/4659/14676/77610921R_MAIN_NightCapSynthetic20Wmns_print__11491.1643147462.jpg?c=2",
   },
   {
      name: "Night Cap°",
      price: 159.95,
      img: "https://cdn11.bigcommerce.com/s-k4vqoje/images/stencil/1280x1280/products/4658/14668/77610721R_MAIN_NightCapSynthetic35_print__37263.1643147048.jpg?c=2",
   },
   {
      name: "Night Cap 20°",
      price: 179.95,
      img: "https://cdn11.bigcommerce.com/s-k4vqoje/images/stencil/1280x1280/products/4657/14661/77610821R_MAIN_NightCapSynthetic20_print__91116.1643146816.jpg?c=2",
   },
   {
      name: "Backcountry Bed 20° Duo",
      price: 449.95,
      img: "https://cdn11.bigcommerce.com/s-k4vqoje/images/stencil/1280x1280/products/4656/14653/SD2019_BackCountryBedDUO_20_70606320_Print_1__95167.1643146077.jpg?c=2",
   },
   {
      name: "Women's Backcountry bed 20°",
      price: 299.95,
      img: "https://cdn11.bigcommerce.com/s-k4vqoje/images/stencil/1280x1280/products/4644/14626/SD2019_BackcountryBed_20_Women_70603920_Print_1__45502.1643144448.jpg?c=2",
   },
   {
      name: "Backcountry Bed 20°",
      price: 279.95,
      img: "https://cdn11.bigcommerce.com/s-k4vqoje/images/stencil/1280x1280/products/4643/14617/SD2019_BackcountryBed_20_70603820_Print_1__19636.1643143582.jpg?c=2",
   },
];

const ZipperLess = () => {
    return (
       <div>
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 row-cols-sm-1 g-4 py-5">
             <>
                {zipperLessProduct.map((detail, index) => {
                      return (
                         <>
                            <Col key={index}>
                               <Card>
                                  <Card.Img
                                     variant="top"
                                     src={`${detail.img}`}
                                  />
                                  <Card.Body>
                                     <Card.Title>{`${detail.name}`}</Card.Title>
                                     <div className="flex justify-content-between relative">
                                        <div></div>
                                        <div className="absolute left-[455px] top-[-28px]">
                                           <h1 className='font-bold'>Price: ${detail.price}</h1>
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
          </div>
       </div>
    );
};

export default ZipperLess;