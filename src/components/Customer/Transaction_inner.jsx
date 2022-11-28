
import '../Stylesheet/Update_invoice.scss';
import { Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { MdOutlineImageNotSupported } from "react-icons/md";
import * as React from 'react';

const Transaction_inner = () => {

  return (
    <>
      <div className='bg_row mt-3 p-4'>
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
    </>
  );
}

export default Transaction_inner;