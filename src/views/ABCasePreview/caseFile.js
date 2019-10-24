import React ,{Component} from 'react';
import {Row as bRow, Col as bCol, Button, Table} from 'reactstrap';
import styled from 'styled-components';

const Row = styled(bRow)`
margin-left:0px !important;
margin-right:0px !important;`;

const Col = styled(bCol)`
padding-top:10px !important;`;

const Th= styled.th`
padding:0 10px 0 0 !important
`;
class CaseFile extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col>Attached files:</Col>
                </Row>
                <Row >
                    
                <Col lg='4' md='6' sm='6' xs='12'>
                    <table>
                        <thead>
                            <tr>
                                <Th><Button block color="secondary">
                            <i className="fa fa-file-text"></i>
                        </Button></Th>
                                <Th><Button block color="secondary">
                            <i className="fa fa-download"></i>
                        </Button></Th>
                                <Th>price.pdf (2MB)</Th>
                            </tr>
                        </thead>
                    </table>
                </Col>
                <Col lg='4' md='6' sm='6' xl='4'>
                    <table>
                        <thead>
                            <tr>
                                <Th><Button block color="secondary">
                            <i className="fa fa-file-text"></i>
                        </Button></Th>
                                <Th><Button block color="secondary">
                            <i className="fa fa-download"></i>
                        </Button></Th>
                                <Th>price.pdf (2MB)</Th>
                            </tr>
                        </thead>
                    </table>
                </Col>
                <Col lg='4' md='6' sm='6' xl='4'>
                    <table>
                        <thead>
                            <tr>
                            <Th><Button block color="secondary">
                            <i className="fa fa-file-text"></i>
                        </Button></Th>
                                <Th><Button block color="secondary">
                            <i className="fa fa-download"></i>
                        </Button></Th>
                                <Th>price.pdf (2MB)</Th>
                            </tr>
                        </thead>
                    </table>
                </Col>
                <Col lg='4' md='6' sm='6' xl='4'>
                    <table>
                        <thead>
                            <tr>
                            <Th><Button block color="secondary">
                            <i className="fa fa-file-text"></i>
                        </Button></Th>
                                <Th><Button block color="secondary">
                            <i className="fa fa-download"></i>
                        </Button></Th>
                                <Th>price.pdf (2MB)</Th>
                            </tr>
                        </thead>
                    </table>
                </Col>
                <Col lg='4' md='6' sm='6' xl='4'>
                    <table>
                        <thead>
                            <tr>
                            <Th><Button block color="secondary">
                            <i className="fa fa-file-text"></i>
                        </Button></Th>
                                <Th><Button block color="secondary">
                            <i className="fa fa-download"></i>
                        </Button></Th>
                                <Th>price.pdf (2MB)</Th>
                            </tr>
                        </thead>
                    </table>
                </Col>
                <Col lg='4' md='6' sm='6' xl='4'>
                    <table>
                        <thead>
                            <tr>
                            <Th><Button block color="secondary">
                            <i className="fa fa-file-text"></i>
                        </Button></Th>
                                <Th><Button block color="secondary">
                            <i className="fa fa-download"></i>
                        </Button></Th>
                                <Th>price.pdf (2MB)</Th>
                            </tr>
                        </thead>
                    </table>
                </Col>
                <Col lg='4' md='6' sm='6' xl='4'>
                    <table>
                        <thead>
                            <tr>
                            <Th><Button block color="secondary">
                            <i className="fa fa-file-text"></i>
                        </Button></Th>
                                <Th><Button block color="secondary">
                            <i className="fa fa-download"></i>
                        </Button></Th>
                                <Th>price.pdf (2MB)</Th>
                            </tr>
                        </thead>
                    </table>
                </Col>
                <Col lg='4' md='6' sm='6' xl='4'>
                    <table>
                        <thead>
                            <tr>
                            <Th><Button block color="secondary">
                            <i className="fa fa-file-text"></i>
                        </Button></Th>
                                <Th><Button block color="secondary">
                            <i className="fa fa-download"></i>
                        </Button></Th>
                                <Th>price.pdf (2MB)</Th>
                            </tr>
                        </thead>
                    </table>
                </Col>
                </Row>
            </div>
        )
    }
}
export default CaseFile