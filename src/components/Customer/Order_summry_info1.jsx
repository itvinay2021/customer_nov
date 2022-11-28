import React from 'react';
import Row from 'react-bootstrap/Row';
import '../Stylesheet/Subheader.scss';
import { Container } from 'react-bootstrap';
import OrdersTab from "./OrdersTab";
// import OrderSummry from "./OrderSummry1";
import Subheader from './Subheader';


const subheader = () =>{

return(
    <>
      <Container fluid className='p-4'>
        <Subheader />
            <Row className="">
              <div className="col-lg-12 col-xl-3 col-md-12">
              <OrdersTab />
              </div>
              <div className=" col-lg-12 col-xl-9 col-md-12">
                {/* <OrderSummry /> */}
              </div>
            </Row>
      </Container>
    </>
  );
}

export default subheader;

