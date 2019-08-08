import React, {Component} from 'react';
import {Table, Input, Label, FormGroup, Button} from 'reactstrap';
import {api} from './../../services/API';
import '../AdminPanel.css'

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    }
  };

  componentDidMount() {
    api.get('/tags').then(res => {
      const tags = res.data;
      this.setState({tags});
      console.log(tags)
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
            <th>text</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {this.state.tags.map((el) => {
            return (
              <tr key={el.id}>
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
                <td>{el.text}</td>
                <td>
                  <Button block color="ghost-primary">
                    <i className="fa fa-pencil  "></i><br/>EDIT
                  </Button>
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

