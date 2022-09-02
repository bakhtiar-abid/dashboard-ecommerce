import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
   MdAddCircleOutline,
   MdDashboard,
   MdLogout,
   MdModeEditOutline,
   MdOutlinePayment,
   MdOutlineReviews,
   MdPlaylistAdd,
   MdProductionQuantityLimits,
} from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import {
   NavLink,
   useHistory,
   useLocation,
   useRouteMatch,
} from "react-router-dom";

import { Route, Switch } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
// import Home from './../Home/Home';
import AddProduct from "./AddProduct/AddProduct";
import "./Dashboard.css";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import ManageAllOrders from "./ManageAllOrders/ManageAllOrders";

import AdminRoute from "./AdminRoute/AdminRoute";
import MakeEditor from "./MakeEditor/MakeEditor";
import ManageProduct from "./ManageProduct/ManageProduct";

import { SiManageiq } from "react-icons/si";
import DashBoardHome from "./DashBoardHome/DashBoardHome";
import EditorRoute from "./EditorRoute/EditorRoute";
import UserOrders from "./UserOrders/UserOrders";
import PrivateRoute from './../../../Login/PrivateRoute/PrivateRoute';

const Dashboard = () => {
   const { user, admin, editor, logout } = useAuth();
   let { path, url } = useRouteMatch();

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
                     {admin ? (
                        <h1 className="text-[30px]"> Admin </h1>
                     ) : (
                        <>
                           {editor ? (
                              <h1 className="text-[30px]"> Editor </h1>
                           ) : (
                              user?.displayName
                           )}
                        </>
                     )}
                  </h4>
                  <div className="px-[50px] py-[100px] my-5 space-y-5">
                     {admin ? (
                        <>
                           <MdDashboard className="d-inline-block text-white" />
                           <NavLink
                              className="text-white text-decoration-none my-5 pl-2"
                              to={`${path}`}
                           >
                              Dashboard
                           </NavLink>
                        </>
                     ) : (
                        <>
                           {editor ? (
                              <>
                                 <MdDashboard className="d-inline-block text-white" />
                                 <NavLink
                                    className="text-white text-decoration-none my-5 pl-2"
                                    to={`${path}`}
                                 >
                                    Dashboard
                                 </NavLink>
                              </>
                           ) : (
                              <>
                                 <MdProductionQuantityLimits className="d-inline-block text-white" />
                                 <NavLink
                                    className="text-white text-decoration-none my-5 pl-2"
                                    to={`${path}`}
                                 >
                                    My Order
                                 </NavLink>
                              </>
                           )}
                        </>
                     )}

                     {/* <br />
                      <br /> */}
                     {/* <NavLink
                         className="text-white text-decoration-none my-5"
                         to="/home"
                      >
                         Home
                      </NavLink> */}
                     <br />

                     {admin ? (
                        <>
                           <div>
                              <SiManageiq className="d-inline-block text-white" />
                              <NavLink
                                 className="text-white text-decoration-none my-5 pl-2"
                                 to={`${url}/manageAllOrders`}
                              >
                                 Manage Orders
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
                     ) : (
                        <>
                           {editor ? (
                              <>
                                 <div>
                                    <SiManageiq className="d-inline-block text-white" />
                                    <NavLink
                                       className="text-white text-decoration-none my-5 pl-2"
                                       to={`${url}/manageAllOrders`}
                                    >
                                       Manage Orders
                                    </NavLink>
                                 </div>
                                 {/* <div>
                                    <RiAdminFill className="d-inline-block text-white" />
                                    <NavLink
                                       className="text-white text-decoration-none my-5 pl-2"
                                       to={`${url}/makeAdmin`}
                                    >
                                       Make Admin
                                    </NavLink>
                                 </div> */}

                                 {/* <div>
                                    <MdModeEditOutline className="d-inline-block text-white"></MdModeEditOutline>
                                    <NavLink
                                       className="text-white text-decoration-none my-5 pl-2"
                                       to={`${url}/makeEditor`}
                                    >
                                       Make Editor
                                    </NavLink>
                                 </div> */}

                                 <div>
                                    <MdAddCircleOutline className="d-inline-block text-white" />
                                    <NavLink
                                       className="text-white text-decoration-none my-5 pl-2"
                                       to={`${url}/addProduct`}
                                    >
                                       Add Product
                                    </NavLink>
                                 </div>

                                 {/* <div>
                                    <MdProductionQuantityLimits className="d-inline-block text-white"></MdProductionQuantityLimits>
                                    <NavLink
                                       className="text-white text-decoration-none my-5 pl-2"
                                       to={`${url}/manageProduct`}
                                    >
                                       Manage Product
                                    </NavLink>
                                 </div> */}

                                 <br />
                                 <br />
                              </>
                           ) : (
                              <>
                                 <br />
                                 <div>
                                    <MdPlaylistAdd className="d-inline-block text-white" />
                                    <NavLink
                                       className="text-white text-decoration-none my-5 pl-2"
                                       to={`/new-arrivals`}
                                    >
                                       Order Now
                                    </NavLink>
                                 </div>

                                 <br />

                                 <div>
                                    <MdOutlinePayment className="d-inline-block text-white" />
                                    <NavLink
                                       className="text-white text-decoration-none my-5 pl-2"
                                       to={`${url}/myorders`}
                                    >
                                       Pay
                                    </NavLink>
                                 </div>

                                 <br />
                                 <div>
                                    <MdOutlineReviews className="d-inline-block text-white" />
                                    <NavLink
                                       className="text-white text-decoration-none my-5 pl-2"
                                       to={`${url}/review`}
                                    >
                                       Review
                                    </NavLink>
                                 </div>

                                 <br />
                                 <br />
                              </>
                           )}
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
                  {admin ? (
                     <div className="text-center  w-100 py-3 dashboard-navbar drop-shadow-xl">
                        <h5 className="fw-bold m-0 text-uppercase">
                           Dashboard
                        </h5>
                     </div>
                  ) : (
                     <>
                        {editor ? (
                           <div className="text-center  w-100 py-3 dashboard-navbar drop-shadow-xl">
                              <h5 className="fw-bold m-0 text-uppercase">
                                 Dashboard
                              </h5>
                           </div>
                        ) : (
                           <div className="text-center w-100 py-3 dashboard-navbar">
                              <h5 className="fw-bold m-0 text-uppercase">
                                 Your orders
                              </h5>
                           </div>
                        )}
                     </>
                  )}

                  <Switch>
                     {admin ? (
                        <>
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
                           <AdminRoute exact path={`${path}`}>
                              <DashBoardHome />
                           </AdminRoute>
                        </>
                     ) : (
                        <>
                           {editor ? (
                              <>
                                 {" "}
                                 <EditorRoute path={`${path}/manageAllOrders`}>
                                    <ManageAllOrders></ManageAllOrders>
                                 </EditorRoute>
                                 <EditorRoute exact path={`${path}`}>
                                    <DashBoardHome />
                                 </EditorRoute>
                                 <EditorRoute path={`${path}/addproduct`}>
                                    <AddProduct />
                                 </EditorRoute>
                              </>
                           ) : (
                              <>
                                 {user.email ? (
                                    <PrivateRoute exact path={`${path}`}>
                                       <UserOrders />
                                    </PrivateRoute>
                                 ) : (
                                    ""
                                 )}
                              </>
                           )}
                        </>
                     )}

                     <Route exact path={`${path}`}>
                        {admin ? <DashBoardHome /> : ""}
                     </Route>

                     <Route exact path={`${path}`}>
                        {editor ? <DashBoardHome /> : ""}
                     </Route>

                     <Route exact path={`${path}/pay`}></Route>

                     <Route exact path={`${path}/myorders`}>
                        <UserOrders />
                     </Route>
                     <Route exact path={`${path}/review`}></Route>
                  </Switch>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default Dashboard;
