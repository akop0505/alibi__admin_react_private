import React from 'react';
import {Col as bCol,
		Input,
		Row as bRow,
		Label,
	} from 'reactstrap';
import styled from 'styled-components';

const Col = styled(bCol)`
padding-left:2px !important;
padding-right:2px !important;
`
const Row = styled(bRow)`
margin-left:0px !important;
margin-right:0px !important;
`

export const ABDataInput = (props) => {
	return (

        <Row>
			<Col lg='7' md='7' sm='7' xs='6'>
				<Label htmlFor="prependedInput">{props.name1}</Label>
				<Input type="date" id="date-input" name="date-input" placeholder="date" bsSize="sm"/>
			</Col>
			<Col lg='5' md='5' sm='5' xs='6'>
				<Label htmlFor="prependedInput">{props.name2}</Label>
				<Input type="text" className="selectInput"/>
			</Col>
		</Row>
                

	)
};
ABDataInput.defaultProps = {
		defaultValue:""
//     onClick: () => {
//     console.log('back button');
//   }
};