import React, { Component } from 'react';  
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  

/** Layouts **/  
import SiteLayout from "./layouts/SiteLayout";  
import AdminLayout from "./layouts/AdminLayout"; 

/** Components **/  
import Home from './components/site/Home';  
import About from './components/site/About';  
import Contact from './components/site/Contact';  
import Dashboard from './components/admin/Dashboard' 
import Report from './components/admin/Report' 

class App extends Component {  
  render() {  
    return (  
      <Router>  
        <Switch>  
          {/* <Route exact path="/">  
            <Redirect to="/" />  
          </Route>   */}
         
          <AdminLayout path="/admin/report" component={Report} /> 
          <AdminLayout path="/admin" component={Dashboard} />  
          <SiteLayout path="/about" component={About} />  
          <SiteLayout path="/contact" component={Contact} />  
          <SiteLayout path="/" component={Home} />  
        </Switch>  
      </Router>  
    );  
  }  
}  
  
export default App;