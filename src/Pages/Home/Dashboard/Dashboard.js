import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { MdAddCircleOutline, MdDashboard, MdLogout, MdModeEditOutline, MdProductionQuantityLimits} from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";

import useAuth from './../../../hooks/useAuth';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
// import Home from './../Home/Home';
import "./Dashboard.css"
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddProduct from './AddProduct/AddProduct';

import MakeEditor from './MakeEditor/MakeEditor';
import AdminRoute from './AdminRoute/AdminRoute';
import ManageProduct from './ManageProduct/ManageProduct';

import { SiManageiq } from 'react-icons/si';
import DashBoardHome from './DashBoardHome/DashBoardHome';


const Dashboard = () => {
      const { user, admin, logout } = useAuth();
      let {  path, url } = useRouteMatch();

      const location = useLocation();
      const history = useHistory();

      const LogOut = () => {
         logout(location, history);
      };

    return (
       <div style={{ backgroundColor: "#f8f9fa" }}>
          <Container fluid>
             <Row>
                <Col className="offcanvus-container p-2" xs={3} md={2}>
                   <h4 className="text-white text-center my-2 text-capitalize">
                      {user?.displayName}
                   </h4>
                   <div className="px-[50px] py-[100px] my-5 space-y-5">
                      <MdDashboard className="d-inline-block text-white" />
                      <NavLink
                         className="text-white text-decoration-none my-5 pl-2"
                         to={`${url}/dashboardHome`}
                      >
                         Dashboard
                      </NavLink>
                      {/* <br />
                      <br /> */}
                      {/* <NavLink
                         className="text-white text-decoration-none my-5"
                         to="/home"
                      >
                         Home
                      </NavLink> */}
                      <br />

                      {!admin ? (
                         <>
                            <NavLink
                               className="text-white text-decoration-none my-5"
                               to={`${url}`}
                            >
                               My Order
                            </NavLink>
                            <br />
                            <br />
                            <NavLink
                               className="text-white text-decoration-none my-5"
                               to={`${url}/payment`}
                            >
                               Pay
                            </NavLink>
                            <br />
                            <br />
                            <NavLink
                               className="text-white text-decoration-none my-5"
                               to={`${url}/review`}
                            >
                               Review
                            </NavLink>
                            <br />
                            <br />
                         </>
                      ) : (
                         <>
                            <div>
                               <SiManageiq className="d-inline-block text-white" />
                               <NavLink
                                  className="text-white text-decoration-none my-5 pl-2"
                                  to={`${url}/manageAllOrders`}
                               >
                                  Manage All Orders
                               </NavLink>
                            </div>
                            <div>
                               <RiAdminFill className="d-inline-block text-white" />
                               <NavLink
                                  className="text-white text-decoration-none my-5 pl-2"
                                  to={`${url}/makeAdmin`}
                               >
                                  Make Admin
                               </NavLink>
                            </div>

                            <div>
                               <MdModeEditOutline className="d-inline-block text-white"></MdModeEditOutline>
                               <NavLink
                                  className="text-white text-decoration-none my-5 pl-2"
                                  to={`${url}/makeEditor`}
                               >
                                  Make Editor
                               </NavLink>
                            </div>

                            <div>
                               <MdAddCircleOutline className="d-inline-block text-white" />
                               <NavLink
                                  className="text-white text-decoration-none my-5 pl-2"
                                  to={`${url}/addProduct`}
                               >
                                  Add Product
                               </NavLink>
                            </div>

                            <div>
                               <MdProductionQuantityLimits className="d-inline-block text-white"></MdProductionQuantityLimits>
                               <NavLink
                                  className="text-white text-decoration-none my-5 pl-2"
                                  to={`${url}/manageProduct`}
                               >
                                  Manage Product
                               </NavLink>
                            </div>

                            <br />
                            <br />
                         </>
                      )}
                      <div>
                         <MdLogout className="d-inline-block text-white"></MdLogout>
                         <button
                            onClick={LogOut}
                            className="border-0 bg-transparent text-white pl-2"
                         >
                            Logout
                         </button>
                      </div>
                   </div>
                </Col>
                <Col className="m-0 p-0" xs={9} md={10}>
                   {!admin ? (
                      <div className="text-center w-100 py-3 dashboard-navbar">
                         <h5 className="fw-bold m-0 text-uppercase">
                            Your orders
                         </h5>
                      </div>
                   ) : (
                      <div className="text-center w-100 py-3 dashboard-navbar drop-shadow-xl">
                         <h5 className="fw-bold m-0 text-uppercase">
                            Dashboard
                         </h5>
                      </div>
                   )}

                   <Switch>
                      <AdminRoute path={`${path}/manageAllOrders`}>
                         <ManageAllOrders></ManageAllOrders>
                      </AdminRoute>
                      <AdminRoute path={`${path}/addproduct`}>
                         <AddProduct />
                      </AdminRoute>
                      <AdminRoute path={`${path}/makeAdmin`}>
                         <MakeAdmin></MakeAdmin>
                      </AdminRoute>
                      <AdminRoute path={`${path}/makeEditor`}>
                         <MakeEditor></MakeEditor>
                      </AdminRoute>
                      <AdminRoute path={`${path}/manageProduct`}>
                         <ManageProduct />
                      </AdminRoute>

                      <Route exact path={`${path}/dashboardHome`}>
                         {/* {admin ? (
                           <DashBoardHome/>
                           
                         ) : (
                            
                              //  <DashboardHomeUser></DashboardHomeUser>
                              ""
                            
                         )} */}
                         <DashBoardHome />
                      </Route>

                      <Route exact path={`${path}/pay`}></Route>
                      {/* <Route exact path={`${path}/dashboardHome`}>
                         <DashBoardHome />
                      </Route> */}
                      <Route exact path={`${path}/myorders`}></Route>
                      <Route exact path={`${path}/review`}></Route>
                      <AdminRoute path={`${path}/makeAdmin`}>
                         <MakeAdmin></MakeAdmin>
                      </AdminRoute>
                   </Switch>
                </Col>
             </Row>
          </Container>
       </div>
    );
};

export default Dashboard;


