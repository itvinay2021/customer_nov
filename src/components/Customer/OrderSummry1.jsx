
import '../Stylesheet/OrderSection.scss';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { IoIosArrowDown } from "react-icons/io";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import * as React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import SignatureCanvas from 'react-signature-canvas';
import { IoMdRefreshCircle } from "react-icons/io";
import Modal from 'react-bootstrap/Modal';
import Transaction from "./Transaction_inner";
import Tracking_info_inner from './Tracking_info_inner';
// import { NavLink, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
// import Adjust_product from "./Adjust_product";


const Ordersection = () =>{
  const [visible, setVisible]=useState(false);
  const [status, setStatus]=useState(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  let sigPad = React.useRef({});
  function clear(){
    sigPad.current.clear();
  }
   
    return(
      <>
       <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Please Enter Coupan</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Coupan"
                autoFocus
              />
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn_blue" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn_red">
            Apply
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="App">
      <Tabs className="Tabs">
        <TabList>
          <Tab>Order Summary</Tab>
          <Tab>Transactions</Tab>
          <Tab>Tracking Info</Tab>
          <Tab to='/' target="_blank">Recipt</Tab>
          <Tab>More Action <IoIosArrowDown /></Tab>
          <Tab>Update Invoice</Tab>
        </TabList>
        <div className=''>
          <TabPanel>
            <div className='bg_row mt-4'>
            <Row>
              <div><h4 className='txt_color'>Invoice Details</h4></div>
                <div className='col-md-4'>
                  <div className='position-relative ps-4'>
                    <h5 className='mt-3 mb-0 fw-bold'>Address</h5>
                    <span className='gray font-15'>Shceme No. 54</span>
                    <h5 className='my-3 fw-bold'>Customer information</h5>
                    <div className='font-15'><span className='fw-bold'>First Name:</span> <span className='gray'>Johne</span></div>
                    <div className='font-15'><span className='fw-bold'>Last Name:</span> <span className='gray'>Duo</span></div>
                    <div className='font-15'><span className='fw-bold'>Email:</span> <span className='gray'>Johneduo@gmail.com</span></div>
                    <div className='font-15'><span className='fw-bold'>Phone:</span> <span className='gray'>55755424423</span></div>
                    <div className='font-15'><span className='fw-bold'>Company:</span> <span className='gray'>a13</span></div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='position-relative ps-4'>
                    <div className='line'></div>
                    <h5 className='my-3 fw-bold'>Invoice</h5>
                    <div className='font-15'><span className='fw-bold'>Invoice Number:</span> <span className='gray'>19263</span> <BsFileEarmarkPdf className='txt_color'/></div>
                    <div className='font-15'><span className='fw-bold'>Invoice Date:</span> <span className='gray'>08/12/2022</span></div>
                    <div className='font-15'><span className='fw-bold'>Payment Terms:</span> <span className='gray'>Accept Terms</span></div>
                    <div className='font-15'><span className='fw-bold'>Due Date:</span> <span className='gray'>08/12/2022</span></div>
                    <div className='font-15'><span className='fw-bold'>Invoice Status:</span> <span className='gray'>Open</span></div>
                    <div className='font-15'><span className='fw-bold'>Order Status:</span> <span className='gray'>Received</span></div>
                    <div className='font-15'><span className='fw-bold'>Rep:</span> <span className='gray'>Ishwer devloper</span></div>
                  </div>
                </div>
              <div className='col-md-4 position-relative align'>
                <div className='line'></div>
                <div className='txt_balence'>
                Balence Due <br/> $135.30
                </div>
              </div>
            </Row>
            </div> 
            
            <div className='bg_row mt-4'>
            <Row>
            <div className='font-1_5 mb-3'><span className='txt_color'>Bill to:</span> <span className='gray'>james@gmail.com</span></div>
            <div>
              <Table responsive>
                  <thead>
                    <tr>
                      <th>Discription</th>
                      <th>Product code</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p className='mb-0'>ADFRTYE31</p>
                        <p className='mb-0'>testttt</p>
                        <p className='mb-0'><span className='txt_color'>Location:</span> <span className='gray'>ankit_testing</span></p>
                      </td>
                      <td>ADFRTYE31</td>
                      <td>1</td>
                      <td>$123.00</td>
                      <td>$123.00</td>
                    </tr>
                    <tr>
                      <td colSpan={3}>
                        
                      <Nav.Link to="/Adjust_product">
                      <Button variant=" rounded-pill" size="md" className='btn_theame'>
                          Adjust Product
                      </Button>
                      </Nav.Link>
                      </td>
                      <td className='fw-bold'>Subtotal</td>
                      <td className='fw-bold'>$123.00</td>
                    </tr>
                    <tr>
                    <td colSpan={2}></td>
                      <td className='txt_color'><span className='cursor' onClick={handleShow}>Apply Coupon</span></td>
                      <td>Tax</td>
                      <td>$12.30</td>
                    </tr>
                    <tr>
                    <td colSpan={3}></td>
                      
                      <td>Total</td>
                      <td>$135.30</td>
                    </tr>
                    <tr>
                    <td colSpan={3}></td>
                      <td className='fw-bold'>Balance Due</td>
                      <td className='fw-bold'>$135.30</td>
                    </tr>
                  </tbody>
              </Table>
              <div >
                  <Form className=''>
                  
                      <div className="float-end">
                      {['radio'].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Pay Full Amount" name="group1" type={type} id={`inline-${type}-1`} onClick={ ()=>setVisible(false)} />
                            <Form.Check inline label="Pay Partial" name="group1" type={type} id={`inline-${type}-2`} onClick={ ()=>setVisible(true)} />
                            { visible &&
                              <input type="text" placeholder='Enter Code' className='input_code'/>
                            }
                          </div>
                        ))}
                      </div>
                  </Form>
              </div>
            </div>
            </Row>
            </div>

            <div>
              <Row>
                <div className='col-md-6'>
                  <div className='bg_row'>
                      <h4 className='txt_color'>Billing Address</h4>
                      <Row className="">
                        <div className="col-sm-12">
                          <Form.Control placeholder="Address" />
                        </div>
                      </Row>
                      <Row className="mt-3">
                        <div className="col-sm-12">
                          <Form.Control placeholder="Address 2" />
                        </div>
                      </Row>
                      <Row className="">
                        <div className="col-md-6 col-sm-12 mt-3">
                          <Form.Control placeholder="City" />
                        </div>
                        <div className="col-md-6 col-sm-12 mt-3">
                        <Form.Select aria-label="Default select example" className="select_color">
                          <option>Select State</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                        </div>
                      </Row>
                      <Row className="">
                        <div className="col-md-6 col-sm-12 mt-3">
                          <Form.Control placeholder="Zip" />
                        </div>
                        <div className="col-md-6 col-sm-12 mt-3">
                        <Form.Select aria-label="Default select example" className="select_color">
                          <option>Select Country</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                        </div>
                      </Row>
                      
                      <div>
                          <div className="my-3">
                            <Form.Check className='mb-3' inline label="Pay Full Amount" name="check" onClick={ ()=>setStatus(!status)} />
                            {
                              status?<div>
                                <Row className="">
                                  <div className="col-sm-12">
                                    <Form.Control placeholder="First name" />
                                  </div>
                                </Row>
                                <Row className="mt-3">
                                  <div className="col-sm-12">
                                    <Form.Control placeholder="Last name" />
                                  </div>
                                </Row>
                                <Row className="mt-3">
                                  <div className="col-sm-12">
                                    <Form.Control placeholder="Shiping Address" />
                                  </div>
                                </Row>
                                <Row className="mt-3">
                                  <div className="col-sm-12">
                                    <Form.Control placeholder="Shiping Address 2" />
                                  </div>
                                </Row>
                                <Row className="">
                                  <div className="col-md-6 col-sm-12 mt-3">
                                    <Form.Control placeholder="City" />
                                  </div>
                                  <div className="col-md-6 col-sm-12 mt-3">
                                  <Form.Select aria-label="Default select example" className="select_color">
                                    <option>Select State</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </Form.Select>
                                  </div>
                                </Row>
                                <Row className="">
                                  <div className="col-md-6 col-sm-12 mt-3">
                                    <Form.Control placeholder="Zip" />
                                  </div>
                                  <div className="col-md-6 col-sm-12 mt-3">
                                  <Form.Select aria-label="Default select example" className="select_color">
                                    <option>Select Country</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </Form.Select>
                                  </div>
                                </Row>
                              </div>:null
                            }
                          </div>
                      </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='bg_row'>
                    <h4 className='txt_color'>Payment Detail</h4>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </Row>
            </div>
            <div className='row'>                
              <div className='col-md-12'>
                <div className='d-flex'>
                  <label className='me-2 ms-1'>
                    <Form.Check className='mb-3 checkbox' name="check" />
                  </label>
                    <p className='paddingTRB'>Terms and Conditions: Customer agrees to pay the installment payments as set forth above. This agreement shall remain in effect for a period of up to 12 months, as noted. The parties agree that this agreement has no "opt-outs" and the customer shall be charged the full monthly fee even if he or she does not attend the services provided. If the customer fails to pay for the services when due, COACH has the option to treat such failure to pay as a material breach of the agreement and may cancel this agreement and/or seek legal remedies.</p>
                </div>
              </div>
            </div>
          <Row>
            <div className='col-md-12'>
              <div className='signCan mx-2'>
                <SignatureCanvas penColor='green'
                canvasProps={{className: 'sigCanvas'}} ref={sigPad}/>
                <span>Please sign on above box</span>
                <IoMdRefreshCircle className='clearsig float-end cursor fw-bold text-color font-30' onClick={clear} />
              </div>
            </div>
          </Row>

          <Row>
            <div className='col-md-12'>
              <div className='usercoment mx-2 rounded mt-5'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={6} placeholder='User Comments'/>
                <Form.Label className='mt-2'>Check the Invoice Properly</Form.Label>
                <div className='float-end mt-5'>
                  <button className="btn_blue py-2 px-4">Copy link</button>
                  <button className="btn_blue py-2 px-4 ms-2">Send Invoice</button>
                  <button className="btn_green py-2 px-4 ms-2 ">Validate Address</button>
                  <button className="btn_green py-2 px-4 ms-2 ">Save invoice</button>
                  <button className="btn_green py-2 px-4 ms-2 ">Process payment</button>
                </div>
              </Form.Group>
              </div>
            </div>
          </Row>

          </TabPanel>
          <TabPanel>
            <Transaction />
          </TabPanel>
          <TabPanel>
            <div className='row'>
              <Tracking_info_inner />
            </div>
           
          </TabPanel>
          </div>
      </Tabs>
   </div>
   </>
    );
}
export default Ordersection;