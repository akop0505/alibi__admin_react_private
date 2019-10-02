import React from 'react';
import {
    Button as bButton,
    Col as bCol,
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

const Icon = styled.i`
    margin-top: 29px;
    margin-left: 0px;
    padding: 6.5px;
    color:#333333;
    border: 0.5px solid #C8CED3;
    border-radius: 3px;
`;
const Col = styled(bCol)`
padding-left:8px !important;
padding-right:8px !important;
`
  class EventsInputGroup extends React.Component{
    render(){
        return(
            <div>
                <Row>
                    <Col>
                        <ABSortInput/>
                    </Col>
                    
                    <Col>
                        <ABMediaInput name={"Images"}/>
                    </Col>
                    <Col>
                        <ABMediaInput name={"Video"}/>
                    </Col>
                    <Col>
                        <ABMediaInput name={"Audio"}/>
                    </Col>
                    <Col>
                        <Label htmlFor="prependedInput">Header</Label>
                        <ABSelectInput/>
                    </Col>
                    <Col xs={"3"}>
                        
                        <ABDataInput name1={"Cases from"} name2={"to"}/>
                    </Col>
                    <Col>
                        <Label htmlFor="prependedInput">Label</Label>
                        <ABSelectInput/>
                    </Col>
                    <Col>
                        <Label htmlFor="prependedInput">Location</Label>
                        <ABInput/>
                    </Col>
                </Row>

            </div>
        )
    }
}
export default EventsInputGroup