import React, { Component } from "react";
import styled from 'styled-components';
import {FormGroup as bFormGroup, Col as bCol, Button as bButton} from 'reactstrap';
import {ABSearch} from "../../components/ABSearch/ABSearch";
import {ABInputLabel} from "../../components/AllInputs/ABInputLabel";
import {ABSelectInput} from "../../components/AllInputs/ABSelectInput";
import {ABInput} from "../../components/AllInputs/ABInput";
import {ABQuality} from "../../components/ABQuality/ABQuality";
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
    padding: 5px;
    border: 1px solid black;
`;
const Col = styled(bCol)`
    padding: 2px;
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
                        <ABInputLabel/>
                        <ABSelectInput name={"id"}/>
                    </Col>
                    <Col md={'1'} sm={'1'}>
                        <Icon className="fa fa-sort-amount-desc"></Icon>
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