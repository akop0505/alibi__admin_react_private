import React ,{Component} from 'react';
import{Button, Col as bCol,Table} from 'reactstrap';
import PlacePicker from "../../components/PlacePicker";
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const Span = styled.span`
Font Size: 14px;
Line Height: 16px;
margin-left:5px;`;

const Btable = styled.table`
margin-top:20px;`;

const Col = styled (bCol)`
padding-left:0 !important;
margin-top:10px;`;

class CaseCreator extends Component{
    render(){
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Case creator:</td>
                        </tr>
                        <tr>
                            <td><i className="fa fa-user "></i><Span>John Owlson (id:abcfe)</Span></td>
                        </tr>
                    </tbody>
                </table>
                <Btable>
                    <tbody>
                        <tr>
                            <td>Case time:</td>
                        </tr>
                        <tr>
                            <td><i className="fa fa-calendar-o"><Span>12:26 (UTC+3) — 03.02.2019</Span></i></td>
                        </tr>
                    </tbody>
                </Btable>
                <Btable>
                    <tbody>
                        <tr>
                            <td>Case time:</td>
                        </tr>
                        <tr>
                            <td><i className="fa fa-map-marker"></i><Span>DE, Berlin, Heiligental 43</Span></td>
                        </tr>
                    </tbody>
                </Btable>
                <Col sm="4" md="3" xs="8" lg='6'>
                    <Button  block color="secondary" aria-pressed="true">Open GPS data</Button>
                </Col>
                <Col sm="12" md="12" xs="12" lg="12">
                    <Grid item xs={12} md={12} lg={12} sm={12}>
                        <PlacePicker/>
                    </Grid>
                </Col>    
                
                
                
            </div>
        )
    }
}
export default CaseCreator