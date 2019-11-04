import React ,{Component} from 'react';
import { Alert, Col as bCol, Row } from 'reactstrap';
import styled from 'styled-components';

const Col = styled(bCol)`
margin-top:20px;
`;

const AlertSend = styled(Alert)`
background: #BEBEBE;
border: 0.5px solid #333333;
box-sizing: border-box;
border-radius: 5px 5px 5px 0px;
margin-bottom:0px !important
font-size: 19px;
line-height: 22px;
color: #333333;
`;

const AlertGet = styled(Alert)`
background: #F3F3F5;
border: 0.5px solid #C8CED3;
box-sizing: border-box;
border-radius: 5px 5px 5px 0px;
font-size: 19px;
line-height: 22px;
color: #333333;
margin-bottom:0px !important
`;

const YouSpan = styled.span`
color:white;
`;

class ChatMessage extends Component{
    render(){
        return(
            <div>                
                    <Col lg='8'>
                        <AlertGet>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa vestibulum volutpat
                            augue aliquet iaculis. Tortor tortor nisl.
                        </AlertGet>
                        <div className="small text-muted">
                            10:08 pm
                        </div>
                    </Col>
                    <Col lg='11'>
                        <AlertSend>
                            <YouSpan>You:</YouSpan> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien 
                            gravida nec orci euismod nibh feugiat laoreet et euismod. Eget morbi ac 
                            lectus nisl, velit pretium, risus. Volutpat dui ullamcorper...
                        </AlertSend>
                        <div className="small text-muted">
                            10:08 pm
                        </div>
                    </Col>
            
            </div>
        )
    }
}
export default ChatMessage