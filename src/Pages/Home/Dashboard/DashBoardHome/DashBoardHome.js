import React from "react";
import { Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import api from "../../../../hooks/useAxios";
import {
   Area,
   AreaChart,
   CartesianGrid,
   Legend,
   Line,
   LineChart,
   Pie,
   PieChart,
   Tooltip,
   XAxis,
   YAxis,
} from "recharts";
import "./DashBoardHome.css";

const DashBoardHome = () => {
    const [details, setDetails] = useState([]);
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);

   const data = [
      {
         name: "Page A",
         uv: 4000,
         pv: 2400,
         amt: 2400,
      },
      {
         name: "Page B",
         uv: 3000,
         pv: 1398,
         amt: 2210,
      },
      {
         name: "Page C",
         uv: 2000,
         pv: 9800,
         amt: 2290,
      },
      {
         name: "Page D",
         uv: 2780,
         pv: 3908,
         amt: 2000,
      },
      {
         name: "Page E",
         uv: 1890,
         pv: 4800,
         amt: 2181,
      },
      {
         name: "Page F",
         uv: 2390,
         pv: 3800,
         amt: 2500,
      },
      {
         name: "Page G",
         uv: 3490,
         pv: 4300,
         amt: 2100,
      },
   ];

   const data01 = [
      { name: "Group A", value: 400 },
      { name: "Group B", value: 300 },
      { name: "Group C", value: 300 },
      { name: "Group D", value: 200 },
      { name: "Group E", value: 278 },
      { name: "Group F", value: 189 },
   ];

   const data02 = [
      { name: "Group A", value: 2400 },
      { name: "Group B", value: 4567 },
      { name: "Group C", value: 1398 },
      { name: "Group D", value: 9800 },
      { name: "Group E", value: 3908 },
      { name: "Group F", value: 4800 },
   ];
   /* Fetching Data From Backend */
   useEffect(() => {
     
      api.get("/users")
         .then((response) => {
            setDetails(response.data);
            
         })

         .catch((error) => {
            console.error("There was an error!", error);
         });

      api.get("/products")
         .then((response) => {
            setProducts(response.data);
         })

         .catch((error) => {
            console.error("There was an error!", error);
         });
         
      api.get("/orders")
         .then((response) => {
            setOrders(response.data);
         })

         .catch((error) => {
            console.error("There was an error!", error);
         });
   }, []);

   
   return (
      <div className="py-5 ">
         <Container>
            <div className="flex justify-content-around flex-wrap flex-grow-4 md:space-y-4 lg:space-y-0 sm:space-y-3 space-y-3 pb-[100px]">
               <div
                  className="card-info"
                  style={{
                     backgroundColor: "#dfece0",
                  }}
               >
                  <Col className="flex justify-content-center align-items-center py-5">
                     <h1 className="user-info text-black text-[25px] flex justify-content-center align-items-center flex-col">
                        TOTAL ORDERS
                        <h1 className="pt-2 ">{orders?.length}</h1>
                     </h1>
                  </Col>
               </div>
               <div
                  className="card-info"
                  style={{
                     backgroundColor: "#feeed7",
                  }}
               >
                  <Col className="flex justify-content-center align-items-center py-5">
                     <h1 className="user-info text-black text-[25px] flex justify-content-center align-items-center flex-col">
                        TOTAL PRODUCTS
                        <h1 className="pt-2 ">{products.length}</h1>
                     </h1>
                  </Col>
               </div>
               <div
                  className="card-info"
                  style={{
                     backgroundColor: "#e1eefa",
                  }}
               >
                  <Col className="flex justify-content-center align-items-center py-5">
                     <h1 className="user-info text-black text-[25px] flex justify-content-center align-items-center flex-col">
                        REVENUES
                        <h1 className="pt-2 ">$ 25,544,485,18</h1>
                     </h1>
                  </Col>
               </div>
            </div>
            <div
               className="pt-[100px] flex flex-wrap flex-grow-4 md:space-y-4 lg:space-y-0 sm:space-y-3 space-y-3"
               style={{
                  boxShadow: "10px 10px 70px gray",
                  padding: "50px",
                  borderRadius: "25px",
               }}
            >
               <div>
                  <AreaChart
                     width={380}
                     height={300}
                     data={data}
                     margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                     }}
                  >
                     <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey="name" />
                     <YAxis />
                     <Tooltip />
                     <Area
                        type="monotone"
                        dataKey="uv"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                     />
                     <Area
                        type="monotone"
                        dataKey="pv"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                     />
                     <Area
                        type="monotone"
                        dataKey="amt"
                        stackId="1"
                        stroke="#ffc658"
                        fill="#ffc658"
                     />
                  </AreaChart>
               </div>
               <div>
                  <LineChart
                     width={450}
                     height={330}
                     data={data}
                     margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                     }}
                  >
                     <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey="name" />
                     <YAxis yAxisId="left" />
                     <YAxis yAxisId="right" orientation="right" />
                     <Tooltip />
                     <Legend />
                     <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                     />
                     <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="uv"
                        stroke="#82ca9d"
                     />
                  </LineChart>
               </div>
               <div>
                  <PieChart width={330} height={300} className="pl-2">
                     <Pie
                        data={data01}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        outerRadius={90}
                        fill="#8884d8"
                     />
                     <Pie
                        data={data02}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={100}
                        outerRadius={120}
                        fill="#82ca9d"
                        label
                     />
                  </PieChart>
               </div>
            </div>
            <div className="py-[100px]">
               <div className="py-5 flex justify-content-center align-items-center ">
                  <h1 className="user-info text-decoration-underline">
                     USER INFORMATION
                  </h1>
               </div>
               <div className="table-container">
                  <table
                     className="responsive"
                     style={{ height: "calc(100%-164px)" }}
                  >
                     <tr style={{ backgroundColor: "#533483" }}>
                        <th className="text-white text-[1rem] pl-[30px] w-[300px]">
                           Name
                        </th>
                        <th className="text-white text-[1rem] w-[300px]">
                           Email
                        </th>
                        <th className="text-white text-[1rem] w-[300px]">
                           Role
                        </th>
                     </tr>
                     <>
                        {details?.map((info, index) => {
                           return (
                              <tr key={index}>
                                 <td className="text-[12px] font-bold pl-[30px] ">
                                    {info?.displayName}
                                 </td>
                                 <td className="text-[12px] font-bold">
                                    {info?.email}
                                 </td>
                                 <td className="text-[12px] font-bold">
                                    {info?.role ? info?.role : "N/A"}
                                 </td>
                              </tr>
                           );
                        })}
                     </>
                  </table>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default DashBoardHome;
