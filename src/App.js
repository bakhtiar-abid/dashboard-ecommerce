import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Login/PrivateRoute/PrivateRoute";
import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home/Home/Home';


function App() {
  return (
     <div className="App">
        <AuthProvider>
           <Router>
              <Switch>
                 <Route exact path="/">
                    <Home />
                 </Route>
                 <Route path="/home">
                    <Home />
                 </Route>

                 <Route path="/login">{/* <Login></Login> */}</Route>

                 <PrivateRoute path="/myplans">
                    {/* <MyPlans></MyPlans> */}
                 </PrivateRoute>

                 <PrivateRoute path="/manageplans/">
                    {/* <ManagePlans></ManagePlans> */}
                 </PrivateRoute>
                 <PrivateRoute path="/addplan">
                    {/* <AddPlan></AddPlan> */}
                 </PrivateRoute>
                 <PrivateRoute path="/plan/:planId">
                    {/* <SinglePlanDetail></SinglePlanDetail> */}
                 </PrivateRoute>
                 <Route path="*">{/* <NotFound></NotFound> */}</Route>
              </Switch>
              {/* <Footer></Footer> */}
           </Router>
        </AuthProvider>
     </div>
  );
}

export default App;
