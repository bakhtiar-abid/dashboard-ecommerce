import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./Login/PrivateRoute/PrivateRoute";
import Navigation from "./Pages/Shared/Navigation";
import AuthProvider from "./contexts/AuthProvider";
import Home from './Pages/Home/Home/Home';
import NewArrivals from "./Pages/Home/NewArrivals/NewArrivals";

function App() {
   return (
      <div className="App">
         <AuthProvider>
            <Router>
               <Navigation />
               <Switch>
                  {/* <PrivateRoute path="/appointment">
                     <Appointment />
                  </PrivateRoute> */}
                  <PrivateRoute path="/dashboard"></PrivateRoute>
                  <Route exact path="/home">
                     <Home></Home>
                  </Route>
                  <Route exact path="/new-arrivals">
                     <NewArrivals/>
                  </Route>
                  <PrivateRoute exact path="/vehicle/:Id"></PrivateRoute>
                  <Route exact path="/login"></Route>

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
