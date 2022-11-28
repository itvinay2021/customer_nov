import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Form } from 'react-bootstrap';
import carban from '../../assets/carban.svg';
import '../Stylesheet/OrderTab.scss';
import { BsChevronRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import '../Stylesheet/Responsive.scss'; 

const newOrder = () => {

    return(
    <div className="p-4 bg_col_100h">
      {/* <Row xs={1} md={2} className="g-4">
      <div className="col-lg-12">
        <Form.Control size="lg" type="text" placeholder="Normal text" className='orderSerch'/>
      </div>
        {Array.from({ length: 5 }).map((_, idx) => (
          <div className="col-lg-12">
            <Card style={{}} id={idx} className='mb-2 border-0 card_order'>
              <div className='d-flex imguser bg_card_order position-relative'>
                <div className="icon_carban">
                  <img src={carban} alt="user" className='mx-3 orderimg' />
                </div>
                <div>
                  <div className='fw-bold font-18'>2/$0.00</div>
                  <span className='orderText font-12'>Invoice<BsChevronRight /></span>
                  <span className='font-12'>$322.00</span>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </Row> */}
      <Row >
      <div className="col-lg-12">
        <Form.Control size="lg" type="text" placeholder="Normal text" className='orderSerch mb-4'/>
      </div>
          <div className="col-lg-12">
          <Link to="/Invoice" className='text-decoration-none txt_black'>
            <Card  className='mb-4 border-0 card_order1'>
              <div className='d-flex imguser bg_card_order position-relative'>
                <div className="icon_carban">
                  <img src={carban} alt="user" className='ms-2 me-3 orderimg' />
                </div>
                <div>
                  <div className='fw-bold font-18'>2/$0.00</div>
                  <span className='orderText font-12'>INVOICE<BsChevronRight /></span>
                  <span className='font-12'>$322.00</span>
                </div>
              </div>
            </Card>
            </Link>
          </div>
          <div className="col-lg-12">
          <Link to="/Auth_capture" className='text-decoration-none txt_black'>
            <Card  className='mb-4 border-0 card_order2'>
              <div className='d-flex imguser bg_card_order position-relative'>
                <div className="icon_carban">
                  <img src={carban} alt="user" className='ms-2 me-3 orderimg' />
                </div>
                <div>
                  <div className='fw-bold font-18'>2/$0.00</div>
                  <span className='orderText font-12'>AUTH_CAPTURE<BsChevronRight /></span>
                  <span className='font-12'>$322.00</span>
                </div>
              </div>
            </Card>
            </Link>
          </div>
          <div className="col-lg-12">
          <Link to="/Declined" className='text-decoration-none txt_black'>
            <Card  className='mb-4 border-0 card_order3'>
              <div className='d-flex imguser bg_card_order position-relative'>
                <div className="icon_carban">
                  <img src={carban} alt="user" className='ms-2 me-3 orderimg' />
                </div>
                <div>
                  <div className='fw-bold font-18'>2/$0.00</div>
                  <span className='orderText font-12'>DECLINED<BsChevronRight /></span>
                  <span className='font-12'>$322.00</span>
                </div>
              </div>
            </Card>
            </Link>
          </div>
          <div className="col-lg-12">
          <Link to="/Error" className='text-decoration-none txt_black'>
            <Card  className='mb-4 border-0 card_order4'>
              <div className='d-flex imguser bg_card_order position-relative'>
                <div className="icon_carban">
                  <img src={carban} alt="user" className='ms-2 me-3 orderimg' />
                </div>
                <div>
                  <div className='fw-bold font-18'>2/$0.00</div>
                  <span className='orderText font-12'>ERROR<BsChevronRight /></span>
                  <span className='font-12'>$322.00</span>
                </div>
              </div>
            </Card>
            </Link>
          </div>
          <div className="col-lg-12">
          <Link to="/Invoice" className='text-decoration-none txt_black'>
            <Card  className='mb-4 border-0 card_order5'>
              <div className='d-flex imguser bg_card_order position-relative'>
                <div className="icon_carban">
                  <img src={carban} alt="user" className='ms-2 me-3 orderimg' />
                </div>
                <div>
                  <div className='fw-bold font-18'>2/$0.00</div>
                  <span className='orderText font-12'>INVOICE<BsChevronRight /></span>
                  <span className='font-12'>$322.00</span>
                </div>
              </div>
            </Card>
            </Link>
          </div>
         
      
      </Row>
    </div>
    );
}
export default newOrder;