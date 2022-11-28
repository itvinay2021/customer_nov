import '../Stylesheet/OrderSection.css';
import * as React from 'react';
import Row from 'react-bootstrap/Row';
import '../Stylesheet/Subheader.scss';
// import { Container } from 'react-bootstrap';
import Transaction_inner from "./Transaction_inner";
import OrdersTab from "./OrdersTab";
import Subheader from './Subheader';


const Transaction = () => {
    

    return(
      <>
        <div className='contianer-fluid p-4'>
          <Subheader />
              <Row className="">
                <div className="col-lg-12 col-xl-3 col-md-12">
                <OrdersTab />
                </div>
                <div className=" col-lg-12 col-xl-9 col-md-12">
                  <Transaction_inner />
                </div>
              </Row>
        </div>
      </>
    );
}
export default Transaction;