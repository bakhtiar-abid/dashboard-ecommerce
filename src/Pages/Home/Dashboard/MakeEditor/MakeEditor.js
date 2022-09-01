import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
import api from "../../../../hooks/useAxios";
import useAuth from "./../../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router-dom";

const MakeEditor = () => {
   const [displayName, setDisplayName] = useState("");
   const [email, setEmail] = useState("");
   const [userEmail, setUserEmail] = useState("");
   console.log(email);

   const { token } = useAuth();

   const clearInputText = () => {
      const firstNameInput = document.getElementById("first_name");
      firstNameInput.value = "";
      const firstNameInput1 = document.getElementById("first_name1");
      firstNameInput1.value = "";
      const firstNameInput2 = document.getElementById("first_name2");
      firstNameInput2.value = "";
   };

  
   const handleEditor = (e) => {
      setEmail(e.target.value);
   };

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
   //  const location = useLocation();
    const {  registerUser } = useAuth();

    const handleOnBlur = (e) => {
       const field = e.target.name;
       const value = e.target.value;
       const newLoginData = { ...loginData };
       console.log(newLoginData);
       newLoginData[field] = value;
       setLoginData(newLoginData);
    };
    const handleLoginSubmit = (e) => {
      
       registerUser(
          loginData.email,
          loginData.password,
          loginData.name,
          history
       );
        Swal.fire("Success!", `New Editor has been added! `, "success").then(
           (res) => {
              //  history.push("/pay-salary");
           }
        );
       e.preventDefault();
    };

/* Make new editor */
   const handleEditorSubmit = (e) => {
      api.put(
         `/users/editor`,
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
            Swal.fire("Success!", `New Editor has been added! `, "success").then(
               (res) => {
                  //  history.push("/pay-salary");
               }
            );
         })

         .catch((error) => {
            console.error("There was an error!", error);
         })
         .finally(clearInputText());
          e.preventDefault();
   };

   return (
      <div className="py-5">
         <Container>
            <form onSubmit={handleLoginSubmit}>
               <div className="user-info flex justify-content-center align-items-center">
                  <h1 className="text-decoration-underline">
                     Do you want to create a new user?
                  </h1>
               </div>
               <div className="flex  justify-content-center align-items-center py-5">
                  <label className="pr-2">
                     <h1 className="font-bold text-[20px] pr-2">User Name:</h1>
                  </label>
                  <input
                     className="user-input w-[600px] h-[50px] p-2"
                     type="text"
                     name="name"
                     onBlur={handleOnBlur}
                     required
                     placeholder="User Name"
                     id="first_name"
                  />
               </div>
               <div className="flex  justify-content-center align-items-center py-5">
                  <label>
                     <h1 className="font-bold text-[20px] pr-3 ">
                        User Email:
                     </h1>
                  </label>
                  <input
                     className="user-input w-[600px] h-[50px] p-2"
                     type="email"
                     onBlur={handleOnBlur}
                     name="email"
                     required
                     placeholder="Email"
                     id="first_name1"
                  />
               </div>
               <div className="flex  justify-content-center align-items-center py-5">
                  <div className="pr-4">
                     <label className="">
                        <h1 className="font-bold text-[20px] ">
                           User Password:
                        </h1>
                     </label>
                  </div>
                  <div className="pr-[40px]">
                     <input
                        className="user-input w-[600px] h-[50px] p-2"
                        type="password"
                        name="password"
                        onBlur={handleOnBlur}
                        required
                        placeholder="Email"
                        id="first_name1"
                     />
                  </div>
               </div>
               <div className="flex  justify-content-center align-items-center">
                  <button className="py-[10px] px-[100px] bg-black text-white rounded-[10px]">
                     Submit
                  </button>
               </div>
            </form>

            <div className="py-5">
               <form onSubmit={handleEditorSubmit}>
                  <div className="user-info flex justify-content-center align-items-center">
                     <h1 className="text-decoration-underline">
                        Do you want to create user an editor?
                     </h1>
                  </div>
                  <div className="flex  justify-content-center align-items-center py-5">
                     <label>
                        <h1 className="font-bold text-[20px] pr-3 ">
                           User Email:
                        </h1>
                     </label>
                     <input
                        className="user-input w-[600px] h-[50px] p-2"
                        type="email"
                        onChange={handleEditor}
                        required
                        placeholder="Email"
                        id="first_name2"
                     />
                  </div>
                  <div className="flex  justify-content-center align-items-center">
                     <button className="py-[10px] px-[100px] bg-black text-white rounded-[10px]">
                        Submit
                     </button>
                  </div>
               </form>
            </div>
         </Container>
      </div>
   );
};

export default MakeEditor;
