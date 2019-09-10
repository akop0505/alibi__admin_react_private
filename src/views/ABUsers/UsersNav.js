import React from 'react';
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Fade,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupText,
    Label,
    Row,
  } from 'reactstrap';
import {ABSelectInput} from "../../components/AllInputs/ABSelectInput";
import {ABInput} from "../../components/AllInputs/ABInput";
import {ABDataInput} from "../../components/AllInputs/ABDataInput";
import {ABInputLabel} from "../../components/AllInputs/ABInputLabel";
import "./UserTamplate.css"


class UserNav extends React.Component{
    render(){
        return(
            <div className={'text-start'}>
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
        )
    }
}
export default UserNav