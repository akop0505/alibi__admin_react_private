import React from 'react';
import {
    Row,
    Col as bCol,
    Form,
    FormGroup as bFormGroup,
    Button,
  } from 'reactstrap';
import styled from 'styled-components';
import {ABSelectInput} from "../../components/AllInputs/ABSelectInput";
import {ABInput} from "../../components/AllInputs/ABInput";
import {ABDataInput} from "../../components/AllInputs/ABDataInput";
import {ABInputLabel} from "../../components/AllInputs/ABInputLabel";
import {ABSearch} from "../../components/ABSearch/ABSearch";
import {ABQuality} from "../../components/ABQuality/ABQuality";
import {ABSortInput} from "../../components/AllInputs/ABSortInput";
import { ABCasesFromToInput } from '../../components/AllInputs/ABCasesFromToInput';

const BtnReset = styled(Button)`
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

const BtnDel = styled(Button)`
width: 100%;
padding-top: 2px;
padding-bottom: 2px;
`;

class ChatNav extends React.Component{
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
                    <Col lg='4' md='5' sm='8' xs='12'>
                        <ABSearch/>
                    </Col>
                    <ColQuality lg={{size:3, offset:0,}} md={{size:3, offset:0,}} sm={{size:3, offset:0,}} xs={{size:6, offset:4,}}>
                        <ABQuality name={'5 chats'}/>
                    </ColQuality>
                    <Col lg={{size:2, offset:3,}} md={{size:2, offset:3,}} sm='4' xs='6'>
                        <BtnDel color={'danger'}><span>Delete chats(2)</span></BtnDel>
                    </Col>
                </FormGroup>
                
                    <Form action="" method="post" >           
                        <FormGroup row>
                            <Col lg='2' md='4' sm='4' xs='6'>
                                <ABSortInput 
                                    placeholder = {"Select 1"}
                                    optionData = {this.state.optionData1}
                                />
                            </Col>
                            <Col lg='2' md='3' sm='3' xs='6'>
                                <ABInputLabel name={"Registration"}/> 
                                <ABSelectInput
                                    optionKey={'index'} 
                                    optionValue={'name'} 
                                    placeholder = {"Period"}
                                    optionData = {this.state.optionData2}
                                />
                            </Col>
                            <Col lg='3' md='5' sm='5' xs='12'>
                                <ABDataInput name1={"Messages from"} name2={"to"}/>
                            </Col>
                            <Col lg='2' md='3' sm='4' xs='6'>
                                <ABInputLabel name={"Location"}/> 
                                <ABInput/>
                            </Col>
                            <Col lg={{size:2, offset:1,}} md={{size:2, offset:3,}} sm='4' xs='6'>
                                <BtnReset color={'danger'}><span>Reset</span></BtnReset>
                            </Col>
                            
                        </FormGroup>
                    </Form>
                </div>
        )
    }
}
export default ChatNav