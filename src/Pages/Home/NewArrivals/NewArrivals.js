import React from 'react';
import "./NewArrivals.css"
import { Accordion, Card, Col, Container, Row, Form } from 'react-bootstrap';
import api from "../../../hooks/useAxios";
import { useEffect } from 'react';
import { useState } from 'react';

const NewArrivals = () => {
    const [details, setDetails] = useState([]);
    console.log(details);
   useEffect(() => {
    
      api.get("/products")
         .then((response) => {
            setDetails(response.data);

         })

         .catch((error) => {
            console.error("There was an error!", error);
         });
   }, []);
    return (
       <div>
          <div className="new-arrivals relative">
             <Container>
                <h1
                   className="text-[50px] text-white font-extrabold"
                   style={{ position: "absolute", top: "280px" }}
                >
                   NEW ARRIVALS
                </h1>
             </Container>
          </div>
          <div className="py-3">
             <Container>
                <Row>
                   <Col sm={3}>
                      <Accordion defaultActiveKey="0">
                         <Accordion.Item eventKey="0">
                            <Accordion.Header className="text-bold">
                               <span>PRICE</span>
                            </Accordion.Header>
                            <Accordion.Body>
                               <form action="">
                                  <input
                                     type="number"
                                     style={{
                                        borderRadius: "10px",
                                        border: "1px solid grey",
                                        width: "70px",
                                        height: "35px",
                                     }}
                                     placeholder="max"
                                     className="p-2 "
                                     required
                                  />
                                  <div className="d-inline-block pl-3">
                                     <input
                                        type="number"
                                        style={{
                                           borderRadius: "10px",
                                           border: "1px solid grey",
                                           width: "70px",
                                           height: "35px",
                                        }}
                                        placeholder="min"
                                        className="p-2 "
                                        required
                                     />
                                  </div>
                                  <span className="pl-2">
                                     <button
                                        style={{
                                           background: "black",
                                           color: "white",
                                           borderRadius: "10px",
                                        }}
                                        className="py-1 px-3 "
                                     >
                                        {" "}
                                        <span className="text-[15px]">
                                           UPDATE
                                        </span>{" "}
                                     </button>{" "}
                                  </span>
                               </form>
                            </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="1">
                            <Accordion.Header>IN STOCK</Accordion.Header>
                            <Accordion.Body>
                               <Form>
                                  {["checkbox"].map((type) => (
                                     <div
                                        key={`default-${type}`}
                                        className="mb-3"
                                     >
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`In Stock`}
                                        />
                                     </div>
                                  ))}
                               </Form>
                            </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="2">
                            <Accordion.Header>GENDER</Accordion.Header>
                            <Accordion.Body>
                               <Form>
                                  {["checkbox"].map((type) => (
                                     <div
                                        key={`default-${type}`}
                                        className="mb-3 space-y-4"
                                     >
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`Unisex (1)`}
                                        />
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`Women's (12)`}
                                        />
                                     </div>
                                  ))}
                               </Form>
                            </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="3">
                            <Accordion.Header>INSULATION</Accordion.Header>
                            <Accordion.Body>
                               <Form>
                                  {["checkbox"].map((type) => (
                                     <div
                                        key={`default-${type}`}
                                        className="mb-3 space-y-4"
                                     >
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`Unisex (1)`}
                                        />
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`Down (2)`}
                                        />
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`SierraLoft Synthetic (4)`}
                                        />
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`Synthetic (1)`}
                                        />
                                     </div>
                                  ))}
                               </Form>
                            </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="4">
                            <Accordion.Header>TEMP RATING</Accordion.Header>
                            <Accordion.Body>
                               <Form>
                                  {["checkbox"].map((type) => (
                                     <div
                                        key={`default-${type}`}
                                        className="mb-3 space-y-4"
                                     >
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`15 Degree (1)`}
                                        />
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`20 Degree (2)`}
                                        />
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`30 Degree (4)`}
                                        />
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`35 Degree (1)`}
                                        />
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`40 Degree (1)`}
                                        />
                                     </div>
                                  ))}
                               </Form>
                            </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="5">
                            <Accordion.Header>CAPACITY</Accordion.Header>
                            <Accordion.Body>
                               <Form>
                                  {["checkbox"].map((type) => (
                                     <div
                                        key={`default-${type}`}
                                        className="mb-3 space-y-4"
                                     >
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`4 Person (2)`}
                                        />
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`6 Person (2)`}
                                        />
                                     </div>
                                  ))}
                               </Form>
                            </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="6">
                            <Accordion.Header>DOORS</Accordion.Header>
                            <Accordion.Body>
                               <Form>
                                  {["checkbox"].map((type) => (
                                     <div
                                        key={`default-${type}`}
                                        className="mb-3 space-y-4"
                                     >
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`1 Door (5)`}
                                        />
                                     </div>
                                  ))}
                               </Form>
                            </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="7">
                            <Accordion.Header>VOLUME</Accordion.Header>
                            <Accordion.Body>
                               <Form>
                                  {["checkbox"].map((type) => (
                                     <div
                                        key={`default-${type}`}
                                        className="mb-3 space-y-4"
                                     >
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`20L-39L (2)`}
                                        />
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`60L+ (1)`}
                                        />
                                     </div>
                                  ))}
                               </Form>
                            </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="8">
                            <Accordion.Header>WEIGHT</Accordion.Header>
                            <Accordion.Body>
                               <Form>
                                  {["checkbox"].map((type) => (
                                     <div
                                        key={`default-${type}`}
                                        className="mb-3 space-y-4"
                                     >
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`1-2 Lbs (3)`}
                                        />
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`3-4 Lbs (2)`}
                                        />
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`7-8 Lbs (4)`}
                                        />
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`11-12 Lbs (1)`}
                                        />
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`13-14 Lbs (1)`}
                                        />
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`17-18 Lbs (5)`}
                                        />
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`< 1 Lbs (2)`}
                                        />
                                     </div>
                                  ))}
                               </Form>
                            </Accordion.Body>
                         </Accordion.Item>
                      </Accordion>
                   </Col>
                   <Col sm={8}>
                      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 row-cols-sm-1 g-4">
                         {details.map((detail, index) => {
                            return (
                               <>
                                  <Col>
                                     <Card>
                                        <Card.Img
                                           variant="top"
                                           src={`${detail.img}`}
                                        />
                                        <Card.Body>
                                           <Card.Title>{`${detail.name}`}</Card.Title>
                                           <div className='flex justify-content-between py-5 relative' >
                                              <div className='pt-2'>
                                                 <h1>
                                                    Price: $ {detail.price}
                                                 </h1>
                                              </div>
                                              <div className=''>
                                                 <button style={{background: "black", borderRadius: "10px", color: "white"}} className="py-[2px] px-[10px]" >Buy Now</button>
                                              </div>
                                           </div>
                                        </Card.Body>
                                     </Card>
                                  </Col>
                               </>
                            );
                         })}
                      </div>
                   </Col>
                </Row>
             </Container>
          </div>
       </div>
    );
};

export default NewArrivals;