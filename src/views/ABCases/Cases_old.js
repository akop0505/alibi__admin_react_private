import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardBody, CardHeader, Col, Input, Row, Table} from "reactstrap";

import {api} from '../../services/API';


class Cases_old extends Component {
  events = [];

  constructor(props) {
    super(props);
    this.state = {
      cases: []
    };
  }

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

  renderCaseRow(item) {
    return (
      <tr key={item.id.toString()}>
        <th scope="row">{item.id}</th>
        <th scope="row">{item.name}</th>
        <td><Link to={"/event/" + item.eventId}>{this.getEventName(item.eventId)}</Link></td>
        <td>
          <Button color="primary">
            <i className="fa fa-lightbulb-o"/>&nbsp;EDIT
          </Button>&nbsp;
          <Button color="danger">
            <i className="fa fa-lightbulb-o"/>&nbsp;DELETE
          </Button>
        </td>
      </tr>
    )
  }

  render() {
    const {cases} = this.state;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"/> Cases
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Event</th>
                    <th scope="col">Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  {cases.map((item, index) =>
                    this.renderCaseRow(item)
                  )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Cases_old;

