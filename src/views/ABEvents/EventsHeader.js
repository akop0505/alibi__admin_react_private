import React from 'react';
import {Card, CardBody, Label, Col, Row} from 'reactstrap';
import styled from 'styled-components';

const DivTitle = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 19px;
line-height: 22px;
color:#909090;
`;
const DivHeader = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 18px;
color:#909090;
`;

class EventsHeader extends React.Component{
    render(){
        return(
            <Row>
                <Col lg='7' md='7' sm='7' xs='7'>
                    <DivTitle>Kraft Beer</DivTitle>
                    <DivHeader>The best beer for you</DivHeader>
                </Col>
                <Col lg='5' md='5' sm='5' xs='5'><span>04/01/2019 12:45</span></Col>
            </Row>
        )
    }
}
export default EventsHeader