import React, {Component} from 'react';
import {Table, Input as bInput,Button as bButton, Row as bRow, Col} from 'reactstrap';
import {api} from './../../services/API';
import styled from 'styled-components';

const Button = styled(bButton)`
width: 100%;
`;

const Row = styled(bRow)`
margin:0 !important;`;

const Input = styled(bInput)`
width:22px;
height:22px;`;

class NotificationsTamplate extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    	users: [],
    }
    };
    render() {
        return (
            <div className="text-center">
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                    <thead style={{backgroundColor:"#C8CED3", height:"40px"}} >
                        <tr>
                            <th className="text-center"></th>
                            <th className="text-left"><i className="icon-people icons font-2xl d-block mt-4"></i></th>
                            <th className="text-left">User</th>
                            <th className="text-left">Message</th>
                            <th>
                                
                                <Col lg={{size:8, offset:3,}}><Button color="danger">Spam(2)</Button></Col></th>
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
                            <td className="text-center">
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
                            <td className="text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin ornare malesuada.
                                </td>
        
                            <td>
                                <Row>
                                    <Col lg='6'><Button color="dark" >Chat</Button></Col>
                                    <Col lg='6'><Button color="dark" >Spam</Button></Col>
                                </Row>
                            </td>
                        </tr>
                        <tr>
                            <td style={{padding:"0 0 30px 20px"}}>
                                <Input
                                    className="form-check-input" 
                                    type="checkbox" 
                                    id="checkBox" 
                                    name="checkBox1"
                                />
                            </td>
                            <td className="text-center">
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
                            <td className="text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin ornare malesuada.
                                </td>
        
                            <td>
                                <Row>
                                    <Col lg='6'><Button color="dark" >Chat</Button></Col>
                                    <Col lg='6'><Button color="dark" >Spam</Button></Col>
                                </Row>
                            </td>
                        </tr>
                        <tr>
                            <td style={{padding:"0 0 30px 20px"}}>
                                <Input
                                    className="form-check-input" 
                                    type="checkbox" 
                                    id="checkBox" 
                                    name="checkBox1"
                                />
                            </td>
                            <td className="text-center">
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
                            <td className="text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin ornare malesuada.
                                </td>
        
                            <td>
                                <Row>
                                    <Col lg='6'><Button color="dark" >Chat</Button></Col>
                                    <Col lg='6'><Button color="dark" >Spam</Button></Col>
                                </Row>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default NotificationsTamplate