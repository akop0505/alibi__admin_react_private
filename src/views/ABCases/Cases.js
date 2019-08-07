import React, {Component} from 'react';
import {Table, Input, Label, FormGroup, Button} from 'reactstrap';
import {api} from './../../services/API';
import {Link} from "react-router-dom";

class Cases extends Component {

  events = [];

  constructor(props) {
    super(props);
    this.state = {
      cases: []
    }
  };

  componentWillMount() {
    this.loadEvents(() => {
      this.loadCases();
    });
  }

  loadEvents(cb = null) {
    api.get('/events').then(res => {
      this.events = res.data;
      cb();
    }).catch(error => {
      console.error(error);
    });
  }

  loadCases() {
    api.get('/cases').then(res => {
      this.setState({
        cases: res.data
      });
    }).catch(error => {
      console.error(error);
    });
  }

  getEventName(eventId) {
    const event = this.events.find((el) => {
      return el.id === eventId;
    });
    return event.name || "No Name";
  }

  getElementName() {
    const casesId = this.state.cases.eventsId;
    console.log(casesId)

  }

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
            <th>ID</th>
            <th>Name</th>
            <th>Event</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {this.state.cases.map((el) => {
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
                <td>{el.name}</td>
                <td>
                  <Link to={"/event/" + el.eventId}>{this.getEventName(el.eventId)}</Link>
                </td>
                <td>
                  <Button block color="ghost-primary">
                    <i className="fa fa-pencil"></i><br/>EDIT
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

export default Cases;

