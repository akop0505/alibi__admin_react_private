import React from 'react';
import {
    Button as bButton,
    Col,
    FormGroup as bFormGroup,
    Row,
  } from 'reactstrap';
import styled from 'styled-components';
import { ABSearch} from '../../components/ABSearch/ABSearch';
import {ABQuality} from "../../components/ABQuality/ABQuality";
import EventsInputGroup from './EventsImputGroup';


const ButtonReset = styled(bButton)`
width: 35%;
padding-top: 2px;
padding-bottom: 2px;
float:right;
`;
const ButtonAddCase = styled(bButton)`
width: 50%;
padding-top: 2px;
padding-bottom: 2px;
`;
const FormGroup = styled(bFormGroup)`
margin-left:8px !important;
margin-right:8px !important;
`;
const ColQuality = styled(Col)`
padding: 5px !important;

`;
 
class EventsNav extends React.Component{
    render(){
        return(
            <div>
                <Row>
                    <Col  xs={"4"}>
                        <ABSearch/>
                    </Col>
                    <ColQuality xs={"1"}>
                        <ABQuality name={"5 cases"}/>
                    </ColQuality>
                    <Col  xs={"3"}>
                        <ButtonAddCase color={'dark'}><span>New Case</span> <i className="fa fa-plus"></i></ButtonAddCase>
                    </Col>
                    <Col  xs={"4"}>
                        <ButtonReset color={'danger'}><span>Reset</span></ButtonReset>
                    </Col>
                </Row>
                <FormGroup row>
                    <EventsInputGroup/>
                </FormGroup>
            </div>
        )
    }
}
export default EventsNav