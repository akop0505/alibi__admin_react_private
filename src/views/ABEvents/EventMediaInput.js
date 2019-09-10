import React from 'react';
import {
    Col,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
  import './EventsStyle.css';
import { ABSearch } from '../../components/ABSearch/ABSearch';

class EventMediaInput extends React.Component{
    render(){
        return(
            <div>             
                <FormGroup row >
                    <Col>
                        <Label htmlFor="prependedInput">Images</Label>
                        <Input type="select" name="selectSm" id="SelectLm" bsSize="sm">
                            <option value="0">yes</option>
                            <option value="0">no</option>
                            <option value="0">all the same</option>
                        </Input>
                    </Col>
                    <Col>
                        <Label htmlFor="prependedInput">Video</Label>
                        <Input type="select" name="selectSm" id="SelectLm" bsSize="sm">
                            <option value="0">yes</option>
                            <option value="0">no</option>
                            <option value="0">all the same</option>
                        </Input>
                    </Col>
                    <Col>
                        <Label htmlFor="prependedInput">Audio</Label>
                        <Input type="select" name="selectSm" id="SelectLm" bsSize="sm">
                            <option value="0">yes</option>
                            <option value="0">no</option>
                            <option value="0">all the same</option>
                        </Input>
                    </Col>
                  </FormGroup>
            </div>
        )
    }
}
export default EventMediaInput