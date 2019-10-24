import React from 'react';
import {
    Col ,
    Row,
  } from 'reactstrap';
import styled from 'styled-components';

const BRow = styled(Row)`
border-top:1px solid #DEDEDE;
border-bottom:0.5px solid #DEDEDE;
`;

const BCol = styled(Col)`
padding-right:0 !important`;

const ContRow = styled(Row)`
margin-right: 0;
margin-left: 0
border-bottom: 1px solid #DEDEDE;`;

const ContCol = styled(Col)`
padding:4px 0 5px 0 !important;
font-size: 14px;
line-height: 18px;
color:#333333;
`;
const TypeCol = styled(Col)`
padding:4px 0 5px 0 !important;
font-size: 14px;
line-height: 18px;
color:#999999;
`;

class EvenntsContacts extends React.Component{
    render(){
        return(
            <BRow>
                <BCol>
                    <ContRow>
                        <ContCol lg='4' md='4' sm='5'xs='5'>Contact 1:</ContCol>
                        <TypeCol lg='8' md='8' sm='7'xs='7'>+375 29 456 78 90</TypeCol>
                    </ContRow>
                    <ContRow>
                        <ContCol lg='4' md='4' sm='5'xs='5'>Email:</ContCol>
                        <TypeCol lg='8' md='8' sm='7'xs='7'>Emailsupport@gmail.com</TypeCol>
                    </ContRow>
                    <ContRow>
                        <ContCol lg='4' md='4' sm='5'xs='5'>Contact 2:</ContCol>
                        <TypeCol lg='8' md='8' sm='7'xs='7'>+375 29 456 78 90</TypeCol>
                    </ContRow>
                    <ContRow>
                        <ContCol lg='4' md='4' sm='5'xs='5'>Contact 3:</ContCol>
                        <TypeCol lg='8' md='8' sm='7'xs='7'>+375 29 456 78 90</TypeCol>
                    </ContRow>
                    <ContRow>
                        <ContCol lg='4' md='4' sm='5'xs='5'>Contact 4: </ContCol>
                        <TypeCol lg='8' md='8' sm='7'xs='7'>+375 29 456 78 90</TypeCol>
                    </ContRow>
                    {/* <Div>
                        <span>Contact 1:</span>
                        <span>+375 29 456 78 90</span>
                    </Div>
                    <Div>
                        <span>Email:</span>
                        <span>Emailsupport@gmail.com</span>
                    </Div>
                    <Div>
                        <span>Contact 2:</span>
                        <span>+375 29 456 78 90</span>
                    </Div>
                    <Div>
                        <span>Contact 3:</span>
                        <span>+375 29 456 78 90</span>
                    </Div>
                    <div>
                        <span>Contact 4:</span>
                        <span>+375 29 456 78 90</span>
                    </div> */}
                </BCol>
                    {/* <table className='contactTable'>
                        <tbody>
                        <tr >
                            <td className='contactKey'>Contact 1:</td>
                            <td className='contactValue'>+375 29 456 78 90</td>
                        </tr>
                        <tr className='oneContact'>
                            <td className='contactKey'>Email:</td>
                            <td className='contactValue'>Emailsupport@gmail.com</td>
                        </tr>
                        <tr className='oneContact'>
                        <td className='contactKey'>Contact 3:</td>
                        <td className='contactValue'>+375 29 456 78 90</td>
                    </tr>
                    <tr className='oneContact'>
                        <td className='contactKey'>Contact 4:</td>
                        <td className='contactValue'>+375 29 456 78 90</td>
                    </tr>
                    <tr className='oneContact'>
                        <td className='contactKey'>Contact 5:</td>
                        <td className='contactValue'>+375 29 456 78 90</td>
                    </tr>
                    </tbody>
                </table> */}
            </BRow>
        )
    }
}
export default EvenntsContacts