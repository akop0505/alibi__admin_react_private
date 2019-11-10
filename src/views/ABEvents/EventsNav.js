import React from 'react';
import {
    Label,
    Button as bButton,
    Col as bCol,
    FormGroup as bFormGroup,
    Row,
  } from 'reactstrap';
import styled from 'styled-components';
import { ABSearch} from '../../components/ABSearch/ABSearch';
import {ABQuality} from "../../components/ABQuality/ABQuality";
import EventsInputGroup from './EventsImputGroup';
import {ABSelectInput} from "../../components/AllInputs/ABSelectInput";
import {ABMediaInput} from "../../components/AllInputs/ABMediaInput";
import {ABInput} from "../../components/AllInputs/ABInput";
import {ABDataInput } from '../../components/AllInputs/ABDataInput';
import {ABSortInput} from "../../components/AllInputs/ABSortInput";

const ButtonReset = styled(bButton)`
width:100%
padding-top: 2px;
padding-bottom: 2px;


`;
const ButtonAddCase = styled(bButton)`
width: 100%;
padding-top: 2px;
padding-bottom: 2px;
`;
const Col = styled(bCol)`
padding-left:5px !important;
padding-right:5px !important;

`;

class EventsNav extends React.Component{
    render(){
        return(
            <div>
                <Row>
                    <Col  lg='3' md='5' sm='8' xs='9'>
                        <ABSearch/>
                    </Col>
                    <Col lg='1' md='2' sm='4' xs='3'>
                        <ABQuality name={"5 cases"}/>
                    </Col>
                    <Col  lg='2' md='3' sm='4' xs='5'>
                        <ButtonAddCase color={'dark'} onClick={()=>{ this.props.history.push('/events/create')}}><span>New Case</span> <i className="fa fa-plus"></i></ButtonAddCase>
                    </Col>
                    <Col  lg={{offset:4,size:2}} md={{offset:0,size:2}} sm={{offset:4,size:4}} xs='4'>
                        <ButtonReset color={'danger'}><span>Reset</span></ButtonReset>
                    </Col>
                </Row>
                <Row>
                    <Col lg='2' md='3' sm='4' xs='8'>
                        <ABSortInput/>
                    </Col>
                    <Col lg='3' md='9' sm='8' xs='12'>
                        <ABMediaInput/>
                    </Col>
                    <Col lg='1' md='3' sm='4' xs='8'>
                        <Label htmlFor="prependedInput">Header</Label>
                        <ABSelectInput/>
                    </Col>
                    <Col lg='3' md='3' sm='4' xs='8'>
                        <ABDataInput name1={"Cases from"} name2={"to"}/>
                    </Col>
                    <Col lg='2' md='3' sm='4' xs='8'>
                        <Label htmlFor="prependedInput">Label</Label>
                        <ABSelectInput/>
                    </Col>
                    <Col lg='1' md='3' sm='4' xs='8'>
                        <Label htmlFor="prependedInput">Location</Label>
                        <ABInput/>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default EventsNav