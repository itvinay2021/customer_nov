
import '../Stylesheet/Update_invoice.scss';
import { BsFileEarmarkPdf } from "react-icons/bs";
import { Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import '../Stylesheet/Responsive.scss';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
import * as React from 'react';
// import Modal from 'react-bootstrap/Modal';



const Customer = () => {
  return (
    <>
      <div className="container-fluid px-0">
        
        <div className='row'>
          <div className='col-md-12'>
            <Row>
              <div className='col-md-12 col-lg-12 col-xl-9 col-xxl-9 col-sm-12'>
                <div className='bg_row mt-4'>
                  <Row>
                    <div className='col-md-12 col-lg-6'>
                      <div className='position-relative p-2'>
                        <div className='font-16'><span className='fw-bold'>Order ID</span> <span className='gray'>22879</span></div>
                        <div className='font-16'><span className='fw-bold'>Order Status:</span> <span className='gray'>Received</span></div>
                        <div className='font-16'><span className='fw-bold'>Payment Status:</span> <span className='gray'>AUTH_CAPTURE</span></div>
                        <div className='font-16'><span className='fw-bold'>Date:</span> <span className='gray'>08/12/2022 00:00:02</span></div>
                        <div className='font-16'><span className='fw-bold'>Company:</span> <span className='gray'>a13</span></div>
                      </div>
                    </div>
                    <div className='col-md-12 col-lg-6'>
                      <div className='position-relative p-2'>
                        <div className='line'></div>
                        <div className='font-16'><span className='fw-bold'>Sale Location:</span> <span className='gray'>INVOICE</span> </div>
                        <div className='font-16'><span className='fw-bold'>Encrypted Order ID:</span> <span className='gray'>SkvjbFc3In20DNoNmFjUGc3WUtUDz09</span><BsFileEarmarkPdf className='txt_color' /></div>
                        <div className='font-16'><span className='fw-bold'>Company:</span> <span className='gray'>furniture Gallery</span></div>
                        <div className='font-16'><span className='fw-bold'>PO Number:</span> <span className='gray'>555363662</span></div>
                        <div className='font-16'><span className='fw-bold'>Invoice Tital:</span> <span className='gray'>AH0189</span></div>
                        <div className='font-16'><span className='fw-bold'>Representative:</span> <span className='gray'>Hello  test</span></div>
                      </div>
                    </div>
                  </Row>
                </div>
                <div className='bg_row mt-4'>
                  <Row>
                    <div>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>Items</th>
                            <th>QTY</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Action</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <p className='mb-0'>menual testing</p>
                              <p className='mb-0'>menual testing</p>

                            </td>
                            <td>1</td>
                            <td>$399.00</td>
                            <td>$399.00</td>
                            <td colSpan={2}>
                              <div className='d-flex'>
                                <label className='me-2 ms-1'>
                                  <Form.Check className='mb-3 checkbox' name="check" />
                                </label>
                                <p>Refund</p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>Subtotal</td>
                            <td colSpan={2}></td>
                            <td colSpan={3}>$123.00</td>
                          </tr>
                          <tr>
                            <td className='fw-bold'>Total</td>
                            <td colSpan={2}></td>
                            <td className='fw-bold' colSpan={3}>$12.30</td>
                          </tr>
                          <tr>
                            <td>Total</td>
                            <td colSpan={2}></td>
                            <td className='fw-bold'>$12.30</td>
                            <td className=''>08/10/2022 00:00:10 </td>
                            <td className='txt_color'>Add Tip</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Row>
                </div>

                <div className='bg_row mt-4'>
                  <span class="head_text">Note</span>
                  <Row>
                    <div>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>Date/Time</th>
                            <th>Logged By</th>
                            <th>Note</th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>08/23/2022 06:42:57</td>
                            <td>sourabh</td>
                            <td>Full refund for order 161184 processed successfully.</td>
                          </tr>
                          <tr>
                            <td>08/23/2022 06:42:57</td>
                            <td>sourabh</td>
                            <td>Full refund for order 161184 processed successfully.</td>
                          </tr>
                          <tr>
                            <td>08/23/2022 06:42:57</td>
                            <td>sourabh</td>
                            <td>Full refund for order 161184 processed successfully.</td>
                          </tr>
                          <tr>
                            <td>08/23/2022 06:42:57</td>
                            <td>sourabh</td>
                            <td>Full refund for order 161184 processed successfully.</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Row>
                </div>
              </div>
              <div className='col-md-12 col-lg-12 col-xl-3 col-xxl-3 col-sm-12'>
                <div className='bg_col mt-4'>
                  <div className='position-relative ps-2'>
                    <h6 className='mb-3 fw-bold'>Moses S & Arianna K Glick</h6>
                    <div className='font-16'><span className='fw-bold'>Company:</span> <span className='gray'>Hiecor</span></div>
                    <div className='font-16'><span className='fw-bold'>Address:</span> <span className='gray'>385 Frogtown Rd</span></div>
                    <div className='font-16'><span className='fw-bold'>City:</span> <span className='gray'>Pequea</span></div>
                    <div className='font-16'><span className='fw-bold'>Region:</span> <span className='gray'>PA</span></div>
                    <div className='font-16'><span className='fw-bold'>Postal Code:</span> <span className='gray'>17565</span></div>
                    <div className='font-16'><span className='fw-bold'>Country:</span> <span className='gray'>US</span></div>
                  </div>
                </div>
              </div>
            </Row>
          </div>

        </div>

      </div>
    </>
  );
}

export default Customer;