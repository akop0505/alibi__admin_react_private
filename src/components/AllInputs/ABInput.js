import React from 'react';
import {Button,Label,Input} from 'reactstrap';
import  './ABInput.css'
// import './AllButtons.css'


export const ABInput = (props) => {
	return (
			<Input type="text" className="selectInput" defaultValue={props.name}>
			</Input>		
	)
};
ABInput.defaultProps = {
		defaultValue:""
//     onClick: () => {
//     console.log('back button');
//   }
};