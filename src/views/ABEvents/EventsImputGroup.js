import React from 'react';
import {
    Button as bButton,
    Col ,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
  } from 'reactstrap';
import styled from 'styled-components';
import {ABSelectInput} from "../../components/AllInputs/ABSelectInput";
import {ABMediaInput} from "../../components/AllInputs/ABMediaInput";
import {ABInput} from "../../components/AllInputs/ABInput";
import { ABDataInput } from '../../components/AllInputs/ABDataInput';
import {ABSortInput} from "../../components/AllInputs/ABSortInput";


// const Col = styled(bCol)`
// padding-left:8px !important;
// padding-right:8px !important;
// `;
  class EventsInputGroup extends React.Component{
    render(){
        return(
            <div>
                <Row>
                    <Col lg='2' md='3' sm='4' xs='12'>
                        <ABSortInput/>
                    </Col>
                    
                    <Col lg='1' md='3' sm='4' xs='12'>
                        <ABMediaInput name={"Images"}/>
                    </Col>
                    <Col lg='1' md='3' sm='4' xs='12'>
                        <ABMediaInput name={"Video"}/>
                    </Col>
                    <Col lg='1' md='3' sm='4' xs='12'>
                        <ABMediaInput name={"Audio"}/>
                    </Col>
                    <Col lg='1' md='3' sm='4' xs='12'>
                        <Label htmlFor="prependedInput">Header</Label>
                        <ABSelectInput/>
                    </Col>
                    <Col lg='3' md='3' sm='4' xs='12'>
                        
                        <ABDataInput name1={"Cases from"} name2={"to"}/>
                    </Col>
                    <Col lg='2' md='3' sm='4' xs='12'>
                        <Label htmlFor="prependedInput">Label</Label>
                        <ABSelectInput/>
                    </Col>
                    <Col lg='1' md='3' sm='4' xs='12'>
                        <Label htmlFor="prependedInput">Location</Label>
                        <ABInput/>
                    </Col>
                </Row>

            </div>
        )
    }
}
export default EventsInputGroup