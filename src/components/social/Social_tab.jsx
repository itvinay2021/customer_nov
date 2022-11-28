import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import '../Stylesheet/Customer_nav.scss';
import '../Stylesheet/Social_tab.scss';
import { NavLink, Link } from 'react-router-dom';
import { RiRefreshLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import Button from 'react-bootstrap/Button';



const Social_tab = () => {
    return (
        <>
            <Navbar className="TabNav mb- ">
                <Nav variant="pills">
                    <Nav.Item>
                        <NavLink to="/Social_Comment" eventKey="link-2.0">Comments</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/Social_PostScheduled" eventKey="link-2.1">Post & Scheduled</NavLink>
                    </Nav.Item>
                </Nav>
                <div className="ms-auto d-flex syncBtn">
                        <Button as={Link} to="/Social_newBTN"><GoPlus className="me-2" />New</Button>
                        <Button as={Link} to="/Social_newBTN" className="ms-2"><RiRefreshLine className="me-2" /> Text Goes Here </Button>
                </div>
            </Navbar>
        </>
    );
}
export default Social_tab;
