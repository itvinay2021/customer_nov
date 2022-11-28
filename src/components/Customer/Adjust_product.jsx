import Form from 'react-bootstrap/Form';
import { Container , Row } from 'react-bootstrap';
import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import "react-datepicker/dist/react-datepicker.css";
import { IoIosClose } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import SignatureCanvas from 'react-signature-canvas';
import { IoMdRefreshCircle } from "react-icons/io";
import boxImg from '../../assets/cardboard-box.svg';
import '../Stylesheet/Adjust_product.scss';



const Adjust_product = () => {
    const [date, setDate] = useState(new Date());
    const [status, setStatus]=useState(true);
    
    let sigPad = React.useRef({});
    function clear(){
      sigPad.current.clear();
    }
    return(
        
        <div>
                <div className='bg_color_blue p-2'>
                    <Container className='position-relative'>
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
                <div className='bg_color_lightblue p-2 mt-4'>
                            <Form.Group as={Row} className="" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                <span className='fw-bold'>INVOICE TITLE</span>
                                </Form.Label>
                                <div className='col-md-3 col-sm-12' >
                                    <Form.Control placeholder="Serarch Product" />
                                </div>
                            </Form.Group>
                        </div>
                    <div className='mt-4'>
                        <div className='d-flex justify-content-center align-items-center py-10'>
                            <div className='lineOne'></div>

                            <div className='text-center'>
                                <img src={boxImg} alt="user" className='mx-3' />
                                <h4 className='fw-bold'>NO PRODUCT</h4>
                            </div>

                            <div className='lineTwo'></div>
                            
                        </div>

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
                                            <td><IoIosClose className='font-30 color_red fw-font cursor' /></td>
                                            <td><MdModeEditOutline className='cursor'/> Edit</td>
                                            <td>
                                                Refunded
                                            </td>
                                            <td>
                                                <p className='mb-1'>Demo</p>
                                                <p>Location: Zone2</p>
                                            </td>
                                            <td>
                                            -1
                                            </td>
                                            <td>-1</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td><IoIosClose className='font-30 color_red fw-font cursor' /></td>
                                            <td><MdModeEditOutline className='cursor'/> Edit</td>
                                            <td className=''>
                                                Refunded
                                            </td>
                                            <td >
                                                <p className='mb-1'>Demo</p>
                                                <p>Location: Zone2</p>
                                            </td>
                                            <td >
                                            -2
                                            </td>   
                                            <td>-2</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td><IoIosClose className='font-30 color_red fw-font cursor' /></td>
                                            <td><MdModeEditOutline className='cursor'/> Edit</td>
                                            <td className=''>
                                                Refunded
                                            </td>
                                            <td >
                                                <p className='mb-1'>Demo</p>
                                                <p>Location: Zone2</p>
                                            </td>
                                            <td >
                                            -3
                                            </td>
                                            <td>-3</td>
                                            <td>3</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Row>

                       
                        <Row>
                        <div className='mt-4'>
                                    <div className='d-flex'>
                                        <label className='me-2 ms-1'>
                                            <Form.Check className='mb-3 checkbox' name="check" />
                                        </label>
                                        <p className='paddingTRB'>Terms and Conditions: Customer agrees to pay the installment payments as set forth above. This agreement shall remain in effect for a period of up to 12 months, as noted. The parties agree that this agreement has no "opt-outs" and the customer shall be charged the full monthly fee even if he or she does not attend the services provided. If the customer fails to pay for the services when due, COACH has the option to treat such failure to pay as a material breach of the agreement and may cancel this agreement and/or seek legal remedies.</p>
                                    </div>
                                </div>
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

export default Adjust_product;  