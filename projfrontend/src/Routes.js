import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes"
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import Products from './admin/Products';
import ManageCategory from './admin/ManageCategory';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <PrivateRoute path= "/user/dashboard" exact component = {UserDashboard} />
        <AdminRoute path= "/admin/dashboard" exact component = {AdminDashBoard} />
        <Route path="/AddProduct"exact component={AddProduct}/>
        <Route path="/AddCategory"exact component={AddCategory}/>
        <Route path="/ManageCategory"exact component={ManageCategory}/>
        <Route path="/Products"exact component={Products}/>


      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
