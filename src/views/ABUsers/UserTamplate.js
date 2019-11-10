import React, {Component} from 'react';
import {Table, Input,Button as bButton} from 'reactstrap';
import {api} from './../../services/API';
import styled from 'styled-components';
import './Users.css';

const Button = styled(bButton)`
width: 50%;
padding-top: 2px;
padding-bottom: 2px;
`;


class UserTamplate extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    	users: [],
    }
    this.goChat = this.goChat.bind(this)
    };
    goChat() {
        console.log(this.props);
        this.props.history.push('/chat')
    }
    render() {
        return (
            <div className="text-center">
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
                                <Button color="dark" onClick={this.goChat}>Message</Button>
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
                                <Button color="dark" onClick={this.goChat}>Message</Button>
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
                                <Button color="dark" onClick={this.goChat}>Message</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default UserTamplate