import React from 'react';
import ABEditor from '../../components/ABEditor';
import {Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row, Button} from "reactstrap";
import Event from "../../Models/Event";

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editHeader: false,
      event: new Event()
    };
  }

  contactType = ['phone', 'twitter', 'facebook', 'email'];

  setBodyValue(key, value) {
    const event = this.state.event;
    event[key] = value;
    this.setState({event});
  }

  setHeaderValue(index, key, value) {
    const {event} = this.state;
    event.headerTemplate[index][key] = value;
    this.setState({event});
    console.log(event);
  }

  save = () => {
    console.log(this.state.event);
    this.state.event.save().then(data => {
      this.props.history.push('/events');
    });
  };

  pushHeaderElement = (type) => {
    const {headerTemplate} = this.state.event;
    if (type === "description") {
      headerTemplate.push({
        "type": "companyDescription",
        "text": "",
        "title": false
      },);
    }
    if (type === "contact") {
      headerTemplate.push({
        "type": "companyContacts",
        "text": ""
      })
    }
    this.setState({headerTemplate})
  };

  removeHeaderElement = (index) => {
    const event = this.state.event;
    event.headerTemplate.splice(index, 1);
    console.log(event.headerTemplate);
    this.setState({event});
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
                    <Label>
                      <strong>
                        Name
                      </strong>
                    </Label>
                    <Input type="text"
                           placeholder="Enter name"
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
                           defaultValue={event.creationDate}
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
                  <h4>Descriptions</h4>
                  {
                    headerTemplate.map((item, key) => {
                      if (item.type === 'companyDescription') {
                        return (
                          <Row style={{height: "213px", backgroundColor: '#f9f9f9'}}
                               className={'align-content-between border'} key={Math.random() + key}>
                            <Col xs={'12'}>
                              <FormGroup>
                                <Label>
                                  <strong>
                                    Name
                                  </strong>
                                </Label>
                                <Input type="text"
                                       key={"companyDescription" + key}
                                       name={'companyDescription' + key}
                                       placeholder="Enter name"
                                       defaultValue={item.text}
                                       onBlur={(event) => {
                                         this.setHeaderValue(key, "text", event.target.value)
                                       }}
                                />
                              </FormGroup>
                            </Col>
                            <Col xs={'12'}>
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input"
                                       type="checkbox"
                                       id={"checkbox1" + key}
                                       name={"checkbox1" + key}
                                       checked={item.title}
                                       onChange={(event) => {
                                         this.setHeaderValue(key, "title", !item.title)
                                       }}/>
                                <Label check className="form-check-label" htmlFor={"checkbox1" + key}>Title</Label>
                              </FormGroup>
                            </Col>
                            <Col xs={'12'}>
                              <Row className={'justify-content-center'}>
                                <Col xs={'3'}>
                                  <FormGroup>
                                    <Button block color="danger" onClick={() => {
                                      this.removeHeaderElement(key)
                                    }}>DELETE</Button>
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
                  <h4>Contacts</h4>
                  {
                    headerTemplate.map((item, key) => {
                      if (item.type === 'companyContacts') {
                        return (
                          <Row style={{backgroundColor: '#f9f9f9'}} className={'border'} key={Math.random() + key}>
                            <Col xs={'12'}>
                              <FormGroup>
                                <Label htmlFor="ccyear">
                                  <strong>
                                    Contact type
                                  </strong>
                                </Label>
                                <Input type="select" name="ccyear" id="ccyear"
                                       defaultValue={item.title}
                                       onClick={(event) => {
                                         this.setHeaderValue(key, 'title', event.target.value)
                                       }}>
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
                                <Input type="text"
                                       placeholder="Enter contact"
                                       defaultValue={item.text}
                                       onBlur={(event) => {
                                         this.setHeaderValue(key, "text", event.target.value)
                                       }}
                                />
                              </FormGroup>
                            </Col>
                            <Col xs={'12'}>
                              <Row className={'justify-content-center'}>
                                <Col xs={'3'}>
                                  <FormGroup>
                                    <Button block color="danger" onClick={() => {
                                      this.removeHeaderElement(key)
                                    }}>DELETE</Button>
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