import React from 'react';
import {Label,Input} from 'reactstrap';

export const ABMediaInput = (props) => {
        return (
            <div>
                <Label htmlFor="prependedInput">{props.name}</Label>
                <Input type="select" name="selectSm" id="SelectLm" bsSize="sm" defaultValue="" className="selectInput">
                    <option value="0">yes</option>
                    <option value="1">no</option>  
                    <option value="2">all the same</option>       
                </Input>
            </div>		
        )
    };