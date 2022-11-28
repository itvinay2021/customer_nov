import React from "react";
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from "./Dashboard";
// import Order_summry_info from "./Order_summry_info1";
import Auth_capture from "./Auth_capture";
import Update_invoice from "./Update_invoice";
import Transaction from "./Transaction_inner";
import Tracking_info from "./Tracking_info";
import Adjust_product from "./Adjust_product";
import Note from "./Note";
import Attechment from "./Attechment";
import Subscription from "./Subscription";
import Customer_Pickup from "./Customer_Pickup";
import Workflow from "./Workflow";
import Tab_transaction from "./Tab_section";
import Tab_tracking from "./Tab_tracking";
import Invoice from "./Invoice";
import Create_invoice from "./Create_invoice";
import Contact from "./Contact";
import Email from "./Email";
import Social_Comment from "../social/Social_Comment";
import Social_PostScheduled from "../social/Social_PostScheduled";
import Social_newBTN from "../social/Social_newBTN";
import Inventory from "../inventory/Inventory";
import Product_details from "../inventory/Product_details";
import Advanced from "../inventory/Advanced";
import Shipping from "../inventory/Shipping";
import Supplier from "../inventory/Supplier";
import Log from "../inventory/Log";
import Trial from "../inventory/Trial";
import Declined from "./Declined";
import Error from "./Error";
import Customer_service from "./Customer_service";



import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

const RoutesMap = () => {

    return (
        <>
            <Router>
                <Sidebar />
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        {/* <Route path="/OrderSummry" element={<Order_summry_info />} /> */}
                        <Route path="/Auth_capture" element={<Auth_capture />} />
                        <Route path="/Update_invoice" element={<Update_invoice />} />
                        <Route path="/Tracking_info" element={<Tracking_info />} />
                        <Route path="/Adjust_product" element={<Adjust_product />} />
                        <Route path="/Transaction" element={<Transaction/>} />
                        <Route path="/Note" element={<Note />} />
                        <Route path="/Attechment" element={<Attechment />} />
                        <Route path="/Subscription" element={<Subscription />} />
                        <Route path="/Customer_Pickup" element={<Customer_Pickup />} />
                        <Route path="/Workflow" element={<Workflow />} />
                        <Route path="/Tab_transaction" element={<Tab_transaction />} />
                        <Route path="/Tab_tracking" element={<Tab_tracking />} />
                        <Route path="/Invoice" element={<Invoice />} />
                        <Route path="/Create_invoice" element={<Create_invoice />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/Email" element={<Email />} />
                        <Route path="/Social_Comment" element={<Social_Comment />} />
                        <Route path="/Social_PostScheduled" element={<Social_PostScheduled />} />
                        <Route path="/Social_newBTN" element={<Social_newBTN />} />
                        <Route path="/Inventory" element={<Inventory />} />
                        <Route path="/Product_details" element={<Product_details />} />
                        <Route path="/Advanced" element={<Advanced />} />
                        <Route path="/Shipping" element={<Shipping />} />
                        <Route path="/Supplier" element={<Supplier />} />
                        <Route path="/Log" element={<Log />} />
                        <Route path="/Trial" element={<Trial />} />
                        <Route path="/Declined" element={<Declined />} />
                        <Route path="/Error" element={<Error />} />
                        <Route path="/Customer_service" element={<Customer_service />} />
                    </Routes>
                </div> 
            </Router >
        </>
    );
};

export default RoutesMap;
