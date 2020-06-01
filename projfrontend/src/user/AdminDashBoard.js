import React from "react";
import  Base from "../core/Base";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Addcategory from "../admin/AddCategory"
import Products from '../admin/Products'
import ManageCategory from '../admin/ManageCategory'

const AdminDashBoard = ( ) => {
 return (
   <Base title="AdminDashboard page">
 <div className="container" style={{ marginLeft:"auto",marginRight:"auto",background:"blue",color:"black" }}>
      <div >
        <div className="row" >
          <div className="col-sm-3">
            <Card className="dv" style={{marginTop:"20px", marginBottom:"20px"}}>
              <Card.Header style={{fontSize:"20px"}}><b>Admin Navigation</b></Card.Header>

              <ListGroup variant="flush">
                <ListGroup.Item>
                <Link  to="/AddCategory">Add Category</Link>

                </ListGroup.Item>
                <ListGroup.Item>
                <Link to="/
                ManageCategory">Manage Categories</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/
                AddProduct">Create Product</Link></ListGroup.Item>
                <ListGroup.Item><Link to="Products">Manage Product</Link></ListGroup.Item>
                <ListGroup.Item>Manage Order</ListGroup.Item>

              </ListGroup>
            </Card>
          </div>
          <div className="col-sm-9">
            <Card className="dv" style={{marginTop:"20px" , marginBottom:"20px"}}>
              <Card.Header style={{fontSize:"20px"}}><b>Admin Navigation</b></Card.Header>

              <ListGroup variant="flush">
                <ListGroup.Item>Name :-Lavina Vaishnav</ListGroup.Item>
                <ListGroup.Item>Email:-lavina@gmail.com</ListGroup.Item>
                <ListGroup.Item><button>Admin Area</button></ListGroup.Item>

              </ListGroup>
            </Card>
          </div>
        </div>
      </div>
      </div>   </Base>
 );
};

export default AdminDashBoard;