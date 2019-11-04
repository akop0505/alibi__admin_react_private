import React ,{Component} from 'react';
import {Row as bRow, Pagination, Col}  from 'reactstrap';

import styled from 'styled-components';

const Audio = styled.audio`
width:100%;
padding:15px 0 15px 0;
`;

const MoreCol = styled(Col)`
padding: 0 !important`;

const Row = styled (bRow)`
align-items: center;
`;

const BodyDiv = styled.div`
margin-top:48px;
`;




class CaseAudio extends Component{
    render(){
        return(
                <BodyDiv>
                    <div>Audiodescription:</div>
                    <Row>
                        <Col lg='1'>
                            <i className="icon-arrow-left icons"></i>
                        </Col>
                        <Col lg='3'>
                            <Audio controls></Audio>
                        </Col>
                        <Col lg='3'>
                            <Audio controls></Audio>
                        </Col>
                        <Col lg='3'>
                            <Audio controls></Audio>
                        </Col>
                        <MoreCol lg='1'>+3 more...</MoreCol>
                        <Col lg='1'><i className="icon-arrow-right icons"></i></Col>
                    </Row>
                </BodyDiv>
            )
        }
    }
export default CaseAudio