import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import CustomerPickup_inner from "./CustomerPickup_inner";
import Subheader from './Subheader';


const Customer_Pickup = () => {
    
    return(
      <>
        <Container fluid className='p-4'>
          <Subheader />
              <Row className="">              
                <div className=" col-lg-12 col-md-12">
                  <CustomerPickup_inner />
                </div>
              </Row>
        </Container>
      </>
    );
} 
export default Customer_Pickup;