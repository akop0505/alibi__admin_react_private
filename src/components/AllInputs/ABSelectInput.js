import React from 'react';
import {Button,Label,Input} from 'reactstrap';
import  './ABInput.css'


export const ABSelectInput = (props) => {
	return (
			<Input type="select" name="selectSm" id="SelectLm" bsSize="sm" defaultValue="" className="selectInput">
				<option value={null}>{props.placeholder}</option>
				{
					props.optionData.map((value)=>{
						console.log(value);
						return (
							<option value={value[props.optionKey]} key={'option_'+Math.random()}>{value[props.optionValue]}</option>
						);
					})					
				}
			</Input>		
	)
};

ABSelectInput.defaultProps = {
	optionKey: "key",
	optionValue: "value",
	placeholder: "Select option",	
	optionData: [],
	defaultValue:""
//     onClick: () => {
//     console.log('back button');
//   }
};

												