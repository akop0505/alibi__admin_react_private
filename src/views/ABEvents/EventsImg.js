import React from 'react';
import {Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import img1 from './img/img1.png';
import './EventsStyle.css';


class EventsImg extends React.Component{
   render(){
      return(
         <div className="animated fadeIn">
            <Row>
               <Col>
                  <Card className='eventImg'>
                     <img src={img1} width="80" height="80"/>
                  </Card>
               </Col>
               <Col>
                  <Card className='eventImg'>
                     <img src={img1} width="80" height="80"/>
                  </Card>
               </Col>
               <Col>
                  <Card className='eventImg'>
                     <img src={img1} width="80" height="80"/>
                  </Card>
               </Col>
               <Col>
                  <Card className='eventImg'>
                     <img src={img1} width="80" height="80"/>
                  </Card>
               </Col>
               <Col>
                  <Card className='eventImg'>
                     <img src={img1} width="80" height="80"/>
                  </Card>
               </Col>
               <Col>
                  <Card className='eventImg'>
                     <img src={img1} width="80" height="80"/>
                  </Card>
               </Col>
            </Row>
         </div>
      )
   }
}
export default EventsImg