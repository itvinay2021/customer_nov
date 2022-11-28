import React from "react";
// import '../Stylesheet/Contact.scss';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Inventry_table from "./Inventry_table";
const Inventory = () => {
    return (
        <>
            <Container fluid>
                <Row className="">
                    <div className="col-md-12">
                        <Inventry_table />
                    </div>
                </Row>
            </Container>
        </>
    );

}
export default Inventory;