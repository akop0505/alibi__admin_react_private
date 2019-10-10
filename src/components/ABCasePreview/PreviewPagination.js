import React from 'react';
import {  Pagination as bPaginatuon, PaginationItem, PaginationLink, Col as bCol} from 'reactstrap';
import styled from 'styled-components';

const Pagination = styled(bPaginatuon)`
width:160px;`;

const Col = styled (bCol)`
padding-right:2px;
padding-left:2px;
padding-top:2px;
padding-bottom:2px;`;

const Span= styled.span`
text-decoration: underline;
`;



export const PreviewPagination = (props) => {
    return (
        <div>
            <Pagination>
                <Col>
                    <i className="cui-chevron-left "></i>
                </Col>
                <Col >
                    <Span>Part#1</Span>
                </Col>
                <Col >
                    <Span>Part#2</Span>
                </Col>
                <Col >
                    <Span>Part#3</Span>
                </Col>

              {/* <PaginationItem>
                
                    <span>Part#2</span>
                
              </PaginationItem>
              <PaginationItem>
                
                <span>Part#3</span>
                
              </PaginationItem> */}
                <Col>
                    <i className="cui-chevron-right "></i>
                </Col>
            </Pagination>
        </div>
    )
}