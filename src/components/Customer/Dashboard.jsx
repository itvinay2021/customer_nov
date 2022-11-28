import '../Stylesheet/Responsive.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Form } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Container } from "react-bootstrap";
import { ImSwitch } from "react-icons/im";
import Accordion from 'react-bootstrap/Accordion';
import Subheader from "./Subheader";
import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaCheck, FaRegMoneyBillAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Table from 'react-bootstrap/Table';
import { MdOutlineGeneratingTokens, MdOutlineDisabledByDefault, MdAlternateEmail } from "react-icons/md";
import { BiCommentEdit, BiPurchaseTag } from "react-icons/bi";
import { RiDeleteBin2Line, RiUserVoiceLine } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";
import { TiArrowBack } from "react-icons/ti";
import { HiOutlineTicket } from "react-icons/hi";
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <>
      <Container fluid className="p-4">
        <Subheader />
        <Row className="">
          <div className="col-lg-12 col-md-12 col-xl-3 col-xxl-3 col-sm-12">
            <div className="p-4 bg_col mt-4">
              <Row className="g-4">
                <div className="col-md-12 ">
                  <Card className='border-0'>
                    <div className='d-flex imguser bg_card'>
                    <div className="icon_bg">
                        <AiOutlineShoppingCart/>
                      </div>
                      <div>
                      <Link to="/Auth_capture" className='text-decoration-none'> <div className='fw-bold font-18 r_font-16 gray '>588/$179,979.06</div></Link>
                        
                        <span >Orders</span>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="col-md-12 ">
                  <Card className='border-0'>
                    <div className='d-flex imguser bg_card'>
                    <div className="icon_bg">
                        <BiCommentEdit/>
                      </div>
                      <div>
                      <Link to="/Note" className='text-decoration-none'><div className='fw-bold font-18 gray r_font-16'>1252</div></Link>
                        <span>Notes</span>

                      </div>
                    </div>
                  </Card>
                </div>
                <div className="col-md-12 ">
                  <Card className='border-0'>
                    <div className='d-flex imguser bg_card'>
                    <div className="icon_bg">
                        <TbFileInvoice/>
                      </div>
                      <div>
                      <Link to="/Invoice" className='text-decoration-none'><div className='fw-bold font-18 gray r_font-16'>11</div></Link>
                        
                        <span>Open Invoices</span>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="col-md-12 ">
                  <Card className='border-0'>
                    <div className='d-flex imguser bg_card'>
                    <div className="icon_bg">
                        <MdAlternateEmail/>
                      </div>
                      <div>
                      <Link to="/Note" className='text-decoration-none'><div className='fw-bold font-18 gray r_font-16'>78/6</div></Link>
                        
                        <span>Emails Sent</span>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="col-md-12 ">
                  <Card className='border-0'>
                    <div className='d-flex imguser bg_card'>
                    <div className="icon_bg">
                        <FaRegMoneyBillAlt/>
                      </div>
                      <div>
                      <Link to="/Note" className='text-decoration-none'><div className='fw-bold font-18 gray r_font-16'>0.00</div></Link>
                        <span>Loyalty Balance</span>
                      </div>
                    </div>
                  </Card>
                </div>

              </Row>
            </div>
            <div className="p-4 bg_col bg_col_mt-5">
              <div class="timeline block mb-4">
                <h3>Order Timeline</h3>
                <div class="tl-item active">
                  <div class="tl-dot b-gray ">
                    <div className="tl_text">Today</div>
                  </div>

                </div>
                <div class="tl-item active">
                  <div class="tl-dot b-danger"><ImSwitch className="iconT_line" /></div>
                  <div class="tl-content">
                    <div class="">Order 22870 Refunded</div>
                    <div class="tl-date text-muted mt-1">08/04/2022</div>
                  </div>
                </div>
                <div class="tl-item active">
                  <div class="tl-dot b-primary"><ImSwitch className="iconT_line" /></div>
                  <div class="tl-content">
                    <div class="">Invoice 123456 Created</div>
                    <div class="tl-date text-muted mt-1">08/04/2022</div>
                  </div>
                </div>
                <div class="tl-item active">
                  <div class="tl-dot b-success"><ImSwitch className="iconT_line" /></div>
                  <div class="tl-content">
                    <div class="">Invoice 22870 Paid</div>
                    <div class="tl-date text-muted mt-1">08/04/2022</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className=" col-lg-12 col-md-12 col-xl-7 col-xxl-7 col-sm-12">
            <div className="p-4 bg_col mt-4">
              {/* <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 7 }).map((_, idx) => (
                  <div className="col-md-12 col-lg-3 ">
                    <Card style={{}} id={idx} className='mb-2 border-0 user_detail border_05'>
                      <div className="bg_card_side">
                        <div className='fw-bold font-18'>588/$179,979.06</div>
                        <span className="gray font-18">Orders</span>
                      </div>
                    </Card>
                  </div>
                ))}
              </Row> */}
              <Row className="g-4">
                <div className="col-lg-6 col-md-12 col-xl-4 col-xxl-4">
                  <Card className='border-0'>
                    <div className='d-flex imguser bg_card red_light'>
                     
                      <div>
                        <div className='fw-bold font-18 gray r_font-16'>User ID</div>
                        <span className='cursor' ref={target} onClick={() => setShow(!show)}>71376316</span>
                        <Overlay target={target.current} show={show} placement="top">
                          {(props) => (
                            <Tooltip id="overlay-example" {...props} className="tooltip_Tab">
                              <div className='p-3'>
                                <Form.Control placeholder="Address" />
                                <button className="btn_cancel mt-3"><FaCheck /></button>
                                <button className="btn_save ms-2 mt-3"><ImCross /></button>
                              </div>
                            </Tooltip>
                          )}
                        </Overlay>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="col-lg-6 col-md-12 col-xl-4 col-xxl-4 ">
                  <Card className='border-0'>
                    <div className='d-flex imguser bg_card green_light'>
                      <div>
                        <div className='fw-bold font-18 gray r_font-16'>Owner</div>
                        <span>nikesh hiecor</span>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="col-lg-6 col-md-12 col-xl-4 col-xxl-4 ">
                  <Card className='border-0'>
                    <div className='d-flex imguser bg_card pink_light'>
                      
                      <div>
                        <div className='fw-bold font-18 gray r_font-16'>Custom Tax</div>
                        <span>Country-Wide Tax</span>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="col-lg-6 col-md-12 col-xl-4 col-xxl-4 ">
                  <Card className='border-0'>
                    <div className='d-flex imguser bg_card grey_light'>
                      
                      <div>
                        <div className='fw-bold font-18 gray r_font-16'>Customer Status</div>
                        <span>PROPERTY OWNER</span>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="col-lg-6 col-md-12 col-xl-4 col-xxl-4 ">
                  <Card className='border-0'>
                    <div className='d-flex imguser bg_card gama_green_light'>
                      
                      <div>
                        <div className='fw-bold font-18 gray r_font-16'>Coupon Code</div>
                        <span>Select</span>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="col-lg-6 col-md-12 col-xl-4 col-xxl-4 ">
                  <Card className='border-0'>
                    <div className='d-flex imguser bg_card purpal_light'>
                      
                      <div>
                        <div className='fw-bold font-18 gray r_font-16'>Customer Tags</div>
                        <span>Select</span>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="col-lg-6 col-md-12 col-xl-4 col-xxl-4">
                  <Card className='mb-2 border-0'>
                    <div className='d-flex imguser bg_card red_light_20'>
                      
                      <div>
                        <div className='fw-bold font-18 gray r_font-16'>Customer Type</div>
                        <span>Individual</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </Row>
            </div>

            <div className="p-4 bg_col bg_col_mt-5">
              <div class="timeline block mb-4">
                <div className="">
                  <span className="head_text">Customer Details</span>
                  <div className="float-end mb-2">
                    <button className="btn_cancel ">Cancel</button>
                    <button className="btn_save ms-2 ">Save</button>
                  </div>
                </div>

                <div className="mt-4">
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Demographics </Accordion.Header>
                      <Accordion.Body>
                        <Form>

                          <Row className="">
                            <div className="col-md-6 col-sm-12">
                              <Form.Control placeholder="First name" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <Form.Control placeholder="Last name" className='r_mt-4'/>
                            </div>
                          </Row>

                          <Row className="mt-4">
                            <div className="col-md-6 col-sm-12">
                              <Form.Control placeholder="Phone No." />
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <Form.Control placeholder="Fax No." className='r_mt-4'/>
                            </div>
                          </Row>

                          <Row className="mt-4">
                            <div className="col-md-6 col-sm-12">
                              <Form.Control placeholder="Email Id" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <Form.Control placeholder="Company" className='r_mt-4'/>
                            </div>
                          </Row>

                          <Row className="mt-4">
                            <div className="col-md-6 col-sm-12">
                              <Form.Control placeholder="Title" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <Form.Control placeholder="Contact Source" className='r_mt-4'/>
                            </div>
                          </Row>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Shiping & Billing Address</Accordion.Header>
                      <Accordion.Body>
                        <Form>

                          <Row className="">
                            <div className="col-md-6 col-sm-12">
                              <Form.Control placeholder="Billing Address" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <Form.Control placeholder="Billing Address 2" className='r_mt-4'/>
                            </div>
                          </Row>

                          <Row className="mt-4">
                            <div className="col-md-6 col-sm-12">
                              <Form.Control placeholder="Billing city"/>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <Form.Select aria-label="Default select example" className="select_color r_mt-4">
                                <option>Select State</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </div>
                          </Row>

                          <Row className="mt-4">
                            <div className="col-md-6 col-sm-12">
                              <Form.Control placeholder="Billing Zip" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <Form.Select aria-label="Default select example" className="select_color r_mt-4">
                                <option>United State</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </div>
                          </Row>

                          <Row className="my-4">
                            <div className="col-md-6 col-sm-12">
                              <Form.Check inline label="Shipping Same as Billing" />
                              <Form.Check label="Opt-Out" />
                              <Form.Check inline label="Update Shipping Address on Specific Order" />
                            </div>
                          </Row>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>QuickBooks Mapping</Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          <Row className="">
                            <div className="col-md-12 col-sm-12">
                              <Form.Control placeholder="First name" />
                            </div>
                          </Row>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Custom</Accordion.Header>
                      <Accordion.Body>
                        <Form>

                          <Row className="">
                            <div className="col-md-6 col-sm-12">
                              <Form.Label>Name</Form.Label>
                              <Form.Control placeholder="First name" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <Form.Label className='r_mt-4'>Second Phone11</Form.Label>
                              <Form.Control placeholder="Last name" />
                            </div>
                          </Row>

                          <Row className="mt-4">
                            <div className="col-md-6 col-sm-12">
                              <Form.Label>Gender</Form.Label>
                              <Form.Control placeholder="Phone No." />
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <Form.Label className='r_mt-4'>Additional Number</Form.Label>
                              <Form.Control placeholder="Fax No." />
                            </div>
                          </Row>

                          <Row className="mt-4">
                            <div className="col-md-6 col-sm-12">
                              <Form.Label>Custom Text 2</Form.Label>
                              <Form.Control placeholder="Email Id" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <Form.Label className='r_mt-4'>Contact Type</Form.Label>
                              <Form.Control placeholder="Company" />
                            </div>
                          </Row>

                          <Row className="mt-4">
                            <div className="col-md-6 col-sm-12">
                              <Form.Label>Social Media</Form.Label>
                              <Form.Control placeholder="Title" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <Form.Label className='r_mt-4'>Office Phone</Form.Label>
                              <Form.Control placeholder="Contact Source" />
                            </div>
                          </Row>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Payment Info</Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          <Row className="">
                            <div className="col-md-12 col-sm-12">
                              <div className='card_detail'>
                                <Table responsive>
                                  <thead>
                                    <tr>
                                      <th>Items</th>
                                      <th className='text-center'>Price</th>
                                      <th className='text-end'>QTY</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>541333******4111 <MdOutlineGeneratingTokens className='font-18' /></td>
                                      <td className='text-center'>12/2025</td>
                                      <td >
                                        <div className='float-end'>
                                        <span className='text-center d-flex'>
                                        <a className="btn_default cursor">
                                            <MdOutlineDisabledByDefault className='font-18' />
                                            <p>Default</p>
                                          </a>
                                          <a className="btn_edit cursor ms-3">
                                            <BiCommentEdit className='font-18' />
                                            <p>Edit</p>
                                          </a>
                                          <a className="btn_delete cursor ms-3">
                                            <RiDeleteBin2Line className='font-18' />
                                            <p>Delete</p>
                                          </a>
                                        </span>
                                        </div>
                                      </td>
                                      {/* <td className='text-end'>
                                        <button className="btn_edit"><BiCommentEdit className='me-2 mb-1'/>Edit</button>
                                        <button className="btn_delete ms-2"><RiDeleteBin2Line className='me-2 mb-1'/>Delete</button>
                                        <button className="btn_default ms-2"><MdOutlineDisabledByDefault className='me-2 mb-1'/>Default</button>
                                      </td> */}

                                    </tr>
                                  </tbody>
                                </Table>
                              </div>
                            </div>
                          </Row>
                          <Row className="my-3">

                            <Col md={4}>
                              <Form.Control placeholder="Card Number" />
                            </Col>
                            <Col>
                                <Form.Select aria-label="Default select example" className="select_color r_mt-4">
                                  <option>Exp Month</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col>
                              <Form.Select aria-label="Default select example" className="select_color r_mt-4">
                                <option>Exp Year</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Col>
                            <Col>
                              <div className="float-end r_mt-4">
                                <button className="btn_save ms-2 ">Save</button>
                              </div>
                            </Col>
                          </Row>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-xl-2 col-xxl-2 col-sm-12">
            <div className="mt-4">
              {/* <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <div className="col-md-12">
                    <Card style={{}} id={idx} className='mb-2 border-0 side_list'>
                      <div className=' bg_card_side text-center'>
                        <div className="font-30 txt_color">
                          <AiOutlineShoppingCart className="text-white"></AiOutlineShoppingCart>
                        </div>
                        <h5>Order</h5>
                      </div>
                    </Card>
                  </div>
                ))}
              </Row> */}
              <Row>
                  <div className="col-md-12">
                  <Link to="/Create_invoice" className='text-decoration-none'>
                    <Card className='mb-4 border-0 side_list1'>
                      <div className=' bg_card_side text-center'>
                        <div className="font-30 txt_color">
                          <TbFileInvoice className="text-white"/>
                        </div>
                        <span className='font-17'>Create Invoice</span>
                      </div>
                    </Card>
                    </Link>
                  </div>

                  <div className="col-md-12">
                  <Link to="/Create_invoice" className='text-decoration-none'>
                    <Card className='mb-4 border-0 side_list2 '>
                      <div className=' bg_card_side text-center'>
                        <div className="font-30 txt_color">
                          <RiUserVoiceLine className="text-white"/>
                        </div>
                        <span className='font-17'>Contact Customer</span>
                      </div>
                    </Card>
                    </Link>
                  </div>

                  <div className="col-md-12">
                  <Link to="/Create_invoice" className='text-decoration-none'>
                    <Card className='mb-4 border-0 side_list3'>
                      <div className=' bg_card_side text-center'>
                        <div className="font-30 txt_color">
                          <TiArrowBack className="text-white"/>
                        </div>
                        <span className='font-17'>Chargeback/Fraud</span>
                      </div>
                    </Card>
                    </Link>
                  </div>

                  <div className="col-md-12">
                  <Link to="/Create_invoice" className='text-decoration-none'>
                    <Card className='mb-4 border-0 side_list4'>
                      <div className=' bg_card_side text-center'>
                        <div className="font-30 txt_color">
                          <HiOutlineTicket className="text-white"/>
                        </div>
                        <span className='font-17'> Ticket </span>
                      </div>
                    </Card>
                    </Link>
                  </div>

                  <div className="col-md-12">
                  <Link to="/Create_invoice" className='text-decoration-none'>
                    <Card className='mb-4 border-0 side_list5'>
                      <div className=' bg_card_side text-center'>
                        <div className="font-30 txt_color">
                          <BiPurchaseTag className="text-white"/>
                        </div>
                        <span className='font-17'>Products Purchased</span>
                      </div>
                    </Card>
                    </Link>
                  </div>
              </Row>
            </div>
          </div>
        </Row>

      </Container>
    </>
  );
}
export default Dashboard;

