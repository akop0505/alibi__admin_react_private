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
  import './EventsStyle.css';


class EventDataInput extends React.Component{
    render(){
        return(
            <div>             
                <FormGroup row>
                    <Col>
                        <Label htmlFor="prependedInput">Cases from</Label>
                        <Input type="date" id="date-input" name="date-input" placeholder="date" bsSize="sm"/>
                    </Col>
                    <Col>
                        <Label htmlFor="prependedInput">to</Label>
                        <Input type="date" id="date-input" name="date-input" placeholder="date" bsSize="sm"/>
                    </Col> 
                </FormGroup>
            </div>
        )
    }
}
export default EventDataInput