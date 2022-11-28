import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Form, Button, Table } from 'react-bootstrap';
import { HiOutlineRefresh, HiPlus } from "react-icons/hi";
import '../Stylesheet/Tracking_info.scss';
import { MdOutlineImageNotSupported } from "react-icons/md";


const Tracking_info_inner = () => {
  return (
    <>
      <div className='row'>
        <div className='col-md-12'>
          <div className="p-4 bg_row mt-3">
            {/* <span className='fw-bold '>TRACKING</span> */}
            <h5 className='fw-bold'>TRACKING</h5>
            <Row xs={1} md={2} className="g-4 mt-2">
              {Array.from({ length: 17 }).map((_, idx) => (
                <div className="col-md-12 col-lg-3">
                  <Card style={{}} className='mb-2 border-0 user_detail border_05'>
                    <div className="bg_card_side">
                      <div className='fw-bold font-20'>ID</div>
                      <span className="gray font-20">114082</span>
                    </div>
                  </Card>
                </div>
              ))}
            </Row>
          </div>

          
          <div className="p-4 bg_row mt-4">
          <h5 className='fw-bold mb-4'>Shipping Info</h5>
            <span className='fw-bold mb-4'>Shipment #166550</span>
            <div className='boxborder mt-4'>
              <span className='borderTxt'>Weight/Dimensions</span>
              <Row>
                <div className="col-sm-6 mt-3">
                  <Form.Control placeholder="Address" />
                </div>
                <div className="col-sm-6 mt-3">
                  <Form.Control placeholder="Address" />
                </div>
                <div className="col-sm-6 mt-3">
                  <Form.Control placeholder="Address" />
                </div>
                <div className="col-sm-6 mt-3">
                  <Form.Control placeholder="Address" />
                </div>
              </Row>
            </div>

            <div className='boxborder mt-4'>
            <h5 className='fw-bold mt-4'>Shipping Carrier</h5>
              {/* <span className='borderTxt'>Shipping Carrier</span> */}
              <Row>
                <div className="col-sm-6 mt-3">
                  <Form.Select aria-label="Default select example" className="select_color">
                    <option>Carrier</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <div className="col-sm-5 mt-3">
                  <Form.Select aria-label="Default select example" className="select_color">
                    <option>Service</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <div className="col-sm-1 mt-3">
                  <Button className='refeshBtn'><HiOutlineRefresh /></Button>
                </div>
                <div className="col-sm-6 mt-3">
                  <Form.Select aria-label="Default select example" className="select_color">
                    <option>insurance</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <div className="col-sm-6 mt-3">
                  <div className='font-15'><span className='fw-bold'>First Name:</span> <span className='gray'>Johne</span></div>
                </div>
                <div className='mt-4'>
                  <button class="btn_green py-2 px-4 ms-2 ">Purchase Postage and Print</button>
                  <button class="btn_cancel py-2 px-4 ms-2 r_mt-2">Delete</button>
                  <button class="btn_blue py-2 px-4 ms-2 r_mt-2">Apply</button>
                  <button class="btn_blue py-2 px-4 float-end r_mt-2"><HiPlus />Shipment</button>
                </div>
              </Row>
            </div>
          </div>

         
          <div className='bg_row mt-4 p-4'>
            <Row>
            <h5 className='fw-bold'>Order Items</h5>
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

          <div className='bg_row mt-4 p-4'>
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
      </div>
    </>
  );
}
export default Tracking_info_inner;