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
import EventMediaInput from './EventMediaInput';
import EventDataInput from './EventDataInput';
import './EventsStyle.css';
import {ABSelectInput} from "../../components/AllInputs/ABSelectInput";



class EventNav extends React.Component{
    render(){
        return(
            <div>
                <Form action="" method="post" className="form-horizontal">
                    <FormGroup row>
                        <Col md="4">
                            <Input type="text"></Input>
                            
                        </Col>
                        <Label htmlFor="prependedInput">6 cases</Label>
                        <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                            <Button active  color="danger" className="resetButton">Reset</Button>
                        </Col>
                    </FormGroup>             
                <FormGroup row>
                    <Col>
                        <Label htmlFor="prependedInput">Sort by</Label>
                        <ABSelectInput name={"no"}/>
                    </Col>
                    <EventMediaInput/>
                    <Col>
                        <Label htmlFor="prependedInput">Header</Label>
                        <Input type="select" name="selectSm" id="SelectLm" bsSize="sm" defaultValue="">
                            <option value="0">alibi</option>
                        </Input>
                    </Col>
                    <EventDataInput/>
                    <Col>
                        <Label htmlFor="prependedInput">Label</Label>
                        <Input type="select" name="selectSm" id="SelectLm" bsSize="sm">
                            <option value="0">custom</option>
                        </Input>
                    </Col>
                    <Col>
                        <Label htmlFor="prependedInput">Location</Label>
                        <Input type="text"  bsSize="sm">
                        </Input>
                    </Col>
                </FormGroup>
                </Form>
            </div>
        )
    }
}
export default EventNav