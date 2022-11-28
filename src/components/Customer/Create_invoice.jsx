import Form from 'react-bootstrap/Form';
import { Container , Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import "react-datepicker/dist/react-datepicker.css";
import { ImAttachment } from "react-icons/im";
import SignatureCanvas from 'react-signature-canvas';
import { IoMdRefreshCircle } from "react-icons/io";
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import '../Stylesheet/Create_order.scss';
import '../Stylesheet/Dashboard.scss';
import { IoIosPricetags } from "react-icons/io";
// import { BsPatchPlus } from "react-icons/bs";
import { MdOutlinePriceCheck } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import { BsCurrencyDollar } from "react-icons/bs";



const Create_order = () =>{
    const [date, setDate] = useState(new Date());
    const [status, setStatus]=useState(true);
    
    let sigPad = React.useRef({});
    function clear(){
      sigPad.current.clear();
    }

    const [show, setShow] = useState(false);
    const target = useRef(null);
    return(
        
              <div>
                    <div className='bg_color_blue p-2'>
                        <Container>
                            <Form.Group as={Row} className="" controlId="formPlaintextupdate">
                                <Form.Label column sm="2">
                                <span className='text-white'>UPDATE INVOICE</span>
                                </Form.Label>
                                <div className='col-md-3 col-sm-12' >
                                <Form.Select aria-label="Default select example" className="select_color">
                                    <option>Select State</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                </div>
                            </Form.Group>
                        </Container>
                        
                    </div>
                    <Container >
                        <div className='mt-4'>
                            <Row>
                                <div className="col-sm-6 mt-3">
                                    <Form.Control placeholder="Address" />
                                </div>
                                <div className="col-sm-6 mt-3">
                                    <Form.Select aria-label="Default select example" className="select_color">
                                        <option>Select State</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="col-sm-6 mt-3">
                                <Form.Control
                                        type="date"
                                        name="datepic"
                                        placeholder="DateRange"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>
                                <div className="col-sm-6 mt-3">
                                <Form.Control
                                        type="date"
                                        name="datepic"
                                        placeholder="DateRange"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>
                                <div className="col-sm-6 mt-3">
                                    <Form.Select aria-label="Default select example" className="select_color">
                                        <option>Select State</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </Row>

                            <hr className='my-4'></hr>
                            <div className='bg_color_lightblue p-2'>
                                <Form.Group as={Row} className="" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    <span className='fw-bold'>INVOICE TITLE</span>
                                    </Form.Label>
                                    <div className='col-md-3 col-sm-12' >
                                        <Form.Control placeholder="Serarch Product" />
                                    </div>
                                </Form.Group>
                            </div>

                            <Row>
                                <h5 className='mt-4'>Customer Details</h5>
                                <div className="col-sm-4 mt-3">
                                    <Form.Control placeholder="Email" />
                                </div>
                                <div className="col-sm-4 mt-3">
                                    <Form.Control placeholder="First Name" />
                                </div>
                                <div className="col-sm-4 mt-3">
                                    <Form.Control placeholder="Last Name" />
                                </div>
                                <div className="col-sm-4 mt-3">
                                    <Form.Control placeholder="BCC Email" />
                                </div>
                                <div className="col-sm-4 mt-3">
                                    <Form.Control placeholder="Phone" />
                                </div>
                                <div className="col-sm-4 mt-3">
                                    <Form.Control placeholder="Campany" />
                                </div>
                                <div className="col-sm-4 mt-3">
                                    <Form.Control placeholder="AVB ID" />
                                </div>
                                <div className="col-sm-4 mt-3">
                                    <Form.Control placeholder="Additional Phone" />
                                </div>
                            </Row>

                            <hr className='my-4'></hr>

                            <Row>
                                <h5 className=''>Billing Address</h5>

                                <Form.Check className='ms-3 mt-3' inline label="Pay Full Amount" name="check" onClick={ ()=>setStatus(!status)} />

                                <div className="col-sm-4 mt-3">
                                    <Form.Control placeholder="Address" />
                                </div>
                                <div className="col-sm-4 mt-3">
                                    <Form.Control placeholder="Address" />
                                </div>
                                <div className="col-sm-4 mt-3">
                                    <Form.Control placeholder="Address" />
                                </div>
                                <div className="col-sm-4 mt-3">
                                <Form.Select aria-label="Default select example" className="select_color">
                                        <option>Select State</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="col-sm-4 mt-3">
                                    <Form.Control placeholder="Address" />
                                </div>
                                <div className="col-sm-4 mt-3">
                                <Form.Select aria-label="Default select example" className="select_color">
                                        <option>Select State</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </Row>

                            <hr className='my-4'></hr>
                            <div className='bg_color_lightblue p-2'>
                                <Form.Group as={Row} className="" controlId="formPlaintextPassword">
                                    <div className='col-md-3 col-sm-12' >
                                        <Form.Control placeholder="Serarch Product" />
                                    </div>
                                </Form.Group>
                            </div>

                            <Row>
                                <div>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th>Description</th>
                                                <th>Product Code</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colSpan={5}></td>
                                                <td className=''>Subtotal</td>
                                                <td className='fw-bold'>$219.00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={5}></td>
                                                <td className='fw-bold'>
                                                <Button ref={target} onClick={() => setShow(!show)} className='Btn_descount'>
                                                    <IoIosPricetags /> Add discount    
                                                </Button>
                                                <Overlay target={target.current} show={show} placement="top">
                                                    {(props) => (
                                                    <Tooltip id="overlay-example" {...props} className="tooltip_Tab">
                                                        <div className='d-flex'>
                                                        <div className='Coupon_blue'>
                                                            <MdOutlinePriceCheck className='font_20'/>
                                                            Apply Coupon
                                                        </div>
                                                        <div className='Coupon_green'>
                                                            <BsCurrencyDollar className='font_20'/>
                                                            Manual
                                                        </div>
                                                        <div className='Coupon_yellow'>
                                                            <TbDiscount2 className='font_20'/>
                                                            Manual
                                                        </div>
                                                        </div>
                                                    </Tooltip>
                                                    )}
                                                </Overlay>
                                                </td>
                                                <td className='fw-bold'>$$0.00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={5}></td>
                                                <td className=''>Shipping & Handling</td>
                                                <td className='fw-bold'>$110.00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={4}></td>
                                                <td >Deposit Required</td>
                                                <td ><Form.Control placeholder="Quantity" /></td>
                                                <td className='fw-bold'>$110.00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={4}></td>
                                                <td >Apply Custom Tax</td>
                                                <td >
                                                <Form.Select aria-label="Default select example" className="select_color">
                                                    <option>Select State</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Select>
                                                </td>
                                                <td className='fw-bold'>$01.00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={5}></td>
                                                <td className=''>Total</td>
                                                <td className='fw-bold'>$330.00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={5}></td>
                                                <td className='fw-bold '>Balance Due</td>
                                                <td className='fw-bold '>$209.00</td>
                                            </tr>
                                            
                                        </tbody>
                                    </Table>
                                </div>
                            </Row>
                            
                            <Row>
                                <div className='col-md-12'>
                                    <Form.Control className='my-5' as="textarea" rows={6} placeholder='User Comments'/>
                                    <Form.Check className='' inline label="Show Payment Options" name="check" onClick={ ()=>setStatus(!status)} />
                                    <div className= 'my-5'>
                                        <Form.Group as={Row} className="">
                                        <Form.Label column md="1">
                                        Attachments
                                        </Form.Label>
                                            <div className='upload-btn-wrapper col-md-3 col-sm-12'>
                                                <button className="btn">Select files<ImAttachment className='ms-2'/></button>
                                                <input type="file" name="myfile" />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className='mt-4'>
                                        <div className='d-flex'>
                                            <label className='me-2 ms-1'>
                                                <Form.Check className='mb-3 checkbox' name="check" />
                                            </label>
                                            <p className='paddingTRB'>Terms and Conditions: Customer agrees to pay the installment payments as set forth above. This agreement shall remain in effect for a period of up to 12 months, as noted. The parties agree that this agreement has no "opt-outs" and the customer shall be charged the full monthly fee even if he or she does not attend the services provided. If the customer fails to pay for the services when due, COACH has the option to treat such failure to pay as a material breach of the agreement and may cancel this agreement and/or seek legal remedies.</p>
                                        </div>
                                    </div>
                                </div>
                            </Row>
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
                        </div>
                    </Container>
                        <div className='bg_color_lightblue p-2 mt-4'>
                            <Container>
                                <div className='d-flex' >
                                    <Form.Select aria-label="Default select example" className="select_color w-25">
                                        <option>105- Fake Marchant</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <div className='ms-auto'>
                                        <button class="btn_blue py-2 px-4 ms-2">Process Paymant</button>
                                        <button class="btn_green py-2 px-4 ms-2 ">Save Invoice</button>
                                    </div>
                                </div>
                            </Container>             
                        </div>
                </div>
      );
    }
    
    export default Create_order;