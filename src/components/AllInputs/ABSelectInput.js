import React from 'react';
import {Button,Label,Input} from 'reactstrap';
import  './ABInput.css'
// import './AllButtons.css'


export const ABSelectInput = (props) => {
//   const {color} = props;
	return (
//   <Button className={`ab-button btn-${color} ${props.className}` } onClick={props.onClick} style={props.btnStyle}>
//     {props.icon === 'reply' && <i className={`fa fa-reply btn-icon-left`}/>}

//     <span className={'btn-title'}>
//         {props.name}
//       </span>
//     {props.icon === 'share' && <i className={`fa fa-share btn-icon-left`}/>}
//     {props.icon === 'bars'  && <i className={`fa fa-bars`}/> }
//     {props.icon === 'close' && <i className={`fa fa-close`}/> }
//     {props.icon === 'clock' && <i className={`fa fa-clock-o`}/> }
//     {props.icon === 'check' && <i className={`fa fa-check`}/> }
//     {props.icon === 'audion' && <i className={`fa fa-microphone`}/> }
//   </Button>
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

												