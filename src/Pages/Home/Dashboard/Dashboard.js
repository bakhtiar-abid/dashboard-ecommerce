import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './../Home/Home';
import "./Dashboard.css"
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddProduct from './AddProduct/AddProduct';
import ManageProduct from './ManageProduct/ManageProduct';
import MakeEditor from './MakeEditor/MakeEditor';

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
                      <NavLink
                         className="text-white text-decoration-none my-5"
                         to="/home"
                      >
                         Home
                      </NavLink>
                      <br />
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
                            <NavLink
                               className="text-white text-decoration-none my-5"
                               to={`${url}/manageAllOrder`}
                            >
                               Manage All Orders
                            </NavLink>
                            <br />
                            <br />
                            <NavLink
                               className="text-white text-decoration-none my-5"
                               to={`${url}/makeAdmin`}
                            >
                               Make Admin
                            </NavLink>
                            <br />
                            <br />
                            <NavLink
                               className="text-white text-decoration-none my-5"
                               to={`${url}/makeEditor`}
                            >
                               Make Editor
                            </NavLink>
                            <br />
                            <br />
                            <NavLink
                               className="text-white text-decoration-none my-5"
                               to={`${url}/addProduct`}
                            >
                               Add Product
                            </NavLink>
                            <br />
                            <br />
                            <NavLink
                               className="text-white text-decoration-none my-5"
                               to={`${url}/manageProduct`}
                            >
                               Manage Product
                            </NavLink>
                            <br />
                            <br />
                         </>
                      )}
                      <button
                         onClick={LogOut}
                         className="border-0 bg-transparent text-white"
                      >
                         Logout
                      </button>
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
                      <Route path="/home">
                         <Home />
                      </Route>
                      <Route exact path={path}>
                         {/* {admin ? <ManageAllOrder /> : <Order />} */}
                      </Route>
                      <Route path={`${path}/payment`}>
                         {/* <Payment /> */}
                      </Route>
                      <Route path={`${path}/review`}>{/* <Review /> */}</Route>
                      <Route path={`${path}/manageAllOrder`}>
                         <ManageAllOrders />
                      </Route>
                      <Route path={`${path}/makeAdmin`}>
                         {<MakeAdmin />}
                      </Route>
                      <Route path={`${path}/makeEditor`}>
                         {<MakeEditor/>}
                      </Route>
                      <Route path={`${path}/addProduct`}>
                         {<AddProduct />}
                      </Route>
                      <Route path={`${path}/manageProduct`}>
                         {<ManageProduct />}
                      </Route>
                   </Switch>
                </Col>
             </Row>
          </Container>
       </div>
    );
};

export default Dashboard;


