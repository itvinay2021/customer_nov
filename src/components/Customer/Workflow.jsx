import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Workflow_inner from "./Workflow_inner";
import Subheader from './Subheader';


const Workflow = () => {
    
    return(
      <>
        <Container fluid className='p-4'>
          <Subheader />
              <Row className="">              
                <div className=" col-lg-12 col-md-12">
                  <div className='mt-4'>
                  <Workflow_inner />
                  </div>
                </div>
              </Row>
        </Container>
      </>
    );
}
export default Workflow;