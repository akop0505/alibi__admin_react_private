import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';
import {api, setAxiosHeader} from './../../services/API';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "mafmaster@mafmaster.ru",
      password: "Alibi@pp2535"
    };
  }

  handleSetState(key, vale) {
    this.setState({
      [key]: vale
    });
  }

  actionLogin() {
    const Login = this.state.username;
    const password = this.state.password;
    api.post('/account/token', {Login, password}).then((res) => {
      for( let index in res.data ){
        localStorage.setItem(index,res.data[index]);
      }
      setAxiosHeader();
      this.props.history.push('/dashboard')
    }).catch((err) => {
      console.log(err.response.data);
    });
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="4">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text"
                               placeholder="Username"
                               autoComplete="username"
                               value={this.state.username}
                               onChange={(e) => {
                                 this.handleSetState('username', e.target.value)
                               }}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password"
                               autoComplete="current-password"
                               value={this.state.password}
                               onChange={(e) => {
                                 this.handleSetState('password', e.target.value)
                               }}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={() => {
                            this.actionLogin()
                          }}>Login</Button>
                        </Col>
                        {/*<Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>*/}
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
