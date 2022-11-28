import Form from 'react-bootstrap/Form';
import { Container, Row } from 'react-bootstrap';
import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import "react-datepicker/dist/react-datepicker.css";
import { IoIosClose } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { ImAttachment } from "react-icons/im";
import SignatureCanvas from 'react-signature-canvas';
import { IoMdRefreshCircle } from "react-icons/io";




const Update_invoice = () => {
    const [date, setDate] = useState(new Date());
    const [status, setStatus] = useState(true);

    let sigPad = React.useRef({});
    function clear() {
        sigPad.current.clear();
    }
    return (

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

                        <Form.Check className='ms-3 mt-3' inline label="Pay Full Amount" name="check" onClick={() => setStatus(!status)} />

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
                                        <td><IoIosClose className='font-30 color_red fw-font cursor' /></td>
                                        <td><MdModeEditOutline className='cursor' /> Edit</td>
                                        <td>
                                            <p className='mb-1'>Demo</p>
                                            <p>Location: Zone2</p>
                                        </td>
                                        <td>$399.00</td>
                                        <td>
                                            <Form.Control placeholder="Quantity" type='number' />
                                        </td>
                                        <td><Form.Control placeholder="Quantity" /></td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td><IoIosClose className='font-30 color_red fw-font cursor' /></td>
                                        <td><MdModeEditOutline className='cursor' /> Edit</td>
                                        <td className=''>
                                            <p className='mb-1'>Demo</p>
                                            <p>Location: Zone2</p>
                                        </td>
                                        <td >1</td>
                                        <td >
                                            <Form.Control placeholder="Quantity" type='number' />
                                        </td>
                                        <td><Form.Control placeholder="Quantity" /></td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td><IoIosClose className='font-30 color_red fw-font cursor' /></td>
                                        <td><MdModeEditOutline className='cursor' /> Edit</td>
                                        <td className=''>
                                            <p className='mb-1'>Demo</p>
                                            <p>Location: Zone2</p>
                                        </td>
                                        <td >1</td>
                                        <td >
                                            <Form.Control placeholder="Quantity" type='number' />
                                        </td>
                                        <td><Form.Control placeholder="Quantity" /></td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={5}></td>
                                        <td className='fw-bold'>Subtotal</td>
                                        <td className='fw-bold'>$219.00</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={5}></td>
                                        <td className='fw-bold'>Discount</td>
                                        <td className='fw-bold'>$$0.00</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={5}></td>
                                        <td className='fw-bold'>Shipping & Handling</td>
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
                                        <td className='fw-bold color_red'>Balance Due</td>
                                        <td className='fw-bold color_red'>$209.00</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </div>
                    </Row>

                    <Row>
                        <div className='col-md-12'>
                            <Form.Control className='my-5' as="textarea" rows={6} placeholder='User Comments' />
                            <Form.Check className='' inline label="Show Payment Options" name="check" onClick={() => setStatus(!status)} />
                            <h5 className='mt-4 mb-3'>Payment Detail</h5>
                            <Form className=''>
                                <div className="">
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="Credit, Debit, or ATM Card" name="group1" type={type} />
                                            <Form.Check inline label="Cash" name="group1" type={type} />
                                            <Form.Check inline label="External Payment" name="group1" type={type} />
                                            <Form.Check inline label="Check" name="group1" type={type} />
                                            <Form.Check inline label="Checking Account" name="group1" type={type} />
                                            <Form.Check inline label="Internal Gift Card" name="group1" type={type} />
                                        </div>
                                    ))}
                                </div>
                            </Form>
                            <Row>
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
                            </Row>


                            <div className='my-5'>
                                <Form.Group as={Row} className="">
                                    <Form.Label column md="2">
                                        Attachments
                                    </Form.Label>
                                    {/* <div className='col-md-3 col-sm-12' >
                                                <input type='file' name='img'/>
                                                <button type="file" class="btn_theame btn btn- rounded-pill btn-md px-3 py-2 ">Select files<ImAttachment className='ms-3'/></button>
                                            </div> */}
                                    <div className='upload-btn-wrapper col-md-3 col-sm-12'>
                                        <button className="btn">Select files<ImAttachment className='ms-2' /></button>
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
                                    canvasProps={{ className: 'sigCanvas' }} ref={sigPad} />
                                <span>Please sign on above box</span>
                                <IoMdRefreshCircle className='clearsig float-end cursor fw-bold text-color font-30' onClick={clear} />
                            </div>
                        </div>
                    </Row>
                </div>
            </Container>
            <div className='bg_color_lightblue p-2 mt-4'>
                <Container>
                    <div className='row'>
                            <div className='col-md-12 col-lg-6'>
                       
                            <Form.Select aria-label="Default select example" className="select_color">
                                <option>105- Fake Marchant</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            </div>

                            <div className='col-md-12 col-lg-6'>
                                
                                <button class="btn_green py-2 px-4 ms-2 r_mt-2 float-end">Save Invoice</button>
                                <button class="btn_blue py-2 px-4 ms-2 r_mt-2 float-end">Process Paymant</button>
                                
                            </div>
                        
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Update_invoice;