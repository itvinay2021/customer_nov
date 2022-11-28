import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Subscription_inner from "./Subscription_inner";
import Subheader from './Subheader';


const Subscription = () => {
    

    return(
      <>
        <Container fluid className='p-4'>
          <Subheader />
              <Row className="">              
                <div className=" col-lg-12 col-md-12">
                  <Subscription_inner />
                </div>
              </Row>
        </Container>
      </>
    );
}
export default Subscription;