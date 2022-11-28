// import React from "react";
import { Navbar, Row, Table, Form } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import '../Stylesheet/Customer_nav.scss';
import '../Stylesheet/Responsive.scss';
import { NavLink, Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';



const Customer_nav = () => {
  const [More_Action, set1Show] = useState(false);
  const [Order_status, set2Show] = useState(false);
  const [Sale_ocation, set3Show] = useState(false);
  const [Delete, set4Show] = useState(false);
  const [Receipt, set5Show] = useState(false);
  const [Text_receipt, set6Show] = useState(false);
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);


  return (
    
    <>
      <Modal size="lg" show={More_Action} onHide={() => set1Show(false)} aria-labelledby="example-modal-1">
        <div className="px-4">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-1">
              User Merge Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
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
                <div className="row">
                  <div className="col-md-6">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-md-6">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination float-end">
                        <li class="page-item">
                          <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                          </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                          <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <Form>
                  <h5>Select Customer to Merge Into:</h5>
                  <Row className="mt-4">
                    <div className="col-md-6 col-sm-12">
                      <Form.Control placeholder="First name" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <Form.Control placeholder="Last name" className='r_mt-4' />
                    </div>
                  </Row>

                  <Row className="mt-4">
                    <div className="col-md-6 col-sm-12">
                      <Form.Control placeholder="Phone No." />
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <Form.Control placeholder="Fax No." className='r_mt-4' />
                    </div>
                  </Row>

                  <Row className="mt-4">
                    <div className="col-md-6 col-sm-12">
                      <Form.Control placeholder="Email Id" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <Form.Control placeholder="Company" className='r_mt-4' />
                    </div>
                  </Row>

                  <Row className="mt-4">
                    <div className="col-md-6 col-sm-12">
                      <Form.Control placeholder="Title" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <Form.Control placeholder="Contact Source" className='r_mt-4' />
                    </div>
                  </Row>
                  <button className="btn_Blue  mt-4 float-end ">Save</button>
                </Form>
              </div>

            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div className="float-end mb-2 mt-4">
              <button className="btn_cancel ">Cancel</button>
              <button className="btn_Blue  ms-2 r_mt-2">Save</button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>


      <Modal size="lg" show={Order_status} onHide={() => set2Show(false)} aria-labelledby="example-modal-2">
        <div className="px-4">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-2">
              Order Status
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Row className="my-3">
                <div className="col-md-12 col-sm-12">
                  <Form.Select aria-label="Default select example" className="select_color r_mt-4">
                    <option>Select Status</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </Row>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div className="float-end mb-2 mt-4">
              <button className="btn_cancel ">Cancel</button>
              <button className="btn_Blue  ms-2 r_mt-2">Save</button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>


      <Modal size="lg" show={Sale_ocation} onHide={() => set3Show(false)} aria-labelledby="example-modal-3">
        <div className="px-4">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-3">
              Sale Location
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Row className="my-3">
                <div className="col-md-12 col-sm-12">
                  <Form.Select aria-label="Default select example" className="select_color r_mt-4">
                    <option>Select Sale Location</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </Row>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div className="float-end mb-2 mt-4">
              <button className="btn_cancel ">Cancel</button>
              <button className="btn_Blue  ms-2 r_mt-2">Save</button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>

      <Modal size="lg" show={Delete} onHide={() => set4Show(false)} aria-labelledby="example-modal-4">
        <div className="px-4">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-4">
              Delete
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure want to delete this order?
          </Modal.Body>
          <Modal.Footer>
            <div className="float-end mb-2 mt-4">
              <button className="btn_cancel ">No</button>
              <button className="btn_save  ms-2 r_mt-2">Yes</button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>

      <Modal size="lg" show={Receipt} onHide={() => set5Show(false)} aria-labelledby="example-modal-5">
        <div className="px-4">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-5">
              Receipt
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control placeholder="Test@gmail.com" className=' my-3r_mt-4' />
          </Modal.Body>
          <Modal.Footer>
            <div className="float-end mb-2 mt-4">
              <button className="btn_cancel ">Close</button>
              <button className="btn_save  ms-2 r_mt-2">Send</button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>

      <Modal size="lg" show={Text_receipt} onHide={() => set6Show(false)} aria-labelledby="example-modal-6">
        <div className="px-4">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-6">
              Receipt
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control placeholder="Test@gmail.com" className=' my-3r_mt-4' />
          </Modal.Body>
          <Modal.Footer>
            <div className="float-end mb-2 mt-4">
              <button className="btn_cancel" closeButton>Close</button>
              <button className="btn_save  ms-2 r_mt-2">Send</button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>

      <Navbar className="TabNav">
        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <NavLink to="/Invoice" eventKey="link-2.0">Order</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/Tab_transaction" eventKey="link-2.1">Transaction</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/Tab_tracking" eventKey="link-2.2">Tracking_info</NavLink>
          </Nav.Item>

          <NavDropdown title="Recipt" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Print Mini Receipt</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Print Cloud Receipt</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Print Full Receipt</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Print Gift Receipt</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.5" onClick={() => set5Show(true)}>Email Receipt</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.6" onClick={() => set6Show(true)}>Text Receipt</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="More Action" id="nav-dropdown">
            <NavDropdown.Item eventKey="5.1" onClick={() => set1Show(true)}>Move Order</NavDropdown.Item>
            <NavDropdown.Item eventKey="5.2" onClick={() => set2Show(true)}>Change Status</NavDropdown.Item>
            <NavDropdown.Item eventKey="5.3" onClick={() => set3Show(true)}>Change Sale Location</NavDropdown.Item>
            <NavDropdown.Item eventKey="5.5" onClick={() => set4Show(true)}>Delete Order</NavDropdown.Item>
          </NavDropdown>

          <Nav.Item>
            <NavLink to="/Update_invoice" eventKey="link-2.3" target='_blank' >Update Invoice</NavLink>
          </Nav.Item>
        </Nav>
      </Navbar>
      {/* <Nav activeKey="/1" variant="Nav-pills" className="TabNav">
        <Nav.Item>
          <Nav.Link href="/Update_invoice">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <NavDropdown title="Recipt" id="Recipt_nav">
            <NavDropdown.Item eventKey="4.1">Print Mini Receipt</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Print Cloud Receipt</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Print Full Receipt</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Print Gift Receipt</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.5" onClick={() => set5Show(true)}>Email Receipt</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.6" onClick={() => set6Show(true)}>Text Receipt</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="More Action" id="Action_nav">
            <NavDropdown.Item eventKey="5.1" onClick={() => set1Show(true)}>Move Order</NavDropdown.Item>
            <NavDropdown.Item eventKey="5.2" onClick={() => set2Show(true)}>Change Status</NavDropdown.Item>
            <NavDropdown.Item eventKey="5.3" onClick={() => set3Show(true)}>Change Sale Location</NavDropdown.Item>
            <NavDropdown.Item eventKey="5.5" onClick={() => set4Show(true)}>Delete Order</NavDropdown.Item>
          </NavDropdown>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav> */}
       {/* <Nav variant="pills" activeKey="1" onSelect={handleSelect} className="TabNav">
      <Nav.Item>
        <Nav.Link eventKey="1" to="/Update_invoice">
          NavLink 1 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2"  to="/Update_invoice">
          NavLink 2 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" to="/Update_invoice">
          NavLink 3 content
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav> */}
    </>

  );
}

export default Customer_nav;
