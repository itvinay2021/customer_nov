
import '../Stylesheet/Update_invoice.scss';
import { BsFileEarmarkPdf } from "react-icons/bs";
import { Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import * as React from 'react';



const Customer = () => {
  return (
    <>
      <div className="container-fluid px-0">
        <div className='row'>
          <div className='col-md-12'>
            {/* <Row>
              <div className='col-md-12'> */}
                <div className='p-4 bg_col mt-4'>
                  <Row>
                    <div className='col-lg-6 col-md-12'>
                      <div className='position-relative p-4'>
                        <div className='font-16'><span className='fw-bold'>Order ID</span> <span className='gray'>22879</span></div>
                        <div className='font-16'><span className='fw-bold'>Order Status:</span> <span className='gray'>NO STATUS SELECTED</span></div>
                        <div className='font-16'><span className='fw-bold'>Payment Status:</span> <span className='gray'>ERROR</span></div>
                        <div className='font-16'><span className='fw-bold'>Date:</span> <span className='gray'>08/12/2022 00:00:02</span></div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                      <div className='position-relative p-4'>
                        <div className='line'></div>
                        <div className='font-16'><span className='fw-bold'>Sale Location:</span> <span className='gray'>iPad (2) D</span> </div>
                        <div className='font-16'><span className='fw-bold'>Encrypted Order ID:</span> <span className='gray'>SkvjbFc3In20DNoNmFjUGc3WUtUDz09</span><BsFileEarmarkPdf className='txt_color' /></div>
                        <div className='font-16'><span className='fw-bold'>Representative:</span> <span className='gray'>Hello test</span></div>
                      </div>
                    </div>
                  </Row>
                </div>
                <div className='p-4 bg_col mt-4'>
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
                              <p className='mb-0'>Amana® 1.6 Cu. Ft. Black on Stainless Over The Range Microwave
AMV2307PFS</p>
                            </td>
                            <td>0</td>
                            <td>$399.00</td>
                            <td>$399.00</td>
                            <td colSpan={2}>
                              <div className='d-flex'>
                                
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className='mb-0'></p>
                            </td>
                            <td>0</td>
                            <td>$399.00</td>
                            <td>$399.00</td>
                            <td colSpan={2}>
                              <div className='d-flex'>
                                
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className=''>Subtotal</td>
                            <td colSpan={2}></td>
                            <td colSpan={3}>$123.00</td>
                          </tr>
                          {/* <tr>
                            <td>Total</td>
                            <td colSpan={2}></td>
                            <td className='fw-bold'>$12.30</td>
                            <td className=''></td>
                            <td className='txt_color'></td>
                          </tr> */}
                          <tr>
                            <td className='fw-bold'>Total</td>
                            <td colSpan={2}></td>
                            <td className='fw-bold' colSpan={3}>$12.30</td>
                          </tr>
                        
                        </tbody>
                      </Table>
                    </div>
                  </Row>
                </div>

                <div className='p-4 bg_col mt-4'>
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

             
            {/* </Row>
          </div> */}

        </div>

      </div>
    </>
  );
}

export default Customer;