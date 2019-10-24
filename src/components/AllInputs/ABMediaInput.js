import React from 'react';
import {Label,
        Input,
        Col as bCol,
        Row as bRow
        }from 'reactstrap';
import styled from 'styled-components';

const Col = styled (bCol)`
padding-left:3px !important;
padding-right:3px !important;`;

const Row = styled(bRow)`
margin:0`;

export const ABMediaInput = (props) => {
        return (
            <Row>
                <Col lg='4' md='4' sm='4' xs='4'>
                    <Label htmlFor="prependedInput">Images</Label>
                    <Input type="select" name="selectSm" id="SelectLm" bsSize="sm" defaultValue="" className="selectInput">
                        <option value="0">yes</option>
                        <option value="1">no</option>  
                        <option value="2">all the same</option>       
                    </Input>
                </Col>
                <Col lg='4' md='4' sm='4' xs='4'>
                    <Label htmlFor="prependedInput">Images</Label>
                    <Input type="select" name="selectSm" id="SelectLm" bsSize="sm" defaultValue="" className="selectInput">
                        <option value="0">yes</option>
                        <option value="1">no</option>  
                        <option value="2">all the same</option>       
                    </Input>
                </Col>
                <Col lg='4' md='4' sm='4' xs='4'>
                    <Label htmlFor="prependedInput">Images</Label>
                    <Input type="select" name="selectSm" id="SelectLm" bsSize="sm" defaultValue="" className="selectInput">
                        <option value="0">yes</option>
                        <option value="1">no</option>  
                        <option value="2">all the same</option>       
                    </Input>
                </Col>
            </Row>		
        )
    };