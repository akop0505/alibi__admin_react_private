import React ,{Component} from 'react';
import { Input as bInput, Card, CardBody, CardHeader, Col, Row as bRow} from 'reactstrap';
import styled from 'styled-components';

const Row = styled(bRow)`
padding:6px 0 7px 0;
margin:0;
background: #FFFFFF;
box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
`;

const Input = styled(bInput)`
background: #F3F3F5;
border-radius: 9px;`;

const IconCol = styled(Col)`
padding-top:4px;`;

class MessageInput extends Component{
    render(){
        return(
                <Row>
                    <IconCol lg={{size:1, offset:1,}}>
                        <i className="icon-paper-clip icons font-2xl d-block "></i>
                    </IconCol>
                    <Col lg='8'>
                        <Input type="text" id="name" placeholder="Start writing" />
                    </Col>
                    <IconCol lg='1'>
                        <i className="icon-microphone icons font-2xl d-block "></i>
                    </IconCol>
                </Row>
        )
    }
}
export default MessageInput