import '../Stylesheet/Update_invoice.scss';
import { Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import '../Stylesheet/Responsive.scss';
import { MdOutlineImageNotSupported } from "react-icons/md";
import * as React from 'react';

const Note_inner = () => {

    return (
        <>
            <div className='bg_col mt-4 p-4'>
                <Row>
                    <div className='col-md-12 col-lg-6'>
                        <div>
                            <Form.Control className='' as="textarea" rows={7} placeholder='User Comments' />
                        </div>
                    </div>
                    <div className='col-md-12 col-lg-6 '>
                        <div className="r_mt-4">
                            <Form.Control  as="textarea" rows={4} placeholder='User Comments' />
                        </div>
                        <div className='float-end mt-4'>
                            <button class="btn_cancel py-2 px-4 ms-2 ">Cleare</button>
                            <button class="btn_blue py-2 px-4 ms-2 r_mt-2">Log note</button>
                        </div>
                    </div>
                </Row>

                {/* </div> */}

                <div className='mt-5'>
                    <Row>
                        <div>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Items</th>
                                        <th></th>
                                        <th>QTY</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                        <th>Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><MdOutlineImageNotSupported className='font-20' /></td>
                                        <td>menual testing</td>
                                        <td>1</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                    </tr>
                                    <tr>
                                        <td><MdOutlineImageNotSupported className='font-20' /></td>
                                        <td>menual testing</td>
                                        <td>1</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                    </tr>
                                    <tr>
                                        <td><MdOutlineImageNotSupported className='font-20' /></td>
                                        <td>menual testing</td>
                                        <td>1</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                    </tr>
                                    <tr>
                                        <td><MdOutlineImageNotSupported className='font-20' /></td>
                                        <td>menual testing</td>
                                        <td>1</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                        <td>$399.00</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Row>
                </div>

                <div className='mt-5'>
                    <h5 className='fw-bold mt-2'>Note</h5>
                    <Row>
                        <div>
                            <Table responsive striped>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
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

export default Note_inner;