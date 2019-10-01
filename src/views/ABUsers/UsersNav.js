import React from 'react';
import {
    Row,
    Col as bCol,
    Form,
    FormGroup as bFormGroup,
    Button as bButton
  } from 'reactstrap';
import styled from 'styled-components';
import {ABSelectInput} from "../../components/AllInputs/ABSelectInput";
import {ABInput} from "../../components/AllInputs/ABInput";
import {ABDataInput} from "../../components/AllInputs/ABDataInput";
import {ABInputLabel} from "../../components/AllInputs/ABInputLabel";
import {ABSearch} from "../../components/ABSearch/ABSearch";
import {ABQuality} from "../../components/ABQuality/ABQuality";
import {ABSortInput} from "../../components/AllInputs/ABSortInput";
import "./Users.css";

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
margin-left:10px !important;
margin-right:8px !important;
`

class UserNav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            optionData1: [{key:1,value:"Yes"},{key:2,value:"No"}],
            optionData2: [{index:1,name:"year"},{index:2,name:"month"},{index:3,name:"day"}]
        } 
    }

    render(){
        console.log(this.state);
        return(
            <div>
                <FormGroup row>
                    <Col sm={"4"}>
                        <ABSearch/>
                    </Col>
                    <ABQuality name={"5 users"}/>
                </FormGroup>
                <div className={'text-start'} style={{marginLeft:"10px"}}>
                    <Form action="" method="post" >           
                        <FormGroup>
                            <Row>
                            <Col  >
                                <ABInputLabel/>
                                <ABSortInput 
                                    placeholder = {"Select 1"}
                                    optionData = {this.state.optionData1}
                                />
                            </Col>
                            <Col >
                                <ABInputLabel name={"Registration"}/> 
                                <ABSelectInput
                                    optionKey={'index'} 
                                    optionValue={'name'} 
                                    placeholder = {"Period"}
                                    optionData = {this.state.optionData2}
                                />
                            </Col>
                            <Col md={'3'} sm={'3'}>
                                <ABDataInput name1={"Registered from"} name2={"to"}/>
                            </Col>
                            <Col >
                                <ABInputLabel name={"Cases from"}/> 
                                <ABInput/>
                            </Col>
                            <Col >
                                <ABInputLabel name={"Cases to"}/> 
                                <ABInput/>
                            </Col>
                            <Col>
                                <ABInputLabel name={"Location"}/> 
                                <ABInput/>
                            </Col>
                            <Col>
                                <ABInputLabel name={"Position"}/> 
                                <ABInput/>
                            </Col>
                            <Col>
                                <Button color={'danger'}><span>Reset</span></Button>
                            </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}
export default UserNav