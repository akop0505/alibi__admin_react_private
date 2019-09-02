import React from 'react';
import {Card, CardBody, Label, Col, Row } from 'reactstrap';
import EventCollaps from './EventCollaps';
import './EventsStyle.css';
import EventsImg from './EventsImg'
import EventsText from './EventsText';
import EventsHeader from './EventsHeader';

class EventV1 extends React.Component{
    render(){
        return(
            <div className="eventsBody">
                <Row>
                    <Col xs="12"  md="4">
                        <Card  className='cardBody'>
                            <EventsHeader/>
                            <div className='svgDown'>
                                <EventCollaps/>
                            </div>
                            <CardBody>
                                <EventsText/>
                                <EventsImg/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12"  md="4">
                        <Card  className='cardBody'>
                            <EventsHeader/>
                            <div className='svgDown'>
                                <EventCollaps/>
                            </div>
                            <CardBody>
                                <EventsText/>
                                <EventsImg/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12"  md="4">
                        <Card  className='cardBody'>
                            <EventsHeader/>
                                <div className='svgDown'>
                                <EventCollaps/>
                                </div>
                            <CardBody>
                                <EventsText/>
                                <EventsImg/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                
            </div>
        )
    }
}
export default EventV1