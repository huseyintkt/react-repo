import React, { Component } from 'react';  
import { Route } from 'react-router-dom';  
  
const SiteLayout = ({ children }) => (                         
      <div>  
        <h1>SITE NAVBAR</h1>  
        <div>{children}</div>  
        <h1>SITE FOOTER</h1> 
      </div>  
  );  
  
  const SiteLayoutRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={matchProps => (  
        <SiteLayout>  
            <Component {...matchProps} />  
        </SiteLayout>  
      )} />  
    )  
  };  
  
export default SiteLayoutRoute;