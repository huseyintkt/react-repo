import React, { Component } from 'react';  
import { Route } from 'react-router-dom';  
  
const AdminLayout = ({children, ...rest}) => {  
  return (  
    <div>  
      <h1>ADMIN NAVBAR</h1>  
      <div>{children}</div>  
      <h1>ADMIN FOOTER</h1> 
    </div>  
  )  
}  
  
const AdminLayoutRoute = ({component: Component, ...rest}) => {  
  return (  
    <Route {...rest} render={matchProps => (  
      <AdminLayout>  
          <Component {...matchProps} />  
      </AdminLayout>  
    )} />  
  )  
};  
  
export default AdminLayoutRoute; 