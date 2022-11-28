import Row from 'react-bootstrap/Row';
import { Form, Table } from 'react-bootstrap';
import '../Stylesheet/Tracking_info.scss';


const Workflow_inner = () => {
    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="p-4 bg_col">
                        <span className='fw-bold mb-4'>Workflow</span>
                        <div className='boxborder mt-4'>
                            <span className='borderTxt'>Log Action</span>
                            <Row>
                                <div className="col-md-4 col-sm-6 mt-3">
                                    <Form.Select aria-label="Default select example" className="select_color">
                                        <option>Carrier</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-3">
                                    <Form.Select aria-label="Default select example" className="select_color">
                                        <option>Carrier</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-3">
                                    <Form.Select aria-label="Default select example" className="select_color">
                                        <option>Carrier</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-3">
                                    <input name="datepic" placeholder="DateRange" type="date" class="form-control" value="Wed Nov 02 2022 16:50:21 GMT+0530 (India Standard Time)" />
                                </div>
                                <div className="col-md-4 col-sm-6 mt-3">
                                    <Form.Control placeholder="Address" />
                                </div>
                                <div className="col-md-4 col-sm-6 mt-3">
                                    <div className='float-end'>
                                        <button class="btn_cancel py-2 px-4 ms-2 ">Cleare</button>
                                        <button class="btn_blue py-2 px-4 ms-2 r_mt-2">Save</button>
                                    </div>
                                </div>
                            </Row>
                        </div>
                        {/* </div>

                   
                    <div className='bg_row mt-4'> */}
                        <Row>
                            <h6 className='fw-bold mt-5'>Workflow</h6>
                            <div>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th> <Form.Check inline name="group1" /></th>
                                            <th>ID</th>
                                            <th>Action Date</th>
                                            <th>Action</th>
                                            <th>Discription</th>
                                            <th>Note</th>
                                            <th>Next Action</th>
                                            <th>Next Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><Form.Check inline name="group1" /></td>
                                            <td>1</td>
                                            <td>11</td>
                                            <td>menual testing</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>

                                        </tr>
                                        <tr>
                                            <td><Form.Check inline name="group1" /></td>
                                            <td>2</td>
                                            <td>22</td>
                                            <td>menual testing</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>

                                        </tr>
                                        <tr>
                                            <td><Form.Check inline name="group1" /></td>
                                            <td>3</td>
                                            <td>33</td>
                                            <td>menual testing</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>

                                        </tr>
                                        <tr>
                                            <td><Form.Check inline name="group1" /></td>
                                            <td>4</td>
                                            <td>44</td>
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
            </div>
        </>
    );
}
export default Workflow_inner;