import React from 'react';
import {Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import img1 from './img/img1.png';
import './EventsStyle.css';
import styled from 'styled-components';

const Audio = styled.audio`
width:100%;
padding:10px 0 10px 0;
`;

const AudioCol =styled(Col)`
padding:0 !important`;

const ImgCol = styled(Col)`
padding-top:10px  !important;`;

const CreatCol = styled(Col)`
background:#DEDEDE;
margin-top:11px;
margin-bottom:12px;`;



class EventsImg extends React.Component{
   render(){
      return(
         <div>
            <AudioCol>
                  <Audio controls></Audio>
            </AudioCol>
            <Row>
               <ImgCol lg='4' md='4' sm='6' xs='6'>
                     <img src={img1} width="100%"/>
               </ImgCol>
               <ImgCol lg='4' md='4' sm='6' xs='6'>
                     <img src={img1} width="100%"/>
               </ImgCol>
               <ImgCol lg='4' md='4' sm='6' xs='6'>
                     <img src={img1} width="100%"/>
               </ImgCol>
               <ImgCol lg='4' md='4' sm='6' xs='6'>
                     <img src={img1} width="100%"/>
               </ImgCol>
               <ImgCol lg='4' md='4' sm='6' xs='6'>
                     <img src={img1} width="100%"/>
               </ImgCol>
               <ImgCol lg='4' md='4' sm='6' xs='6'>
                     <img src={img1} width="100%"/>
               </ImgCol>
               <CreatCol lg='6' md='6' sm='6' xs='7'>Sincerely, John Smith.</CreatCol>
            </Row>
         </div>
      )
   }
}
export default EventsImg