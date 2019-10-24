import React from 'react';
import { Col, Row as bRow} from 'reactstrap';
import QRCode from './img/QRCode.png'
import styled from 'styled-components';


const Div = styled.div`
  padding: 8px;
  border: 0.01em solid;
  position: relative;
  text-align:center;
  background:#F3F3F5;

  &::before, &::after {
    content: '';
    display: block;
    position: absolute;
    background:#F3F3F5;;
  }
  
  &::before {
    top: -0.3em;
    bottom: -0.3em;
    left: 1em;
    right: 1em;
  }
  
  &::after{
    left: -0.3em;
    right: -0.3em;
    top: 1em;
    bottom: 1em;
  }
`;
const Span = styled.span`
    position: relative;
    z-index: 1;
  `
const Row = styled(bRow)`
margin:183px 0 0 0 !important;
background:#F3F3F5;
padding:45px 51px 45px 65px;
`;

export const CasePreviewFooter = (props) => {
    return(
        <Row>
            <Col lg='3'>
            <Div>
                <Span>Dacument made by Alibi</Span>
            </Div>
            </Col>
            <Col lg={{offset:3,size:5}}>
                Scan QR-code or enter CaseID:abcfe34678 on the alibi.lv to<br/>
                see all photos, video,ducuments, audiofiles.<br/>
                Link to open case - alibi.lv/abcfe34678
            </Col>
            <Col lg='1'>
                <img src={QRCode} width='77px' height='77px'/>
            </Col>
        </Row>
    )
}