import React from 'react';
import {Button,Label,Input} from 'reactstrap';
import  './ABInput.css'


export const ABDataInput = (props) => {
	return (
        <Input type="date" id="date-input" name="date-input" placeholder="date" bsSize="sm" className="selectInput"/>		
	)
};
ABDataInput.defaultProps = {
		defaultValue:""
//     onClick: () => {
//     console.log('back button');
//   }
};