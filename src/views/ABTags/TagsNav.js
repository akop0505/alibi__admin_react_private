import React, { Component } from "react";
import styled from 'styled-components';
import {FormGroup as bFormGroup, Col as bCol, Button as bButton, Label} from 'reactstrap';
import {ABSearch} from "../../components/ABSearch/ABSearch";
import {ABInputLabel} from "../../components/AllInputs/ABInputLabel";
import {ABSelectInput} from "../../components/AllInputs/ABSelectInput";
import {ABInput} from "../../components/AllInputs/ABInput";
import {ABQuality} from "../../components/ABQuality/ABQuality";
import {ABSortInput} from "../../components/AllInputs/ABSortInput";
import {ABCasesFromToInput} from "../../components/AllInputs/ABCasesFromToInput";
import "./Tags.css";

const Button = styled(bButton)`
    width: 100%;
    margin-top: 29px;
    padding-top: 2px;
    padding-bottom: 2px;

`;
const Col = styled(bCol)`
padding-left:8px !important;
padding-right:8px !important;
`;
const FormGroup = styled(bFormGroup)`
margin-left:-8px !important;
margin-right:-8px !important;
`;
const ColQuality = styled(Col)`
padding: 5px !important;
`;

class TagsNav extends Component{
    render(){
        return(
            <div>
                <FormGroup row>
                    <Col lg='3' md='5' sm='8' xs='9'>
                        <ABSearch/>
                    </Col>
                    <ColQuality lg='2' md='3' sm='4' xs='3'>
                        <ABQuality name={"5 tags"}/>
                    </ColQuality>  
                </FormGroup>
                <FormGroup row>
                    <Col lg='2' md='3' sm='4' xs='6'>
                        <ABSortInput />
                    </Col>
                    <Col lg='3' md='4' sm='8' xs='12'>
                        <ABCasesFromToInput name1={"Cases from"} name2={"to"}/>
                    </Col>
                    <Col lg='2' md='3' sm='4' xs='6'>
                        <ABInputLabel name={"Type"}/>
                        <ABSelectInput name={"systems"}/>
                    </Col>
                    <Col lg={{size:2, offset:3}} md='2' sm={{offset:4,size:4}} xs='6'>
                        <Button color={'danger'} ><span>Reset</span></Button>
                    </Col>
                </FormGroup>

            </div>
        )
    }
}
export default TagsNav