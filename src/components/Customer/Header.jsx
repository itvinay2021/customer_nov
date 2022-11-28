import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import globe from '../../assets/globe.svg';
import Form from 'react-bootstrap/Form';
import userImg from '../../assets/user.svg';
import { AiOutlineSearch } from "react-icons/ai";
import { ImSwitch } from "react-icons/im";
import { TbShoppingCartPlus, TbFreeRights } from "react-icons/tb";
import { BsFileEarmarkFont } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";

import '../Stylesheet/Subheader.scss';
// import '../Stylesheet/Header.scss';

import { NavLink } from 'react-router-dom';


function head() {
  return (
    <>
      <Navbar bg="light" expand="xl" className='l_3navbar mainHeader'>
        <Container fluid className='justify-content-unset'>
          <div className='getstart'>
            <Button variant=" rounded-pill" size="md" className='btn_theame'>
              Getting started
            </Button>
          </div>
          <div to="#Order" eventKey="link-5.1">
            <span className='globe'>
              <img src={globe} alt="globe" />
            </span>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="pills" defaultActiveKey="/" className="ms-auto align">
              <Nav.Item className='searchInput'>
                <div className='userInput'>
                  <Form.Control placeholder="User Id" className='rounded-pill' />
                  <AiOutlineSearch className='search_head' />
                </div>
                <div className='userInput'>
                  <Form.Control placeholder="User Id" className='rounded-pill mx-1' />
                  <AiOutlineSearch className='search_head' />
                </div>
              </Nav.Item>
              <Nav.Item className='navMenu'>
                <NavLink to="/" eventKey="link-1.2" className='fw-bold'><TbShoppingCartPlus className='mx-2 menuIcon' /><span>New Order</span></NavLink>
                <NavLink to="/Create_order" eventKey="link-1.3" className='fw-bold'><BsFileEarmarkFont className='mx-2 menuIcon' /><span>Create Invoice</span></NavLink>
                <NavLink to="/" eventKey="link-1.4" className='fw-bold'><TbFreeRights className='mx-2 menuIcon' /> <span>POS</span></NavLink>
                <NavLink to="/" eventKey="link-1.5" className='fw-bold'><BiCalendar className='mx-2 menuIcon' /><span>Calender</span></NavLink>
              </Nav.Item>
              <Nav.Item className='userLogin'>
                <NavLink to="/Create_order" eventKey="link-1.6">
                  <div className='d-flex imguser me-3'>
                    <img src={userImg} alt="user" className='mx-3' />
                    <div>
                      <div className='fw-bold userName'>Robert Hawkins</div>
                      <span>Administrator</span>
                    </div>
                  </div>
                </NavLink>
                <div className='switchImg'>
                  <Nav.Link >
                    <ImSwitch className='switch' />
                  </Nav.Link>
                </div>
              </Nav.Item>
              <Nav.Item >
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default head;