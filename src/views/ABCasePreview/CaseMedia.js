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
margin-right:0px !important;`


class CaseMedia extends Component{
    render(){
        return(
            <div>
            <Row>
                <Col xs={'12'} sm={'6'} md={'6'} lg={'4'}>
                    <Image src={caseimg} />
                    <div>We make roads #1</div>
                </Col>
                <Col xs={'12'} sm={'6'} md={'6'} lg={'4'}>
                    <Image src={caseimg2}/>
                    <div>We make roads #2</div>
                </Col>
                <Col xs={'12'} sm={'6'} md={'6'} lg={'4'}>
                    <Image src={caseimg2}/>
                    <div>We make roads #3</div>
                </Col>
                <Col xs={'12'} sm={'6'} md={'6'} lg={'4'}>
                    <Image src={caseimg}/>
                    <div>We make roads #1</div>
                </Col>
                <Col xs={'12'} sm={'6'} md={'6'} lg={'4'}>
                    <Image src={caseimg2}/>
                    <div>We make roads #2</div>
                </Col>
                <Col xs={'12'} sm={'6'} md={'6'} lg={'4'}>
                    <Image src={caseimg}/>
                    <div>We make roads #3</div>
                </Col>
            </Row>
            <CaseFile/>
            </div>
        )
    }
}
export default CaseMedia