import React, { Component } from "react";
import {FormGroup,Col} from 'reactstrap';
import {ABSearch} from "../../components/ABSearch/ABSearch";
import {ABInputLabel} from "../../components/AllInputs/ABInputLabel";
import {ABSelectInput} from "../../components/AllInputs/ABSelectInput";
import {ABInput} from "../../components/AllInputs/ABInput";
import {ABQuality} from "../../components/ABQuality/ABQuality";
import "./Tags.css";
import {ABButton} from "../../components/ABButtons/ABButton";

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
                    <Col sm={"2"}>
                        <ABInputLabel/>
                        <ABSelectInput name={"id"}/>
                    </Col>
                    <Col sm={"2"}>
                        <ABInputLabel name={"Cases"}/>
                        <ABInput/>
                    </Col>
                    <Col sm={"2"} className={"colTo"}>
                        <ABInputLabel name={"to"}/>
                        <ABInput/>
                    </Col>
                    <Col sm={"2"}>
                        <ABInputLabel name={"Type"}/>
                        <ABSelectInput name={"systems"}/>
                    </Col>
                    <Col>
                        <button className='resetButton'><span>Reset</span></button>
                    </Col>
                </FormGroup>

            </div>
        )
    }
}
export default TagsNav