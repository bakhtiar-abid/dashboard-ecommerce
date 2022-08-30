import React from 'react';
import "./NewArrivals.css"
import { Accordion, Card, Col, Container, Row, Button, CardGroup, Form } from 'react-bootstrap';

const NewArrivals = () => {
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
                                  {["checkbox", "radio"].map((type) => (
                                     <div
                                        key={`default-${type}`}
                                        className="mb-3"
                                     >
                                        <Form.Check
                                           type={type}
                                           id={`default-${type}`}
                                           label={`default ${type}`}
                                        />

                                        <Form.Check
                                           disabled
                                           type={type}
                                           label={`disabled ${type}`}
                                           id={`disabled-default-${type}`}
                                        />
                                     </div>
                                  ))}
                               </Form>
                            </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="2">
                            <Accordion.Header>GENDER</Accordion.Header>
                            <Accordion.Body></Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="3">
                            <Accordion.Header>INSULATION</Accordion.Header>
                            <Accordion.Body></Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="4">
                            <Accordion.Header>TEMP RATING</Accordion.Header>
                            <Accordion.Body></Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="5">
                            <Accordion.Header>CAPACITY</Accordion.Header>
                            <Accordion.Body></Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="6">
                            <Accordion.Header>DOORS</Accordion.Header>
                            <Accordion.Body></Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="1">
                            <Accordion.Header>VOLUME</Accordion.Header>
                            <Accordion.Body></Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="7">
                            <Accordion.Header>WEIGHT</Accordion.Header>
                            <Accordion.Body></Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="8">
                            <Accordion.Header>WEIGHT</Accordion.Header>
                            <Accordion.Body></Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="9">
                            <Accordion.Header>IN STOCK</Accordion.Header>
                            <Accordion.Body></Accordion.Body>
                         </Accordion.Item>
                      </Accordion>
                   </Col>
                   <Col sm={8}>
                      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 row-cols-sm-1 g-4">
                         <Col>
                            <Card>
                               <Card.Img
                                  variant="top"
                                  src="holder.js/100px160"
                               />
                               <Card.Body>
                                  <Card.Title>Card title</Card.Title>
                                  <Card.Text>
                                     This is a wider card with supporting text
                                     below as a natural lead-in to additional
                                     content. This content is a little bit
                                     longer.
                                  </Card.Text>
                               </Card.Body>
                               <Card.Footer>
                                  <small className="text-muted">
                                     Last updated 3 mins ago
                                  </small>
                               </Card.Footer>
                            </Card>
                         </Col>
                         <Col>
                            <Card>
                               <Card.Img
                                  variant="top"
                                  src="holder.js/100px160"
                               />
                               <Card.Body>
                                  <Card.Title>Card title</Card.Title>
                                  <Card.Text>
                                     This is a wider card with supporting text
                                     below as a natural lead-in to additional
                                     content. This content is a little bit
                                     longer.
                                  </Card.Text>
                               </Card.Body>
                               <Card.Footer>
                                  <small className="text-muted">
                                     Last updated 3 mins ago
                                  </small>
                               </Card.Footer>
                            </Card>
                         </Col>
                         <Col>
                            <Card>
                               <Card.Img
                                  variant="top"
                                  src="holder.js/100px160"
                               />
                               <Card.Body>
                                  <Card.Title>Card title</Card.Title>
                                  <Card.Text>
                                     This is a wider card with supporting text
                                     below as a natural lead-in to additional
                                     content. This content is a little bit
                                     longer.
                                  </Card.Text>
                               </Card.Body>
                               <Card.Footer>
                                  <small className="text-muted">
                                     Last updated 3 mins ago
                                  </small>
                               </Card.Footer>
                            </Card>
                         </Col>
                         <Col>
                            <Card>
                               <Card.Img
                                  variant="top"
                                  src="holder.js/100px160"
                               />
                               <Card.Body>
                                  <Card.Title>Card title</Card.Title>
                                  <Card.Text>
                                     This is a wider card with supporting text
                                     below as a natural lead-in to additional
                                     content. This content is a little bit
                                     longer.
                                  </Card.Text>
                               </Card.Body>
                               <Card.Footer>
                                  <small className="text-muted">
                                     Last updated 3 mins ago
                                  </small>
                               </Card.Footer>
                            </Card>
                         </Col>
                      </div>
                   </Col>
                </Row>
             </Container>
          </div>
       </div>
    );
};

export default NewArrivals;