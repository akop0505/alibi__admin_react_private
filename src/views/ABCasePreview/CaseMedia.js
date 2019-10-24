import React ,{Component} from 'react';
import {Row as bRow, Col,} from 'reactstrap';
import caseimg from './caseMediaImg/caseimg.png';
import caseimg2 from './caseMediaImg/caseimg2.png';
import caseimg3 from './caseMediaImg/caseimg3.png';
import CaseFile from './caseFile';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

const Row = styled(bRow)`
margin-left:0px !important;
margin-right:0px !important;
`;
const ABImage = styled(Image)`
    width: 100%;
`;
const Div = styled.div`
    margin-top: 15px;
`;

class CaseMedia extends Component{
    render(){
        return(
            <Div className={'container-fluid'}>
            <Row>
                {
                    [caseimg,caseimg2,caseimg3,caseimg,caseimg2,caseimg3].map((item,index) => <Col xs={'12'} sm={'6'} md={'6'} lg={'4'} key={`abImage${index}`}>
                            <ABImage src={item} />
                        <div>{`We make roads #${index+1}`}</div>
                    </Col>
                )}
            </Row>
            <CaseFile/>
            </Div>
        )
    }
}
export default CaseMedia