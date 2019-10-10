import React ,{Component} from 'react';
import {Row as bRow, Col, Button as bButton} from 'reactstrap';
import styled from 'styled-components';

const Row = styled(bRow)`
margin-left:0px !important;
margin-right:0px !important;`;

const Button =  styled(bButton)`
width:50%;`

class CaseFile extends Component{
    render(){
        return(
            <div>
            
                <Row>
                    <Col lg={'1'}>
                        <Button block color="secondary">
                                <i className="fa fa-file-text"></i>
                        </Button>
                        </Col>
                        
                        <Col lg={'1'}>
                        <Button block color="secondary">
                                <i className="fa fa-file-text"></i>
                        </Button>
                        </Col>
                    
                            <Col lg={'1'}>price.pdf (2MB)</Col>
                
                </Row>
                
                
              
        
            </div>
        )
    }
}
export default CaseFile