import React ,{Component} from 'react';
import{Button, Col, Row} from 'reactstrap';
import styled from 'styled-components';
import CaseCreator from './CaseCreator';
import { PreviewPagination } from '../../components/ABCasePreview/PreviewPagination';
import CaseAudio from './CaseAudio';


const EventTex = styled.div`
width:100%;
height:246px;
border-bottom:1px solid #C4C4C4;
border-top:1px solid #C4C4C4;
overflow-y: scroll;
margin-top:4px;
`;
const SmallText = styled.div`
padding-top:19px !important;`;


class EventDescription extends Component{
    render(){
        return(
            <div>
                <PreviewPagination/>
                <h1>Building better roads</h1>
                <Row>
                    <Col sm="4" md="3" xs="5" lg="3" >
                        <SmallText className="small text-muted"> Event description:</SmallText>
                    </Col>
                    <Col  sm={{size:5,offset:3}} md={{size:4,offset:5}} xs={{size:7,offset:0}} lg={{size:4,offset:5}}>
                        <Button  block color="secondary" aria-pressed="true">
                            <span style={{margin:"5px"}}>Reading mode</span>
                            <i className="icon-book-open"></i>
                        </Button>
                    </Col>
                    <Col sm="12" md="12" xs="12" lg='12'>
                    <EventTex>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Et odio nunc, ut elit. Elit aliquam elementum sed nam. Nunc
                    lectus rhoncus faucibus curabitur. Urna consequat eget leo hendrerit morbi rhoncus. Nisl
                    in scelerisque dui interdum quam fringilla fermentum. Nibh mauris cursus nullam scelerisque 
                    fringilla enim dignissim velit.
                    Id at magna egestas eget. Amet malesuada viverra egestas risus
                    fermentum viverra nulla volutpat. Sagittis felis purus sed pulvinar pellentesque.
                    Auctor elit, ipsum orci montes. Egestas nunc in ornare vestibulum euismod sit integer justo gravida. 
                    Nulla sapien hendrerit convallis est, auctor faucibus nullam nascetur. Eget eget vitae viverra neque, 
                    bibendum. Mattis aliquam vitae ac pharetra. Mattis consequat, turpis nibh convallis. Sed ultrices viverra 
                    elit dignissim orci quis elit. Pharetra commodo at nibh odio. Volutpat porta amet nunc, quam.
                    In in commodo, habitant eget scelerisque non. Elit, in elit, lectus ac. Vitae orci eu id mattis mi eu. 
                    Urna, lorem mus ac diam. Ut aliquam nec tincidunt est, convallis rhoncus quis. Aliquet fermentum sed consequat, 
                    et. Sed suspendisse magnis egestas id nam. Proin est vitae, volutpat tortor non, euismod. Elit feugiat adipiscing
                    laoreet adipiscing porttitor nisi, mauris. Sapien ut sed tellus augue vitae bibendum imperdiet. Morbi tempor eget
                    aliquam tortor varius morbi. Mattis justo, nullam a faucibus. Ante enim dictumst leo integer morbi commodo. Fermentum
                    fusce est a scelerisque tortor, dolor nam diam. Facilisis a, commodo pretium nisi euismod amet malesuada. Dolor nun
                    c tellus nisl nam. In in tortor dictumst donec leo curabitur auctor nec in. Mauris proin est viverra luctus dui. 
                </EventTex>
                    </Col>
                <Col><CaseAudio/></Col>
                </Row>
            </div>
        
        )
    }
}
export default EventDescription