import React, { useEffect, useState } from "react";
import api from "../../../../hooks/useAxios";

const ManageAllOrders = () => {
   const [details, setDetails] = useState([]);
   const [control, setControl] = useState(false);
 


    const handleUpdate = (getId) => {
         api.put(`/orders/${getId}`, {status: "proceed"})
            .then((response) => {
            //    setDetails(response.data);
               setControl(!control);
            })

            .catch((error) => {
               console.error("There was an error!", error);
            });
    }
    
    const handleDelete = (getId) => {
         api.delete(`/orders/${getId}`)
            .then((response) => {
            //    setDetails(response.data);
               setControl(!control);
            })

            .catch((error) => {
               console.error("There was an error!", error);
            });
    }
  

   useEffect(() => {
      api.get("/orders")
         .then((response) => {
            setDetails(response.data);
         })

         .catch((error) => {
            console.error("There was an error!", error);
         });
   }, [control]);

   return (
      <div className="py-5">
         <>
            <div className="user-info flex justify-content-center align-items-center">
               <h1 className="text-decoration-underline">Manage All Orders</h1>
            </div>
            <div className="py-5">
               <div className="table-container1">
                  <table
                     className="responsive"
                     style={{ height: "calc(100%-164px)" }}
                  >
                     <tr
                        style={{ backgroundColor: "#211572" }}
                        className="space-y-5"
                     >
                        <th className="text-white text-[1rem] pl-[30px] w-[300px]">
                           Item Name
                        </th>
                        <th className="text-white text-[1rem] w-[300px]">
                           User Name
                        </th>
                        <th className="text-white text-[1rem] w-[300px]">
                           Email
                        </th>
                        <th className="text-white text-[1rem] w-[300px]">
                           Phone
                        </th>
                        <th className="text-white text-[1rem] w-[300px]">
                           Address
                        </th>
                        <th className="text-white text-[1rem] w-[300px]">
                           Price
                        </th>
                        <th className="text-white text-[1rem] w-[300px]">
                           Status
                        </th>
                        <th className="text-white text-[1rem] w-[300px]">
                           Update
                        </th>
                        <th className="text-white text-[1rem] w-[300px]">
                           Remove
                        </th>
                     </tr>
                     <>
                        {details?.map((info, index) => {
                           return (
                              <tr map={index}>
                                 <td className="text-[15px] font-bold pl-[30px] ">
                                    {info?.itemName}
                                 </td>
                                 <td className="text-[15px] font-bold">
                                    {info?.name}
                                 </td>
                                 <td className="text-[15px] font-bold">
                                    {info?.email ? info?.email : "N/A"}
                                 </td>
                                 <td className="text-[15px] font-bold">
                                    {info?.phone ? info?.phone : "N/A"}
                                 </td>
                                 <td className="text-[15px] font-bold">
                                    {info?.address ? info?.address : "N/A"}
                                 </td>
                                 <td className="text-[15px] font-bold">
                                    {info?.price ? `$${info?.price}` : "N/A"}
                                 </td>
                                 <td className="text-[15px] font-bold">
                                    {info?.status ? `${info?.status}` : "N/A"}
                                 </td>
                                 <td className="text-[15px] font-bold">
                                    <button
                                       className="py-[3px] px-[20px] bg-black text-white rounded-[10px]"
                                       onClick={() => {
                                          handleUpdate(info._id);
                                       }}
                                    >
                                       Edit
                                    </button>
                                 </td>
                                 <td className="text-[15px] font-bold">
                                    <button
                                       className="py-[3px] px-[20px] bg-black text-white rounded-[10px]"
                                       onClick={() => handleDelete(info._id)}
                                    >
                                       Delete
                                    </button>
                                 </td>
                              </tr>
                           );
                        })}
                     </>
                  </table>
               </div>
            </div>
         </>
      </div>
   );
};

export default ManageAllOrders;
