import React from 'react';
import Row from 'react-bootstrap/Row';
import '../Stylesheet/Subheader.scss';
import { Container } from 'react-bootstrap';
// import Social_tab from './Social_tab';
import Customer_service_inner from './Customer_service_inner';



const Customer_service = () =>{

return(
    <>
      <Container fluid>
            <Row className="">
              <div className="col-md-12">
                <Customer_service_inner />
              </div>
            </Row>
      </Container>
    </>
  );
}

export default Customer_service;