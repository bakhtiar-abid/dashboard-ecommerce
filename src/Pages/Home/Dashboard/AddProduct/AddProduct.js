import { useFormik } from "formik";
import React, { useState } from "react";
import { Container } from "react-bootstrap";

import Swal from "sweetalert2";

import api from "../../../../hooks/useAxios";
import gallery from "../../../../images/gallery-export.svg";

const AddProduct = () => {
   const [thumbnail, setThumnail] = useState("");
   const [picUploading1, setPicUploading1] = useState(false);
   const [error, setError] = useState("");

   const handleForm = useFormik({
      initialValues: {
         name: "",
         price: "",
         description: "",
         img: "",
      },
      onSubmit: (values) => {
         values.img = thumbnail;

         if (
            values.name !== "" &&
            values.price !== "" &&
            values.description !== "" &&
            values.img !== ""
         ) {
            api.post("/add-new-bus", values).then((res) => {
               if (res.data.acknowledged) {
                  Swal.fire(
                     "Success!",
                     `New Product has been added ! `,
                     "success"
                  ).then((res) => {});

                  setError("");
               }
            });
         } else if (
            values.name === "" ||
            values.price === "" ||
            values.description === "" ||
            values.img === ""
         ) {
            setError("Required Field!");
         }

         // setStoreData({ ...storeData});
      },
      enableReinitialize: true,
   });

   const imageStorageKey = "6d207e02198a847aa98d0a2a901485a5";

   const handleFileRead = async (e) => {
      const imageFile = e.target.files[0];
      const formData = new FormData();
      // formData.append("avatar", imageFile);
      const url = `http://freeimage.host/api/1/upload/?key=${imageStorageKey}&source=${imageFile}&format=json`;

      api.post(url, {
         headers: {
            " Access-Control-Allow-Origin": " http://127.0.0.1:3000",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
         },
      }).then((res) => {
         console.log("image",res);
      });
   };

   // fetch(url, {
   //    method: "POST",
   //    headers: {
   //       headers: { "Content-Type": "application/json" },
   //    },
   // })
   //    .then((res) => res.json())
   //    .then((result) => {
   //       console.log("imgaeData", result);
   //    });
   return (
      <div>
         <Container className="py-5">
            <div className="user-info flex justify-content-center align-items-center">
               <h1 className="text-decoration-underline">Add a new product</h1>
            </div>
            <div>
               <form onSubmit={handleForm.handleSubmit}>
                  <div className="mb-4 pt-4">
                     <label className="text-[#979199] py-2" for="username">
                        Product name
                     </label>
                     <br />
                     <input
                        className="user-input w-[355px] h-[40px] p-2"
                        type="text"
                        value={handleForm.values.name}
                        onChange={handleForm.handleChange}
                        name="name"
                     />
                  </div>

                  <div className="py-1">
                     <h1 className="text-[#979199] pb-3">Price</h1>
                     <input
                        className="user-input w-[355px] h-[40px] p-2"
                        type="text"
                        value={handleForm.values.price}
                        onChange={handleForm.handleChange}
                        name="price"
                     />
                  </div>

                  {/* Uplaoding Thumbnail */}
                  <div className="d-inline-block">
                     <h1 className="text-[#979199] pb-3">Upload Image</h1>
                     <div
                        className=""
                        onClick={() => {
                           const butt1 =
                              document.getElementById("upload-thumbnail");
                           butt1.click();
                        }}
                        style={{ cursor: "pointer" }}
                     >
                        <p className="new-business-border d-inline-block ">
                           {picUploading1 ? (
                              <div className="w-[150px] h-[150px]  ">
                                 <img
                                    className="w-[150px] h-[150px]"
                                    src={thumbnail}
                                    alt=""
                                 />
                              </div>
                           ) : (
                              <div className="w-[150px] h-[150px] p-4">
                                 <img src={gallery} alt="" />
                              </div>
                           )}
                        </p>
                     </div>
                  </div>

                  <div className="py-1">
                     <h1 className="text-[#979199] pb-3">Price</h1>
                     <textarea
                        class="resize w-[355px] h-[200px] p-[10px] user-input rounded"
                        name="description"
                        value={handleForm.values.description}
                        onChange={handleForm.handleChange}
                     ></textarea>
                  </div>

                  <div className="py-5">
                     <button
                        className="confirm-payment "
                        onClick={handleForm.handleSubmit}
                     >
                        Add product
                     </button>
                  </div>
                  <div
                     style={{
                        display: "none",
                     }}
                  >
                     <input
                        type="file"
                        id="upload-thumbnail"
                        accept=".png, .jpg, .jpeg"
                        onChange={handleFileRead}
                     />
                  </div>
               </form>
            </div>
         </Container>
      </div>
   );
};

export default AddProduct;
