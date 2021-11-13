import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { selectAuthenticatedUser } from './selectors';


const PrivateRoute = ({ children, ...rest }) => {
const authUser = useSelector(selectAuthenticatedUser);
return (
    <Route
        {...rest}
        render={({location })=> 
        authUser ? (
        children
        ):
        (
            <Redirect
                to={{
                    pathname: "/login",
                    state: {from: location}
                }}
            />
        )
        }
    />
) 


}


export default PrivateRoute;