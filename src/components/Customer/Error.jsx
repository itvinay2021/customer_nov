import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Error_inner from "./Error_inner";
import OrdersTab from "./OrdersTab";
import Subheader from './Subheader';


const Customer = () => {
    

    return(
      <>
        <Container fluid className='p-4'>
          <Subheader />
              <Row className="">
                <div className="col-lg-12 col-md-12 col-xl-3 col-xxl-3 col-sm-12">
                <OrdersTab />
                </div>
                <div className="col-lg-12 col-md-12 col-xl-9 col-xxl-9 col-sm-12">
                  <Error_inner />
                </div>
              </Row>
        </Container>
      </>
    );
}
export default Customer;