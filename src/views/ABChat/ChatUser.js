import React ,{Component} from 'react';
import {
    Row as bRow,
    Col as BootstrapCol,
    CardBody,
    ListGroup,
    ListGroupItem,
  } from 'reactstrap';
import Image from 'react-bootstrap/Image'
import styled from 'styled-components';

const UserInfoCol = styled(BootstrapCol)`
    padding:0 !important;
`;

const Row = styled(bRow)`
margin:0 !important;`;

const AvatarCol = styled(BootstrapCol)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 !important;
`;
const InputCheckbox = styled.input`
  width: 22px;
  height: 22px;
`
const ActivSpan = styled.span`
color:#FFBD0A;`;

class ChatUser extends Component{
    render(){
        return(
            <Row>
                <AvatarCol lg='3'>
                    <InputCheckbox 
                        type="checkbox" 
                        id="checkBox" 
                        name="checkBox1" 
                    />
                    <Image roundedCircle  src={'assets/img/avatars/1.jpg'} alt="admin@bootstrapmaster.com"/>
                </AvatarCol>
                <UserInfoCol lg='9'>
                    <Row>
                        <BootstrapCol lg='5'>
                            Annie_hall123
                        </BootstrapCol>
                        <BootstrapCol lg='7' style={{textAlign:'end'}}>
                            07.08.2019  12:31
                        </BootstrapCol>
                        <BootstrapCol className="small text-muted" lg='12'>
                            <ActivSpan>You:</ActivSpan>
                            <span>Lorem ipsum dolor sit amet, consectetur...</span>
                        </BootstrapCol>
                    </Row>
                </UserInfoCol>
            </Row>
        )
    }
}
export default ChatUser