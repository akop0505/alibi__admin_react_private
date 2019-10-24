import React from 'react';
import { Col, Collapse, Row} from 'reactstrap';
import EvenntsContacts from './EventsContacts';
import ArrowUp from './img/ArrowUp.svg';
import ArrowDown from './img/ArrowDown.svg';
import styled from 'styled-components';

const ColRow = styled(Row)`
background: #FFFFFF;
border-top: 0.5px solid #DEDEDE;;
border-bottom: 0.5px solid #DEDEDE;;
`;


class EventCollaps extends React.Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false,
            status: 'Closed',
            ArrowDown,
            ArrowUp,
        };
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render(){
        return(
            <div>                
                <Collapse isOpen={this.state.collapse}>
                    <EvenntsContacts/>
                </Collapse>
                <ColRow>
                    <Col md={{ size: "6", offset: "3"}} xs={{size: "6", offset: "3"}} lg={{size: "6", offset: "3"}} sm={{size: "6", offset: "3"}} onClick={this.toggle} className={'mb-1'} id="toggleCollapse1">
                        <img src={ !this.state.collapse ? this.state.ArrowDown : this.state.ArrowUp} width='100%' />
                    </Col>
                </ColRow>
            </div>
        )
    }
}
export default EventCollaps