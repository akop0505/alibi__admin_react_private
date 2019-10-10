import React from 'react';
import { Col as bCol, Row as bRow} from 'reactstrap';
import styled from 'styled-components';


const Col = styled(bCol)`
text-align:center;
background: #F3F3F5;
padding:0 0 0 15px !important;
`;
const DivTitle = styled.div`
padding-top:40px
font-size: 34px;
line-height: 40px;
font-weight: bold;`;
const DivSmalText = styled.div`
font-weight: normal;
font-size: 14px;
line-height: 16px;
`;
const Row = styled(bRow)`
margin:0 !important;
padding:10px 0px 12px 0px !important;
color:black
font-weight: normal;
font-size: 14px;
line-height: 16px;
`;


export const PreviewHeader = (props) => {
    return (
        <Col>
            <DivTitle>ALIBI</DivTitle>
            <DivSmalText className="small text-muted">
                Event confirm system
            </DivSmalText>
            <div style={{display: 'flex', justifyContent:"center"}}>
                <span style={{padding:"5px"}}>
                    <i className="fa fa-phone"> 8 8000 678-23-45</i>
                </span>
                <span style={{padding:"5px"}}>
                    <i className="fa fa-envelope"> email@mail.com</i>
                </span>
                <span style={{padding:"5px"}}>
                    <i className="fa fa-instagram"> alibi_apps</i>
                </span>
                <span style={{padding:"5px"}}>
                    <i className="fa fa-facebook"> Alibiapps</i>
                </span>
            </div>
        </Col>
    )
}