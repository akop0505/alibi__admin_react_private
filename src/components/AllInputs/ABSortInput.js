import React from 'react';
import {Button,
        Label,
        Input,
        Row,
        Col as bCol,
    } from 'reactstrap';
import styled from 'styled-components';

const Icon = styled.i`
    
    margin-left: 0px;
    padding: 6.5px;
    color:#333333;
    border: 0.5px solid #C8CED3;
    border-radius: 3px;
`;
const Col = styled(bCol)`
padding-left:2px !important;
padding-right:2px !important;
`

export const ABSortInput = (props) => {
    return (
        <Row>
            <Col xs={"8"}>
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
            </Col>
            <Col xs={"4"}>
                <Icon className="fa fa-sort-amount-desc"></Icon>
            </Col>
        </Row>
        		
	)
};
ABSortInput.defaultProps = {
	optionKey: "key",
	optionValue: "value",
	placeholder: "Select option",	
	optionData: [],
	defaultValue:""
//     onClick: () => {
//     console.log('back button');
//   }
};