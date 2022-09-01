import React from "react";
import { Route, Redirect } from "react-router-dom";

import { Spinner } from "react-bootstrap";
import useAuth from "../../../../hooks/useAuth";

const EditorRoute = ({ children, ...rest }) => {
   const { user, editor, isLoading } = useAuth();
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
            user.email && editor ? (
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

export default EditorRoute;
