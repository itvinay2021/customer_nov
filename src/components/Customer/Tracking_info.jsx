import React from "react";
import OrdersTab from "./OrdersTab";
import { Row, Container } from 'react-bootstrap';
import Tracking_info_inner from "./Tracking_info_inner";
import Subheader from "./Subheader";
import Customer_nav from "./Customer_nav";


const tracking_info = () => {

    return(
        <>
            <Container fluid className='p-4'>
                <Subheader />
                {/* <Customer_nav /> */}
                <Row className="">
                    <div className="col-lg-12 col-xl-3 col-md-12">
                        <OrdersTab />
                    </div>
                    <div className=" col-lg-12 col-xl-9 col-md-12">
                        <Customer_nav />
                        <Tracking_info_inner/>
                    </div>
                </Row>
            </Container>
        </>
    );
}
export default tracking_info;