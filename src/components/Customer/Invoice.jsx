import React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import OrdersTab from "./OrdersTab";
import Subheader from './Subheader';
import Customer_nav from './Customer_nav';
import Invoice_order from './Invoice_order';



const subheader = () =>{

return(
    <>
      <Container fluid className='p-4'>
        <Subheader />
            <Row className="">
              <div className="col-lg-12 col-md-12 col-xl-3 col-xxl-3 col-sm-12">
              <OrdersTab />
              </div>
              <div className=" col-lg-12 col-md-12 col-xl-9 col-xxl-9 col-sm-12">
              <div className='bg_col mt-4'>
                <Customer_nav />
                <Invoice_order/>
                </div>
              </div>
            </Row>
      </Container>
    </>
  );
}

export default subheader;

