import React, {Component} from 'react';
import {Table, Input, Label, FormGroup, Button,Progress} from 'reactstrap';
import {Link} from 'react-router-dom'
import {api} from './../../services/API';
import './UserTamplate.css';
import UserNav from './UsersNav';


class Users extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    	users: [],
    }
};

  // componentDidMount() {
  //   api.get('/users').then(res => {
  //     const users = res.data;
  //     this.setState({users});
  //   });
  // };


render() {
 	return (
    	<div className={'text-center'}>
          <UserNav/>
        {/* <Table responsive>
          <thead>
          <tr>
            <th>
              <FormGroup check className="checkbox">
                <Input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox1"
                  name="checkbox1"
                  value="option1"
                />
                <Label check className="form-check-label" htmlFor="checkbox1"></Label>
              </FormGroup>
            </th>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>
            <Link to={"/users/create"} name="go to create" ><i className="fa fa-plus"/>  CREATE</Link>
            </th>
          </tr>
          </thead>
          <tbody>
          {this.state.users.map((el) => {
            return (
              <tr key={el.id.toString()}>
                <td>
                  <FormGroup check className="checkbox">
                    <Input
                      className="form-check-input"
                      type="checkbox"
                      id="checkbox1"
                      name="checkbox1"
                      value="option1"
                    />
                    <Label check className="form-check-label" htmlFor="checkbox1"></Label>
                  </FormGroup>
                </td>
                <td>{el.id}</td>
                <td>{el.firstname}</td>
                <td>{el.lastname}</td>
                <td>
                <Link to={`/users/${el.id}`} className="btn btn-primary">
                <i className="fa fa-pencil"></i>  Edit
                </Link>
                </td>
              </tr>
            )
          })}


          </tbody>
        </Table> */}
      		<Table hover responsive className="table-outline mb-0 d-none d-sm-table">
        		<thead style={{backgroundColor:"#C8CED3", height:"40px"}} >
          			<tr>
            			<th className="text-center"></th>
            			<th className="text-left"><i className="icon-people icons font-2xl d-block mt-4"></i></th>
            			<th className="text-left">User</th>
            			<th className="text-left">ID</th>
            			<th className="text-left">Country</th>
            			<th className="text-left">Cases</th>
            		<th><Button color="danger">Block(2)</Button></th>
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
            			<td className="text-left">
              				<div className="avatar">
               					<img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
              				</div>
            			</td>
            			<td className="text-left">
              				<div>Annie_hall123</div>
              					<div className="small text-muted">
                					Registered: Jan 1, 2019
              					</div>
           				</td>
            			<td className="text-left">abcfe</td>
            			<td className="text-left">
              				<i className="flag-icon flag-icon-de h4 mb-0" title="de" id="de"></i>
            			</td>
            			<td className="text-left">29</td>
            			<td>
              				<Button color="dark" >Message</Button>
            			</td>
          			</tr>
       			</tbody>
      		</Table>
    	</div>
    	);
  	}
}
export default Users;

