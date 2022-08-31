import React from 'react';
import Swal from "sweetalert2";
import { useFormik } from "formik";
import { useEffect } from 'react';
import api from "../../../hooks/useAxios";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {  faStar, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Col, Accordion, Modal } from 'react-bootstrap';

const ProductDetail = () => {
   const { id } = useParams();
   const [detail, setDetails] = useState([]);
   console.log( "singleDetail", detail);

   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

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


   const [error, setError] = useState("");

   const handleForm = useFormik({
      initialValues: {
         name: "",
         email: "",
         phone: "",
         address: "",
         price: detail.price ? detail.price : "",
         
      },
      onSubmit: (values) => {
         if (
            values.name !== "" &&
            values.email !== "" &&
            values.phone !== "" &&
            values.address !== "" &&
            values.price !== ""
         ) {
            
            // setStoreData({ ...storeData});
            api.post("/placeorder", values).then((res) => {
               if (res.data.acknowledged) {
                  Swal.fire(
                     "Success!",
                     `New Order has been added! `,
                     "success"
                  ).then((res) => {
                     //  history.push("/pay-salary");
                  });
                  setShow(false);
                  setError("");
                  handleForm.resetForm();
               }
            });
         } else if (values.name === "") {
            setError("Name is required! ");
         } else if (values.email === "") {
            setError("Email is required! ");
         } else if (values.phone === "") {
            setError("phone number is required! ");
         } else if (values.address === "") {
            setError("Adress is required! ");
         } else if (values.price === "") {
            setError("Price is required! ");
         }
      },
      enableReinitialize: true,
   });

//    /* Modal */
//    function MyVerticallyCenteredModal(props) {
//       return (
        
//       );
//    }
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
                        onClick={handleShow}
                     >
                        Proceed to buy
                     </button>
                     {/* <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                     /> */}
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
            <Modal
               // {...props}
               show={show}
               size="md"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               onHide={handleClose}
            >
               <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                     Personal Information
                  </Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <div className="flex justify-content-center align-items-center ">
                     <form onSubmit={handleForm.handleSubmit}>
                        <div className="mb-4 pt-[30px] text-[13px]">
                           <div className='flex justify-content-between pb-3' >
                              <div>
                                 <label
                                    className="text-[#979199] "
                                    
                                 >
                                    Name
                                 </label>
                              </div>
                              <div>
                                 <span className="text-danger">{error}</span>
                              </div>
                           </div>
                           <input
                              className="user-input w-[355px] h-[40px] p-2"
                              type="text"
                              value={handleForm.values.name}
                              onChange={handleForm.handleChange}
                              name="name"
                           />
                        </div>
                        <div className="mb-4  text-[13px]">
                           <label className="text-[#979199] pb-3">Email:</label>
                           <br />
                           <input
                              className="user-input w-[355px] h-[40px] p-2"
                              type="text"
                              value={handleForm.values.email}
                              onChange={handleForm.handleChange}
                              name="email"
                           />
                        </div>
                        <div className="mb-4  text-[13px]">
                           <label
                              className="text-[#979199] pb-3"
                              for="username"
                           >
                              Phone
                           </label>
                           <br />

                           <input
                              className="user-input w-[355px] h-[40px] p-2"
                              type="text"
                              value={handleForm.values.phone}
                              onChange={handleForm.handleChange}
                              name="phone"
                           />
                        </div>
                        <div className="mb-4  text-[13px]">
                           <label
                              className="text-[#979199] pb-3"
                              for="username"
                           >
                              Address
                           </label>
                           <br />

                           <input
                              className="user-input w-[355px] h-[40px] p-2"
                              type="text"
                              value={handleForm.values.address}
                              onChange={handleForm.handleChange}
                              name="address"
                           />
                        </div>
                        <div className="mb-4  text-[13px]">
                           <label
                              className="text-[#979199] pb-3"
                              for="username"
                           >
                              Price
                           </label>
                           <br />

                           <input
                              className="user-input w-[355px] h-[40px] p-2"
                              type="number"
                              value={handleForm.values.price}
                              onChange={handleForm.handleChange}
                              step="0.01"
                              name="price"
                              min="0"
                           />
                        </div>
                        <div className="pt-[20px]">
                           <button
                              className="bg-black text-white lg:px-[130px] lg:py-[10px] sm:px-[100px] sm:py-[5px] px-[100px] py-[5px]"
                              style={{ borderRadius: "15px" }}
                           >
                              Submit info
                           </button>
                        </div>
                     </form>
                  </div>
               </Modal.Body>
               <Modal.Footer>
                  <button
                     className="bg-black text-white lg:px-[50px] lg:py-[10px] sm:px-[100px] sm:py-[5px] px-[100px] py-[5px]"
                     onClick={handleClose}
                     style={{ borderRadius: "15px" }}
                  >
                     Close
                  </button>
               </Modal.Footer>
            </Modal>
         </Container>
      </div>
   );
};

export default ProductDetail;