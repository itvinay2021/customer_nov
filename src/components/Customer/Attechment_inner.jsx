import '../Stylesheet/Update_invoice.scss';
import { Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import * as React from 'react';

const Attechment_inner = () => {

    return (
        <>
            <div className='bg_col mt-4 p-4'>
                <Row>
                    <h5 className='my-3 fw-bold'>Attechment</h5>
                    <div className='col-md-12'>
                        <h6 className='my-3 fw-bold'>Add Attechment</h6>
                        <Form.Control className='my-3' as="textarea" rows={6} placeholder='Enter Notes' />
                        <button class="btn_blue py-2 px-4 ms-2 ">Complite Pickup</button>
                    </div>
                </Row>
                <div className='mt-5'>
                    <Row>
                        <h6 className='my-3 fw-bold'>Attechment</h6>
                        <div>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th><Form.Check inline name="group1" /></th>
                                        <th>Order ID</th>
                                        <th>Date Finalized</th>
                                        <th>Order Status</th>
                                        <th>Pyament Status</th>
                                        <th>Shipping Status</th>
                                        <th>Product Order</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Form.Check inline name="group1" /></td>
                                        <td>1</td>
                                        <td>menual testing</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check inline name="group1" /></td>
                                        <td>2</td>
                                        <td>menual testing</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check inline name="group1" /></td>
                                        <td>3</td>
                                        <td>menual testing</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check inline name="group1" /></td>
                                        <td>4</td>
                                        <td>menual testing</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Row>
                </div>
            </div>

        </>
    );
}

export default Attechment_inner;