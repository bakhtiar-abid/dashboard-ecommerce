import React, { useState } from "react";
import { Container } from "react-bootstrap";
import api from "../../../../hooks/useAxios";
import useAuth from "./../../../../hooks/useAuth";
import Swal from "sweetalert2";

const MakeEditor = () => {
   const [email, setEmail] = useState("");
   console.log(email);
   const { token } = useAuth();

   const clearInputText = () => {
      const firstNameInput = document.getElementById("first_name");
      firstNameInput.value = "";
   };

   const handleOnBlur = (e) => {
      setEmail(e.target.value);
   };
  
   const handleAdmin = () => {
      api.put(
         `/users/admin`,
         { email: email },
         {
            headers: {
               authorization: `Bearer ${token}`,
               "content-type": "application/json",
            },
         }
      )
         .then((response) => {
            //    setDetails(response.data);
            Swal.fire("Success!", `New Admin has been added! `, "success").then(
               (res) => {
                  //  history.push("/pay-salary");
               }
            );
         })

         .catch((error) => {
            console.error("There was an error!", error);
         })
         .finally(clearInputText());
   };

   return (
      <div className="py-5">
         <Container>
            <div className="user-info flex justify-content-center align-items-center">
               <h1 className="text-decoration-underline">Make Editor</h1>
            </div>
            <div className="flex  justify-content-center align-items-center py-5">
               <input
                  className="user-input w-[600px] h-[50px] p-2"
                  type="email"
                  onChange={handleOnBlur}
                  required
                  placeholder="Email"
                  id="first_name"
               />
            </div>
            <div className="flex  justify-content-center align-items-center">
               <button
                  className="py-[10px] px-[100px] bg-black text-white rounded-[10px]"
                  onClick={() => handleAdmin()}
               >
                  Submit
               </button>
            </div>
         </Container>
      </div>
   );
};

export default MakeEditor;
