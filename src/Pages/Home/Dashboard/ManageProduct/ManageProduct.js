import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useState } from "react";
import { useEffect } from "react";
import api from "../../../../hooks/useAxios";
import { Col } from 'react-bootstrap';
import MoonLoader from "react-spinners/MoonLoader";


const ManageProduct = () => {

   const [isLoading, setIsLoading] = useState(false);
   const [details, setDetails] = useState([]);
   const [control, setControl] = useState(false); 




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

   }, [control]);

     const handleDelete = (getId) => {
        api.delete(`/product/${getId}`)
           .then((response) => {
              //    setDetails(response.data);
              setControl(!control);
           })

           .catch((error) => {
              console.error("There was an error!", error);
           });
     };

   return (
      <div className="py-5">
         <Container>
            <div className="user-info flex justify-content-center align-items-center">
               <h1 className="text-decoration-underline">Manage Products</h1>
            </div>
            <div className="py-5">
               <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 row-cols-sm-1 g-4 ">
                  {isLoading ? (
                     <div
                        className="pt-[20px]"
                        style={{
                           paddingLeft: "50%",
                        }}
                     >
                        <MoonLoader loading size={50} />
                     </div>
                  ) : (
                     <>
                        {details.map((detail, index) => {
                           return (
                              <>
                                 <Col key={index} style={{ width: "15rem" }}>
                                    <Card>
                                       <Card.Img
                                          variant="top"
                                          src={`${detail.img}`}
                                       />
                                       <Card.Body>
                                          <Card.Title>{`${detail.name}`}</Card.Title>
                                          <div className="flex justify-content-between py-5 relative">
                                             <div className="pt-2">
                                                <h1>Price: ${detail.price}</h1>
                                             </div>
                                             <div className="">
                                               
                                                   <button
                                                      style={{
                                                         background: "black",
                                                         borderRadius: "10px",
                                                         color: "white",
                                                      }}
                                                      onClick={() =>
                                                         handleDelete(detail._id)
                                                      }
                                                      className="py-[2px] px-[10px]"
                                                   >
                                                      Delete
                                                   </button>
                                             
                                             </div>
                                          </div>
                                       </Card.Body>
                                    </Card>
                                 </Col>
                              </>
                           );
                        })}
                     </>
                  )}
               </div>
            </div>
         </Container>
      </div>
   );
};

export default ManageProduct;