import React ,{Component} from 'react'
import {Nav as bNav, NavItem, NavLink, Col } from 'reactstrap';
import {ABButton} from "../../components/ABButtons/ABButton";
import styled from 'styled-components';
import { PreviewHeader } from '../../components/ABCasePreview/PreviewHeader';
import { PreviewPagination } from '../../components/ABCasePreview/PreviewPagination';
import EventDescription from './EventDescription';

const ColBody = styled(Col)`
padding: 60px 121px 60px 121px !important;
background:#E4E5E6;
background: #FFFFFF;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
padding:0 !important
`;
const ColCard =styled(Col)`
background: #FFFFFF;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
padding:0 !important`
;

class CasePreviewBody extends Component{
    render(){
        return(
                <ColBody>
                        <PreviewHeader/>
                        <PreviewPagination/>
                        <EventDescription/>   
                </ColBody>
        
        )
    }
}
export default CasePreviewBody