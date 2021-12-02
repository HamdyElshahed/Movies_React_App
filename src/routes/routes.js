// @flow
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component : Component , ...rest}) => {
  let isLoggedin = false;
  return (
    <Route {...rest} render={props=>(
      isLoggedin ? <Component {...props}/>
      : <Redirect to="/login" />
    )} />
  );
};

export default PrivateRoute;