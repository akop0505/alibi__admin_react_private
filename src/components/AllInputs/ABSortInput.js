import React from 'react';
import {Button,
        Label,
        Input,
        Row as bRow,
        Col,
    } from 'reactstrap';
import styled from 'styled-components';

const Icon = styled.i`
    
    margin-left: 0px;
    padding: 6.5px;
    color:#333333;
    border: 0.5px solid #C8CED3;
    border-radius: 3px;
`;
const SelectCol = styled(Col)`
padding:0 !important;
`;

const SortCol =styled(Col)`
padding-right:1px !important;
padding-left:1px !important;`;

const Row = styled(bRow)`
margin-left:0px !important;
margin-right:0px 1important;
`;

export const ABSortInput = (props) => {
    return (
        <div>
            
            <Label htmlFor="prependedInput">Sort By</Label>  
            <Row>
            <SelectCol lg='9' md='9' sm='9' xs='9'>
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
            </SelectCol>
            <SortCol lg='3' md='3' sm='3' xs='3'>
                <Icon className="fa fa-sort-amount-desc"></Icon>
            </SortCol>
        </Row>
        </div>
        
        		
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