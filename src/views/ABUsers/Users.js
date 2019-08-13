import React, {Component} from 'react';
import {Table, Input, Label, FormGroup, Button} from 'reactstrap';
import {Link} from 'react-router-dom'
import {api} from './../../services/API';
import '../AdminPanel.css'

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  };

  componentDidMount() {
    api.get('/users').then(res => {
      const users = res.data;
      this.setState({users});
    });
  };


  render() {
    return (
      <div className={'text-center'}>
          
        <Table responsive>
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
        </Table>
      </div>
    );
  }
}

export default Users;

