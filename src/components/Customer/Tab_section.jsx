import React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import OrdersTab from "./OrdersTab";
import Subheader from './Subheader';
import Customer_nav from './Customer_nav';
import Transaction_inner from './Transaction_inner';


const Tab_section = () =>{

return(
    <>
       <div className='contianer-fluid p-4'>
        <Subheader />
            <Row className="">
              <div className="col-lg-12 col-xl-3 col-md-12">
              <OrdersTab />
              </div>
              <div className=" col-lg-12 col-xl-9 col-md-12">
                <div className='bg_col mt-4'>
                <Customer_nav />
                <Transaction_inner/>
                </div>
              </div>
            </Row>
      </div>
    </>
  );
}

export default Tab_section;

