import React from "react";
// import '../Stylesheet/Contact.scss';
import { Container, Form, Table } from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
import Inventory_tab from "./Inventory_tab";
const Shipping = () => {
    return (
        <>
            <Container fluid>
                <div className="bg_col mt-2">
                    <Inventory_tab />
                    Shipping
                </div>
            </Container>
        </>

    );
}
export default Shipping;