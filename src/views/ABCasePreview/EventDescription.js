import React ,{Component} from 'react';
import{Button, Col} from 'reactstrap';
import styled from 'styled-components';
import CaseCreator from './CaseCreator';
import CaseMedia from './CaseMedia';

const ColTex = styled(Col)`
width:736px;
height:246px;
border-bottom:1px solid #C4C4C4;
border-top:1px solid #C4C4C4;
overflow-y: scroll;`;


class EventDescription extends Component{
    render(){
        return(
            <div>
                <h1>Building better roads</h1>
                <div className="small text-muted"> Event description:</div>
                <Col col="6" sm="4" md="2" xs="2">
                    <Button  block color="secondary" aria-pressed="true">
                        <span style={{margin:"5px"}}>Reading mode</span>
                        <i className="icon-book-open"></i>
                    </Button>
                </Col>
                <ColTex>
                </ColTex>
                <CaseCreator/>
                <CaseMedia/>
            </div>
        
        )
    }
}
export default EventDescription