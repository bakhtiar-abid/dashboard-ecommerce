import { useFormik } from "formik";
import React, { useState } from "react";
import { Container } from "react-bootstrap";

import Swal from "sweetalert2";

import { Upload } from "upload-js";
import api from "../../../../hooks/useAxios";
import gallery from "../../../../images/gallery-export.svg";

const AddProduct = () => {
   const [thumbnail, setThumnail] = useState("");
   const [picUploading1, setPicUploading1] = useState(false);
   const [error, setError] = useState("");

   const [imgaeFile, setImageFile] = useState();

   const handleForm = useFormik({
      initialValues: {
         name: "",
         price: "",
         description: "",
         img: "",
         features: {
            feature1:
               "Five pockets design with a zippered back pocket and side pocket secure trail essentials",
            feature2:
               "Fixed waist with belt loops; reinforced stitching to combat wear and tear",
            feature3: "UPF 50+ fabric shields you from harmful UV rays",
            feature4: "Easy to set up equal length X aluminum pole design",
            feature5: "Easy to set up equal length X aluminum pole design",
         },
         materials: {
            mat1: "No-See-Um-Mesh",
            mat2: "68D Polyester Taffeta 1200mm C0 DWR",
            mat3: "68D Polyester Taffeta 1200mm C0 DWR",
         },
         specs: {
            capacity: 2,
            NumberOfDoors: 1,
            NumberOfPoles: 2,
            peakHeight: "44 / 112cm",
            lenght: "50/ 127cm",
         },
      },
      onSubmit: (values) => {
         values.img = imgaeFile;

         console.log(values);
         if (
            values.name !== "" &&
            values.price !== "" &&
            values.description !== "" &&
            values.img !== ""
         ) {
            api.post("/newProduct", values).then((res) => {
               if (res.data.acknowledged) {
                  Swal.fire(
                     "Success!",
                     `New Product has been added ! `,
                     "success"
                  ).then((res) => {});

                  setError("");
                  handleForm.resetForm();
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

   // const imageStorageKey = "6d207e02198a847aa98d0a2a901485a5";

   // const handleFileRead = async (e) => {

   // };
   var upload = new Upload({
      apiKey: "public_W142hUB4QTvVT2gzGW9WyW38xw6D",
   });

   var handleFileRead = upload.createFileInputHandler({
      onUploaded: ({ fileUrl, fileId }) => {
         setImageFile(`${fileUrl}`);
         setPicUploading1(true);
      },
   });

   return (
      <div>
         <Container className="py-5">
            <div className="user-info flex justify-content-center align-items-center">
               <h1 className="text-decoration-underline">Add a new product</h1>
            </div>
            <div className="flex justify-content-center align-items-center py-3">
               <form onSubmit={handleForm.handleSubmit}>
                  <div className="mb-4 pt-4">
                     <div className="flex justify-content-between">
                        <div>
                           <label
                              className="text-[#979199] py-2"
                              for="username"
                           >
                              Product name
                           </label>
                        </div>
                        <div>
                           {" "}
                           <small className="text-danger"> {error}</small>
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
                  <br />
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
                              <div className="w-[150px] h-[150px] border-4 ">
                                 <img
                                    className="w-[150px] h-[150px]"
                                    src={imgaeFile}
                                    alt=""
                                 />
                              </div>
                           ) : (
                              <div className="w-[150px] h-[150px] p-4 border-4 border-bg-black">
                                 <img src={gallery} alt="" />
                              </div>
                           )}
                        </p>
                     </div>
                  </div>

                  <div className="py-1">
                     <h1 className="text-[#979199] pb-3">Description</h1>
                     <textarea
                        class="resize w-[355px] h-[200px] p-[10px] user-input rounded"
                        name="description"
                        value={handleForm.values.description}
                        onChange={handleForm.handleChange}
                     ></textarea>
                  </div>

                  <div className="py-5">
                     <button
                        className="py-[6px] px-[130px] bg-black text-white rounded-[10px] "
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
