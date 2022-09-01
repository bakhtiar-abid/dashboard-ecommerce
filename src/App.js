import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./Login/PrivateRoute/PrivateRoute";
import Navigation from "./Pages/Shared/Navigation";
import AuthProvider from "./contexts/AuthProvider";
import Home from './Pages/Home/Home/Home';
import NewArrivals from "./Pages/Home/NewArrivals/NewArrivals";
import Dashboard from "./Pages/Home/Dashboard/Dashboard";
import ProductDetail from "./Pages/Home/ProductDetail/ProductDetail";
import Login from "./Login/Login/Login";
import Register from "./Login/Register/Register";

function App() {
   return (
      <div className="App">
         <AuthProvider>
            <Router>
              
               <Switch>
                 
                  <PrivateRoute path="/dashboard"> <Dashboard/> </PrivateRoute>
                  <Route exact path="/home">
                     <Home></Home>
                  </Route>
                  <Route exact path="/new-arrivals">
                     <NewArrivals />
                  </Route>
                  <Route exact path="/product-detail/:id">
                     <ProductDetail/>
                  </Route>
                  <PrivateRoute exact path="/vehicle/:Id"></PrivateRoute>
                  <Route exact path="/login">
                     <Login></Login>
                  </Route>
                  <Route exact path="/register">
                     <Register/>
                  </Route>

                  <Route exact path="/register"></Route>
                  <Route exact path="/">
                     <Home />
                  </Route>
               </Switch>
               {/* <Footer></Footer> */}
            </Router>
         </AuthProvider>
      </div>
   );
}

export default App;
