import React from 'react';
import Row from 'react-bootstrap/Row';
import '../Stylesheet/Subheader.scss';
import { Container } from 'react-bootstrap';
// import Social_tab from './Social_tab';
import Social_Comment from './Social_Comment';



const Social = () =>{

return(
    <>
      <Container fluid>
            <Row className="">
              <div className="col-md-12">
                <Social_Comment />
              </div>
            </Row>
      </Container>
    </>
  );
}

export default Social;