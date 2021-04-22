import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import {UserContext} from '../../App'
const PrivateRoute = ({ children, ...rest }) => {

    const [signedInUser, setSignInUser] = useContext(UserContext)

  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
        signedInUser.name ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;