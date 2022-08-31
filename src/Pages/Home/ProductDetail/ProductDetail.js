import React from 'react';

import { useEffect } from 'react';
import api from "../../../hooks/useAxios";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {  faStar, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Col, Accordion, Modal, Button } from 'react-bootstrap';

const ProductDetail = () => {
   const { id } = useParams();
   const [detail, setDetails] = useState([]);
   console.log( "singleDetail", detail);

   const [modalShow, setModalShow] = React.useState(false);

   /* Fetching Data From Backend */
   useEffect(() => {
      api.get(`/productDetail/${id}`)
         .then((response) => {
            setDetails(response.data);
         })

         .catch((error) => {
            console.error("There was an error!", error);
         });
   }, [id]);

   /* Modal */
   function MyVerticallyCenteredModal(props) {
      return (
         <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
         >
            <Modal.Header closeButton>
               <Modal.Title id="contained-modal-title-vcenter">
                  Modal heading
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <h4>Centered Modal</h4>
               <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
               </p>
            </Modal.Body>
            <Modal.Footer>
               <button onClick={props.onHide} >Close</button>
            </Modal.Footer>
         </Modal>
      );
   }
   return (
      <div>
         <Container className="py-[40px]">
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 g-4">
               <Col>
                  <img src={detail.img} alt="" />
               </Col>
               <Col className="lg-pl-[320px] ">
                  <div className="">
                     <h1 className="text-[31px] font-bold uppercase">
                        {detail.name}
                     </h1>
                     <p className="pt-2">
                        <FontAwesomeIcon
                           className="text-yellow-400"
                           icon={faStar}
                        />
                        <FontAwesomeIcon
                           className="text-yellow-400"
                           icon={faStar}
                        />
                        <FontAwesomeIcon
                           className="text-yellow-400"
                           icon={faStar}
                        />
                        <FontAwesomeIcon
                           className="text-yellow-400"
                           icon={faStar}
                        />
                        <FontAwesomeIcon icon={faStar} />
                     </p>
                     {/* Price */}
                     <p className="pt-3">${detail.price}</p>
                  </div>
                  <div className="py-5">
                     <button
                        className="bg-black text-white lg:px-[200px] lg:py-[10px] sm:px-[100px] sm:py-[5px] px-[100px] py-[5px]"
                        style={{ borderRadius: "15px" }}
                        onClick={() => setModalShow(true)}
                     >
                        Proceed to buy
                     </button>
                     <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                     />
                  </div>
                  <div>
                     <p>{detail.description}</p>
                  </div>
                  <div className="py-5">
                     <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                           <Accordion.Header>FEATURES</Accordion.Header>
                           <Accordion.Body>
                              <h1 className="d-inline-block">
                                 <FontAwesomeIcon
                                    icon={faCircleDot}
                                    className="pr-[5px]"
                                 />
                                 {detail?.features?.feature1}
                              </h1>

                              <div>
                                 <FontAwesomeIcon icon={faCircleDot} />{" "}
                                 <h1 className="d-inline-block">
                                    {detail?.features?.feature2}
                                 </h1>
                              </div>
                              <div>
                                 <FontAwesomeIcon icon={faCircleDot} />{" "}
                                 <h1 className="d-inline-block">
                                    {detail?.features?.feature3}
                                 </h1>
                              </div>
                              <div>
                                 <FontAwesomeIcon icon={faCircleDot} />{" "}
                                 <h1 className="d-inline-block">
                                    {detail?.features?.feature4}
                                 </h1>
                              </div>
                              <div>
                                 <FontAwesomeIcon icon={faCircleDot} />{" "}
                                 <h1 className="d-inline-block">
                                    {detail?.features?.feature5}
                                 </h1>
                              </div>
                           </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                           <Accordion.Header>MATERIALS</Accordion.Header>
                           <Accordion.Body>
                              <div>
                                 {" "}
                                 <h1 className="d-inline-block">
                                    <FontAwesomeIcon icon={faCircleDot} />
                                    <span> {detail?.materials?.mat1}</span>
                                 </h1>
                              </div>
                              {detail?.materials?.mat2 ? (
                                 <div>
                                    <FontAwesomeIcon icon={faCircleDot} />{" "}
                                    <h1 className="d-inline-block">
                                       {detail?.materials?.mat2}
                                    </h1>
                                 </div>
                              ) : (
                                 ""
                              )}
                              {detail?.materials?.mat3 ? (
                                 <div>
                                    <FontAwesomeIcon icon={faCircleDot} />{" "}
                                    <h1 className="d-inline-block">
                                       {detail?.materials?.mat3}
                                    </h1>
                                 </div>
                              ) : (
                                 ""
                              )}
                           </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                           <Accordion.Header>SPEC</Accordion.Header>
                           <Accordion.Body>
                              {detail?.specs?.capacity ? (
                                 <>
                                    <p>Capacity: {detail?.specs?.capacity}</p>
                                 </>
                              ) : (
                                 ""
                              )}
                              {detail?.specs?.NumberOfDoors ? (
                                 <>
                                    <p>
                                       Number Of Doors:{" "}
                                       {detail?.specs?.NumberOfDoors}
                                    </p>
                                 </>
                              ) : (
                                 ""
                              )}
                              {detail?.specs?.NumberOfPoles ? (
                                 <>
                                    <p>
                                       Number Of Poles:{" "}
                                       {detail?.specs?.NumberOfPoles}
                                    </p>
                                 </>
                              ) : (
                                 ""
                              )}
                              {detail?.specs?.peakHeight ? (
                                 <>
                                    <p>
                                       Peak Height: {detail?.specs?.peakHeight}
                                    </p>
                                 </>
                              ) : (
                                 ""
                              )}
                              {detail?.specs?.length ? (
                                 <>
                                    <p>Length: {detail?.specs?.length}</p>
                                 </>
                              ) : (
                                 ""
                              )}
                              {detail?.specs?.weight ? (
                                 <>
                                    <p>Weight: {detail?.specs?.weight}</p>
                                 </>
                              ) : (
                                 ""
                              )}
                              {detail?.specs?.SKU ? (
                                 <>
                                    <p>SKU: {detail?.specs?.SKU}</p>
                                 </>
                              ) : (
                                 ""
                              )}
                           </Accordion.Body>
                        </Accordion.Item>
                     </Accordion>
                  </div>
               </Col>
            </div>
            {/* Modal */}
         </Container>
      </div>
   );
};

export default ProductDetail;