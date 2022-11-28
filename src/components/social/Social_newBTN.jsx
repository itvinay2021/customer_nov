import { Form, Row } from 'react-bootstrap';
// import '../Stylesheet/Contact.scss';
import Social_tab from "./Social_tab";
import { BiRepost } from "react-icons/bi";
import React, { useState } from 'react';
import { GoGlobe } from "react-icons/go";
import { MdEmojiFlags, MdOutlineBrokenImage } from "react-icons/md";
import { TbUpload } from "react-icons/tb";
import { FiUploadCloud } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import '../Stylesheet/Social_tab.scss';



const Social_newBTN = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <div className="container-fluid">
                <div className="bg_col mt-2">
                    <Row>
                        <Social_tab />
                        <hr className="mb-4 mt-3"></hr>
                        <div className="col-md-12">
                            <div className='container'>
                                <h4>Platform</h4>
                                <div className="row mt-4">
                                    <div className="col-md-4">
                                        <div className="d-flex">
                                            <BiRepost className="font-20 me-2" />
                                            <div className="">
                                                <div className="d-flex">
                                                    <h6 className='me-3 fw-bold'>Post Immediately</h6><Form.Check type="radio" name="group2" id="radio1" />
                                                </div>
                                                <p>Post Immediately</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex">
                                            <BiRepost className="font-20 me-2" />
                                            <div className="">
                                                <div className="d-flex">
                                                    <h6 className='me-3 fw-bold'>Schedule</h6><Form.Check type="radio" name="group2" id="radio2" />
                                                </div>
                                                <p>Schedule Post</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div>
                                            <h6>Schedule first post for</h6>
                                            <Form.Control type="date" name="datepic" placeholder="DateRange" value={date} onChange={(e) => setDate(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <h6 className='mt-4 fw-bold'>Title *</h6>
                                        <Form.Control placeholder="Address" />
                                        <h6 className='mt-4 fw-bold'>Description *</h6>
                                        <Form.Control as="textarea" rows={6} placeholder='User Comments' />
                                    </div>


                                    <Row className='mt-5'>
                                        <h4 className='mb-4'>Destination</h4>
                                        <div className="col-md-4">
                                            <div className="d-flex">
                                                <GoGlobe className="font-20 me-2" />
                                                <div className="">
                                                    <div className="d-flex">
                                                        <h6 className='me-3 fw-bold'>Website</h6><Form.Check type="radio" name="group2" id="radio3" />
                                                    </div>
                                                    <Form.Select aria-label="Default select example" className="">
                                                        <option>Select Country</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="d-flex">
                                                <MdEmojiFlags className="font-20 me-2" />
                                                <div className="">
                                                    <div className="d-flex">
                                                        <h6 className='me-3 fw-bold'>Other</h6><Form.Check type="radio" name="group2" id="radio4" />
                                                    </div>
                                                    <Form.Control placeholder="Zip" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="d-flex">
                                                <GrLocation className="font-20 me-2" />
                                                <div className="">
                                                    <div className="d-flex">
                                                        <h6 className='me-3 fw-bold'>No Destination</h6><Form.Check type="radio" name="group2" id="radio5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>

                                    <hr className="mb-4 mt-5"></hr>

                                    <Row className='mt-4'>
                                        <h4 className='mb-4'>Image</h4>
                                        <div className="col-md-4">
                                            <div className="d-flex">
                                                <TbUpload className="font-20 me-2" />
                                                <div className="">
                                                    <div className="d-flex">
                                                        <h6 className='me-3 fw-bold'>Upload Image</h6><Form.Check type="radio" name="group2" id="radio3" />
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="d-flex">
                                                <FiUploadCloud className="font-20 me-2" />
                                                <div className="">
                                                    <div className="d-flex">
                                                        <h6 className='me-3 fw-bold'>No Image</h6><Form.Check type="radio" name="group2" id="radio4" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="d-flex">
                                                <MdOutlineBrokenImage className="font-20 me-2" />
                                                <div className="">
                                                    <div className="d-flex">
                                                        <h6 className='me-3 fw-bold'>Landing Page Thumbnail</h6><Form.Check type="radio" name="group2" id="radio5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </Row>
                                    <Row>
                                        <div className='col-md-4'>
                                        <div className='dropFile mt-5'>
                                                        <label for="images" class="drop-container">
                                                            <span class="drop-title">Drop files here</span>
                                                            or
                                                            <input type="file" id="images" accept="image/*" required />
                                                        </label>
                                                    </div>
                                        </div>
                                        <div className='col-md-12'>
                                        <div className="float-end">
                                            <button className="btn_cancel ">Cancel</button>
                                            <button className="btn_save ms-2 ">Save</button>
                                        </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </div>
        </>
    );
}
export default Social_newBTN;
