import React ,{Component} from 'react'
import {Col , Row as bRow} from 'reactstrap';
import styled from 'styled-components';
import { PreviewHeader } from '../../components/ABCasePreview/PreviewHeader';
import { PreviewPagination } from '../../components/ABCasePreview/PreviewPagination';
import EventDescription from './EventDescription';
import CaseCreator from './CaseCreator';
import CaseMedia from './CaseMedia';
import { CasePreviewFooter } from '../../components/ABCasePreview/CasePreviewFooter';

const Row = styled(bRow)`
margin-left:0px !important;
margin-right:0px !important;`;

const DivBody = styled.div`
background: #FFFFFF;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
margin:60px;`;

const CreatCol = styled(Col)`
background-color:#F3F3F5;
font-size: 30px;
line-height: 35px;
color:black;
margin-top:30px;
`;

class CasePreviewBody extends Component{
    render(){
        return(<div>
                <DivBody>
                        <PreviewHeader/>  
                    <Row>
                        <Col xs={'12'} sm={'12'} md={'12'} lg={'8'}>
                        <EventDescription/> 
                        </Col>
                        <Col xs={'12'} sm={'12'} md={'12'} lg={'4'}>
                        <CaseCreator/>
                        </Col>
                    </Row> 
                    <CaseMedia/>
                    <CreatCol lg='5' sm='6' md='6' xs='12' >
                        <span>With respect, John Owlson!</span>
                    </CreatCol>
                    <CasePreviewFooter/>
                </DivBody>
                </div>
        )
    }
}
export default CasePreviewBody