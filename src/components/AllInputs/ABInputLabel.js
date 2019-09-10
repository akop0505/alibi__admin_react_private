import React from 'react';
import {Button,Label,Input} from 'reactstrap';
import  './ABInput.css'


export const ABInputLabel = (props) => {

	return (
        <Label htmlFor="prependedInput">{props.name}</Label>
		
	)
};
ABInputLabel.defaultProps = {
		name:"Sort by"

};