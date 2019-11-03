import React, {Component} from 'react';
import {Badge, Col as bCol, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';
import ChatMessage from './ChatMessage';
import ChatUser from './ChatUser';
import MessageInput from './MessageInput';

const Col = styled(bCol)`
padding:0 !important`;

const HeaderDiv =styled.div`
padding-top:8px;
padding-bottom:8px;
padding-left:20px;
border-bottom: 1px solid #C8CED3;           
`;

const UserName = styled. span`
margin-left:10px;
`;

// const TabContent = styled(bTabContet)`
// height:500px;
// `;

// const MessageDiv = styled.div`
// max-height:100%;
// display: flex;
// flex-direction: column-reverse;`;

class ChatBody extends Component {

constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
    activeTab: new Array(4).fill('1'),
    };
}

// lorem() {
//     return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
// }

toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
        activeTab: newArray,
    });
}

tabPane() {
    return (
            <>
                <TabPane tabId="1">
                    <ChatMessage/>
                </TabPane>
                <TabPane tabId="2">
                    <ChatMessage/>
                </TabPane>
                <TabPane tabId="3">
                    <ChatMessage/>
                </TabPane>
            </>
        );
    }
render() {
    return (
        <div className="animated fadeIn">
            <Row>
                <Col lg='4' md='4'>
                    <Nav tabs vertical>
                        <NavItem >
                            <NavLink
                                active={this.state.activeTab[0] === '1'}
                                onClick={() => { this.toggle(0, '1'); }}
                            >
                            <ChatUser/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={this.state.activeTab[0] === '2'}
                                onClick={() => { this.toggle(0, '2'); }}
                            >
                            <ChatUser/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={this.state.activeTab[0] === '3'}
                                onClick={() => { this.toggle(0, '3'); }}
                            >
                            <ChatUser/>
                            </NavLink>
                            </NavItem>
                    </Nav>
                </Col>
                <Col lg='8' md='8'>

                    <TabContent activeTab={this.state.activeTab[0]}>
                        <HeaderDiv>
                            <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" width="29px" />
                            <UserName>Annie_hall123</UserName>
                        </HeaderDiv>
                        {this.tabPane()}
                        <div><MessageInput/></div>
                    </TabContent>
                </Col>
            </Row>
        </div>
        );
    }
}

export default ChatBody;