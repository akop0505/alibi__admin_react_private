import React from 'react';
import ABEditor from '../../components/ABEditor';
import {
  Card, 
  CardBody, 
  CardHeader, 
  Col, 
  FormGroup,
  Input, 
  Label,
  Row,
  Button, 
  NavItem, 
  NavLink, 
  Nav,
  Badge } from "reactstrap";
import Event from "../../Models/Event";
import {ABButton} from "../../components/AllButtons/ABButton";
import styled from 'styled-components';
import './style.css';

const Hr = styled.hr`
  margin: 0.5em 0;
`;

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
  }

  save = () => {
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
    this.setState({event});
  };

  renderBody(event) {
    const {editHeader} = this.state;
    return (
      <div>
        <Hr/>
        <Nav className={'d-flex'}>
          <NavItem className={''}>
            <ABButton color={'black'} name={'Back'}     icon={'reply'}/>
          </NavItem>
          <NavItem className={''}>
            <ABButton color={'black'} name={'Forward'}  icon={'share'}/>
          </NavItem>
          <NavItem className={'flex-fill'}>
            <ABButton color={'black'} name={'History'}  icon={'bars'}/>
          </NavItem>
          <NavItem className={'d-flex flex-fill justify-content-end'}>
            <ABButton color={'black'} name={'Close'}    icon={'close'}/>
          </NavItem>
          <NavItem className={''}>
            <ABButton color={'black'} name={'Archive'}  icon={'clock'}/>
          </NavItem>
          <NavItem className={''}>
            <ABButton color={'yellow'}name={'Send'}     icon={'check'}/>
          </NavItem>
        </Nav>
        <Hr/>
        <Row>
          <Col xs="12" sm="12">
            <Row>
              <Col xs="6">
                <FormGroup>
                  <Label>
                    <strong>
                      Case name
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
                      Description to case
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
            <Row>
              <Col xs={'3'}>
                <ABButton name={"Add audion"} icon={'audion'} btnStyle={{marginLeft:0}}/>
              </Col>
            </Row>
            <Row>
              <Col xs={'6'}>
                <FormGroup>
                  <Label>
                    <strong>
                      Case type
                    </strong>
                  </Label>
                  <Input type="select" name="select" id="select">
                    <option value="0">Please check the type</option>
                    <option value="1">Public</option>
                    <option value="2">Personal</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={'12'}> 
                <div className={"event-tags d-inline-flex justify-content-center align-items-center"}>
                  <span>Tag name</span>
                  <i className={'fa fa-circle 1x'}/>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

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
              {/* <Row className={'justify-content-end'}>
                <Col xs={'3'}>
                  <FormGroup>
                    <Button block outline color="primary" onClick={() => {
                      this.setState({editHeader: !editHeader})
                    }}>Save</Button>
                  </FormGroup>
                </Col>
              </Row> */}
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
        {this.renderBody(state.event)}
        {this.renderEditHeader(state.event)}
        <Row className={'justify-content-end'}>
            {/* <Col xs={'3'}>
              <FormGroup>
                <Button block outline color="primary" onClick={() => {
                  this.setState({editHeader: !editHeader})
                }}>Edit Header</Button>
              </FormGroup>
            </Col> */}
            <Col xs={'3'}>
              <FormGroup>
                <Button block color="primary" onClick={this.save}>Save</Button>
              </FormGroup>
            </Col>
        </Row>
      </div>
    )
  }
}

export default Create;