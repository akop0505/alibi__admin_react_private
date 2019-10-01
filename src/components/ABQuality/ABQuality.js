import React from 'react';
import { Col as bCol} from 'reactstrap';
import styled from 'styled-components';


const Col = styled(bCol)`
    padding-left:0px !important;
    padding-right:0px !important;
    font-size: 19px;
    line-height: 22px;
    color:#909090;
`;

export const ABQuality = (props) => {
    return (
    <Col>
        {props.name}
    </Col>)
}