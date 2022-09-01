import React from "react";
import { Col, Container } from "react-bootstrap";
import {
   AreaChart,
   Area,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   LineChart,
   Line,
   Legend,
   Pie,
   PieChart,
   ResponsiveContainer,
} from "recharts";
import "./DashBoardHome.css";

const DashBoardHome = () => {
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
   return (
      <div className="py-5">
         <Container>
            <div className="flex  justify-content-around flex-wrap flex-grow-4 md:space-y-4 lg:space-y-0 sm:space-y-3 space-y-3">
               <div
                  className="card-info"
                  style={{
                     backgroundColor: "#dfece0",
                  }}
               >
                  <Col className="flex justify-content-center align-items-center py-5">
                     <h1 className="font-extrabold text-black text-[25px]">
                        TOTAL ORDERS
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
                     <h1 className="font-extrabold text-black text-[25px]">
                        TOTAL USERS
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
                     <h1 className="font-extrabold text-black text-[25px] flex justify-content-center align-items-center flex-col">
                        REVENUES
                        <h1 className="py-5 ">$ 25,54448518</h1>
                     </h1>
                  </Col>
               </div>
            </div>

            <div className="pt-[100px] flex">
               <div>
                  <AreaChart
                     width={480}
                     height={400}
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
                     width={500}
                     height={430}
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
                  <PieChart width={400} height={400}>
                     <Pie
                        data={data01}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        outerRadius={200}
                        fill="#8884d8"
                     />
                     <Pie
                        data={data02}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={100}
                        outerRadius={150}
                        fill="#82ca9d"
                        label
                     />
                  </PieChart>
               </div>
               <div className="py-5">
                     
               </div>
            </div>
         </Container>
      </div>
   );
};

export default DashBoardHome;
