import React from "react";
// import '../Stylesheet/Contact.scss';
import { Container} from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
import Inventory_tab from "./Inventory_tab";
const Advanced = () => {
    return (
        <>
            <Container fluid>
                <div className="bg_col mt-2">
                    <Inventory_tab />
                    Advanced
                </div>
            </Container>
        </>

    );
}
export default Advanced;