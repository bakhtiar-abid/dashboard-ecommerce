import React from "react";
import { Route, Redirect } from "react-router-dom";

import { Spinner } from "react-bootstrap";
import useAuth from "../../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
   const { user, admin, isLoading } = useAuth();
   if (isLoading) {
      return (
         <div className="text-center">
            {" "}
            <Spinner animation="border" variant="danger" />
         </div>
      );
   }
   return (
      <Route
         {...rest}
         render={({ location }) =>
            user.email && admin ? (
               children
            ) : (
               <Redirect
                  to={{
                     pathname: "/",
                     state: { from: location },
                  }}
               />
            )
         }
      />
   );
};

export default AdminRoute;
