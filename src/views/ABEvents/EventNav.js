import React from 'react';
import {
    Button,
    Col,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
import EventMediaInput from './EventMediaInput';
import EventDataInput from './EventDataInput';
import './EventsStyle.css';
import {ABSelectInput} from "../../components/AllInputs/ABSelectInput";
import { ABSearch } from '../../components/ABSearch/ABSearch';

class EventNav extends React.Component{
    
    componentWillReceiveProps(nextProps){
        console.log('old = ',this.props.count);
        console.log('new = ',nextProps.count);

    }

    render(){
        return(
            <div>
                <Form action="" method="post" className="form-horizontal">
                    <FormGroup row>
                        <Col>
                            {/* <Label htmlFor="prependedInput">Search</Label> */}
                            <ABSearch/>
                        </Col>
                        <Label htmlFor="prependedInput">{this.props.count} cases</Label>
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
