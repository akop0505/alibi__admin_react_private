import React from 'react';
import {Card as bCard, 
        CardBody,
        Label,
        Col as bCol, 
        Row,
    } from 'reactstrap';
import EventCollaps from './EventCollaps';
import './EventsStyle.css';
import EventsImg from './EventsImg'
import EventsText from './EventsText';
import EventsHeader from './EventsHeader';
import styled from 'styled-components';

const Col = styled(bCol)`
padding-left:5px !important;
padding-right:5px !important;
padding-top:6px !important;
padding-bottom:6px !important;
margin-bottom:30px;`;

const Card = styled(bCard)`
padding:0 15px 0 15px !important`;

class EventV1 extends React.Component{
    render(){
        return(
            <div>
                <Row>
                    <Col xs="12"  md='6' lg='4' sm='12'>
                        <Card>
                            <EventsHeader/>
                            <EventCollaps/>
                            <EventsText/>
                            <EventsImg/>
                        </Card>
                    </Col>
                    <Col xs="12"  md='6' lg='4' sm='12'>
                        <Card>
                            <EventsHeader/>
                            <EventCollaps/>
                            <EventsText/>
                            <EventsImg/>
                        </Card>
                    </Col>
                    <Col xs="12"  md='6' lg='4' sm='12'>
                        <Card>
                            <EventsHeader/>
                            <EventCollaps/>
                            <EventsText/>
                            <EventsImg/>
                        </Card>
                    </Col>
                </Row>  
            </div>
        )
    }
}
export default EventV1