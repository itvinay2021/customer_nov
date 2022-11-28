import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Attechment_info from "./Attechment_inner";
import Subheader from './Subheader';


const Attechment = () => {
    

    return(
      <>
        <Container fluid className='p-4'>
          <Subheader />
              <Row className="">              
                <div className=" col-lg-12 col-md-12">
                  <Attechment_info />
                </div>
              </Row>
        </Container>
      </>
    );
}
export default Attechment;