import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import '../Stylesheet/Customer_nav.scss';
import { NavLink } from 'react-router-dom';



const Inventory_tab = () => {
  return (
     <Navbar className="TabNav ">
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <NavLink to="/Product_details" eventKey="link-4.0">Product Details</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/Advanced" eventKey="link-4.1">Advanced</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/Shipping" eventKey="link-4.2">Shipping</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/Supplier" eventKey="link-4.3" >Supplier</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/Log" eventKey="link-4.4">Log</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/Trial" eventKey="link-4.5">Trial</NavLink>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default Inventory_tab;
