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
    width: 25%;
    margin-top: 29px;
    padding-top: 2px;
    padding-bottom: 2px;
    float:right;

`;
const Icon = styled.i`
    margin-top: 29px;
    margin-left: 0px;
    padding: 6.5px;
    color:#333333;
    border: 0.5px solid #C8CED3;
    border-radius: 5px;
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
                    <Col md={"4"}>
                        <ABSearch/>
                    </Col>
                    <ColQuality xs={"1"}>
                        <ABQuality name={"5 tags"}/>
                    </ColQuality>  
                </FormGroup>
                <FormGroup row>
                    <Col sm={"auto"}>
                        <ABSortInput />
                    </Col>
                    <Col sm={"3"}>
                        <ABCasesFromToInput name1={"Cases from"} name2={"to"}/>
                    </Col>
                    <Col sm={"auto"}>
                        <ABInputLabel name={"Type"}/>
                        <ABSelectInput name={"systems"}/>
                    </Col>
                    <Col>
                        <Button color={'danger'} ><span>Reset</span></Button>
                    </Col>
                </FormGroup>

            </div>
        )
    }
}
export default TagsNav