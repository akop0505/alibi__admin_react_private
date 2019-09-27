import React from 'react';
import {
    Col,
    Form,
    FormGroup,
  } from 'reactstrap';
import {ABSelectInput} from "../../components/AllInputs/ABSelectInput";
import {ABInput} from "../../components/AllInputs/ABInput";
import {ABDataInput} from "../../components/AllInputs/ABDataInput";
import {ABInputLabel} from "../../components/AllInputs/ABInputLabel";
import {ABSearch} from "../../components/ABSearch/ABSearch";
import {ABQuality} from "../../components/ABQuality/ABQuality";
import "./Users.css";


class UserNav extends React.Component{
    render(){
        return(
            <div>
                <FormGroup row>
                    <Col sm={"4"}>
                        <ABSearch/>
                    </Col>
                    <ABQuality name={"5 users"}/>
                </FormGroup>
                <div className={'text-start'} style={{marginLeft:"10px"}}>
                    <Form action="" method="post" className="form-horizontal">           
                        <FormGroup row>
                            <Col className="col-padding-5">
                                <ABInputLabel/>
                                <ABSelectInput/>
                            </Col>
                            <Col className="col-padding-5">
                                <ABInputLabel name={"Registration"}/> 
                                <ABSelectInput name={"yes"}/>
                            </Col>
                            <Col className="col-padding-5">
                                <ABInputLabel name={"Registered from"}/> 
                                <ABDataInput/>
                            </Col>
                            <Col className="col-padding-5">
                                <ABInputLabel name={"to"}/> 
                                <ABInput/>
                            </Col>
                            <Col className="col-padding-5">
                                <ABInputLabel name={"Cases from"}/> 
                                <ABInput/>
                            </Col>
                            <Col className="col-padding-5">
                                <ABInputLabel name={"to"}/> 
                                <ABInput/>
                            </Col>
                            <Col className="col-padding-5">
                                <ABInputLabel name={"Location"}/> 
                                <ABInput/>
                            </Col>
                            <Col className="col-padding-5">
                                <ABInputLabel name={"Position"}/> 
                                <ABInput/>
                            </Col>
                            <Col>
                                <button className='resetButton'><span>Reset</span></button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}
export default UserNav