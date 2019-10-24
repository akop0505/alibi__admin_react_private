import React ,{Component} from 'react';
import {Row, Pagination, Col}  from 'reactstrap';

import styled from 'styled-components';

const Audio = styled.audio`
width:100%;
padding:15px 0 15px 0;
`;


class CaseAudio extends Component{
    render(){
        return(
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
                <Col lg='1'>+3 more...</Col>
                <Col lg='1'><i className="icon-arrow-right icons"></i></Col>
            </Row>
        )
    }
}
export default CaseAudio