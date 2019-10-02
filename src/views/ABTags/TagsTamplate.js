import React, {Component} from 'react';
import {Table, Input, Label, FormGroup, Button as bButton,Progress} from 'reactstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {api} from './../../services/API';

const Button = styled(bButton)`
width: 25%;
padding-top: 2px;
padding-bottom: 2px;
`;


class TagsTamplate extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    	users: [],
    }
};
render() {
 	return (
    	<div className={'text-center'}>
      		<Table hover responsive className="table-outline mb-0 d-none d-sm-table">
        		<thead style={{backgroundColor:"#C8CED3", height:"40px"}} >
          			<tr>
            			<th className="text-center"></th>
            			<th className="text-left">Tags</th>
            			<th className="text-left">Cases</th>
            			<th className="text-left">ID</th>
            		<th><Button color="danger">Delete(3)</Button></th>
          			</tr>
        		</thead>
        		<tbody>
          			<tr>
            			<td style={{padding:"0 0 30px 20px"}}>
							<Input
								className="form-check-input" 
								type="checkbox" 
								id="checkBox" 
								name="checkBox1" 
              				/>
            			</td>
            			<td className="text-left">Berlin</td>
            			<td className="text-left">29</td>
            			<td className="text-left">2</td>
            			<td>
              				<Button color="dark" >Edit</Button>
            			</td>
          			</tr>
       			</tbody>
      		</Table>
    	</div>
    	);
  	}
}
export default TagsTamplate;

