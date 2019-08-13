import React from 'react';
import ABEditor from '../../components/ABEditor';
import {Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row, Button} from "reactstrap";
import Event from "../../Models/Event";

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editHeader: true,
      event: new Event()
    };
  }

  contactType = ['phone', 'twitter', 'facebook', 'email'];

  setBodyValue(key, value) {
    this.setState({[key]: value});
  }

  setHeaderValue(index, key, value) {
    const {headerTemplate} = this.state.event;
    headerTemplate[index][key] = value;
    this.setState({headerTemplate});
  }

  save = () => {
    console.log(this.state);
  };

  pushHeaderElement = (type) => {
    const {headerTemplate} = this.state.event;
    if (type === "description") {
      headerTemplate.push({
        "type": "companyDescription",
        "text": "",
        "title": true
      },);
    }
    if (type === "contact") {
      headerTemplate.push({
        "type": "companyContacts",
        "title": "",
        "text": ""
      })
    }
    this.setState({headerTemplate})
  };

  renderBody(event) {
    const {editHeader} = this.state;
    return (
      <Row>
        <Col xs="12" sm="12">
          <Card>
            <CardHeader>
              <strong>Create New Event</strong>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="6">
                  <FormGroup>
                    <Label htmlFor="name">
                      <strong>
                        Name
                      </strong>
                    </Label>
                    <Input type="text"
                           id="name"
                           placeholder="Enter name"
                           require
                           defaultValue={event.name}
                           onChange={(event) => this.setBodyValue('name', event.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col xs="6">
                  <FormGroup>
                    <Label htmlFor="name">
                      <strong>
                        Creation Date
                      </strong>
                    </Label>
                    <Input type="date"
                           id="date-input"
                           name="date-input"
                           placeholder="date"
                           defaultValue={event.creationData}
                           onChange={(event) => this.setBodyValue('creationData', event.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label>
                      <strong>
                        Description
                      </strong>
                    </Label>
                    <ABEditor initValue={event.description} onChange={(val) => {
                      this.setBodyValue('description', val);
                    }}/>
                  </FormGroup>
                </Col>
                <Col xs="12">
                  <FormGroup>
                    <Label>
                      <strong>
                        Label
                      </strong>
                    </Label>
                    <ABEditor initValue={event.label} onChange={(val) => {
                      this.setBodyValue('label', val);
                    }}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row className={'justify-content-between'}>
                <Col xs={'3'}>
                  <FormGroup>
                    <Button block outline color="primary" onClick={() => {
                      this.setState({editHeader: !editHeader})
                    }}>Edit Header</Button>
                  </FormGroup>
                </Col>
                <Col xs={'3'}>
                  <FormGroup>
                    <Button block color="primary" onClick={this.save}>Save</Button>
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }

  renderEditHeader(event) {
    const {editHeader} = this.state;
    const {headerTemplate} = event;
    return (
      <Row>
        <Col xs="12" sm="12">
          <Card>
            <CardHeader>
              <strong>Edit Header</strong>
            </CardHeader>
            <CardBody>
              <Row>
                {/*First block*/}
                <Col xs="6">
                  {
                    headerTemplate.map((item) => {
                      if (item.type === 'companyDescription') {
                        return (
                          <Row style={{height: "213px", backgroundColor: '#f9f9f9'}}
                               className={'align-content-between border'}>
                            <Col xs={'12'}>
                              <FormGroup>
                                <Label htmlFor="name">
                                  <strong>
                                    Name
                                  </strong>
                                </Label>
                                <Input type="text" id="name" placeholder="Enter name" required/>
                              </FormGroup>
                            </Col>
                            <Col xs={'12'}>
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1"
                                       value="option1"/>
                                <Label check className="form-check-label" htmlFor="checkbox1">Title</Label>
                              </FormGroup>
                            </Col>
                            <Col xs={'12'}>
                              <Row className={'justify-content-center'}>
                                <Col xs={'3'}>
                                  <FormGroup>
                                    <Button block color="danger">DELETE</Button>
                                  </FormGroup>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        )
                      }
                    })
                  }
                  <Row>
                    <Col xs={'12'} className={'p-1'}>
                      <FormGroup>
                        <Button color="success" size={'50'} onClick={() => {
                          this.pushHeaderElement('description')
                        }}>Add Description</Button>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                {/*Second block*/}
                <Col xs="6">
                  {
                    headerTemplate.map((item) => {
                      if (item.type === 'companyContacts') {
                        return (
                          <Row style={{backgroundColor: '#f9f9f9'}} className={'border'}>
                            <Col xs={'12'}>
                              <FormGroup>
                                <Label htmlFor="ccyear">
                                  <strong>
                                    Contact type
                                  </strong>
                                </Label>
                                <Input type="select" name="ccyear" id="ccyear">
                                  <option value={null}></option>
                                  {this.contactType.map(item => {
                                    return (<option key={Math.random() / 1000} value={item}>{item}</option>);
                                  })}
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col xs={'12'}>
                              <FormGroup>
                                <Label htmlFor="name">
                                  <strong>
                                    Contact Text:
                                  </strong>
                                </Label>
                                <Input type="text" id="name" placeholder="Enter contact" required/>
                              </FormGroup>
                            </Col>
                            <Col xs={'12'}>
                              <Row className={'justify-content-center'}>
                                <Col xs={'3'}>
                                  <FormGroup>
                                    <Button block color="danger">DELETE</Button>
                                  </FormGroup>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        )
                      }
                    })
                  }

                  <Row className={'justify-content-end'}>
                    <Col xs={'3'} className={'p-1'}>
                      <FormGroup>
                        <Button block color="success" size={'50'} onClick={() => {
                          this.pushHeaderElement('contact')
                        }}>Add Contact</Button>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className={'justify-content-end'}>
                <Col xs={'3'}>
                  <FormGroup>
                    <Button block outline color="primary" onClick={() => {
                      this.setState({editHeader: !editHeader})
                    }}>Save</Button>
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }

  render() {
    const {state} = this;
    return (
      <div className="animated fadeIn">
        {
          !state.editHeader ?
            this.renderBody(state.event)
            :
            this.renderEditHeader(state.event)
        }
      </div>
    )
  }
}

export default Create;