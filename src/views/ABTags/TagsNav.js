import React, { Component } from "react";
import styled from 'styled-components';
import {FormGroup as bFormGroup, Col, Button as bButton, Label} from 'reactstrap';
import {ABSearch} from "../../components/ABSearch/ABSearch";
import {ABInputLabel} from "../../components/AllInputs/ABInputLabel";
import {ABSelectInput} from "../../components/AllInputs/ABSelectInput";
import {ABInput} from "../../components/AllInputs/ABInput";
import {ABQuality} from "../../components/ABQuality/ABQuality";
import {ABSortInput} from "../../components/AllInputs/ABSortInput";
import "./Tags.css";

const Button = styled(bButton)`
    width: 100%;
    margin-top: 29px;
    padding-top: 2px;
    padding-bottom: 2px;
`;
const Icon = styled.i`
    margin-top: 29px;
    margin-left: 0px;
    padding: 6.5px;
    color:#333333;
    border: 0.5px solid #C8CED3;
    border-radius: 5px;
`;
const FormGroup = styled(bFormGroup)`
    margin-left: 0px;
    margin-right: 0px;
`;

class TagsNav extends Component{
    render(){
        return(
            <div>
                <FormGroup row>
                    <Col sm={"4"}>
                        <ABSearch/>
                    </Col>
                    <ABQuality name={"5 tags"}/>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label htmlFor="prependedInput">Sort By</Label>
                        <ABSortInput />
                    </Col>
                    <Col>
                        <ABInputLabel name={"Cases"}/>
                        <ABInput/>
                    </Col>
                    <Col  className={"colTo"}>
                        <ABInputLabel name={"to"}/>
                        <ABInput/>
                    </Col>
                    <Col>
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