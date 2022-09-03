import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import AuthProvider from "./contexts/AuthProvider";
import Login from "./Login/Login/Login";
import PrivateRoute from "./Login/PrivateRoute/PrivateRoute";
import Register from "./Login/Register/Register";
import Dashboard from "./Pages/Home/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import NewArrivals from "./Pages/Home/NewArrivals/NewArrivals";
import ProductDetail from "./Pages/Home/ProductDetail/ProductDetail";
import Footer from './Pages/Shared/Footer';


function App() {
   return (
      <div className="App">
         <AuthProvider>
            <Router>
               <Switch>
                  <PrivateRoute path="/dashboard">
                     
                     <Dashboard/>
                  </PrivateRoute>

                  <Route exact path="/home">
                     <Home></Home>
                  </Route>
                  <Route exact path="/new-arrivals">
                     <NewArrivals />
                  </Route>
                  <Route exact path="/product-detail/:id">
                     <ProductDetail />
                  </Route>
                  <PrivateRoute exact path="/vehicle/:Id"></PrivateRoute>
                  <Route exact path="/login">
                     <Login></Login>
                  </Route>
                  <Route exact path="/register">
                     <Register />
                  </Route>

                  <Route exact path="/register"></Route>
                  <Route exact path="/">
                     <Home />
                  </Route>
               </Switch>
               <Footer></Footer>
            </Router>
         </AuthProvider>
      </div>
   );
}

export default App;
