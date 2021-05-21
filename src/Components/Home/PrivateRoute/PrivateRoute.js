import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const [loggedInUser , setLoggedInUser] = useContext(userContext);
    console.log(loggedInUser.uId);

    return (
        <Route
            {...rest}
            render={({ location }) =>
            loggedInUser.uId ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/user/signup",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;