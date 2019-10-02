import React from 'react';
import { Col, Collapse,} from 'reactstrap';
import EvenntsContacts from './EventsContacts';
import ArrowUp from './img/ArrowUp.svg';
import ArrowDown from './img/ArrowDown.svg';

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
                <Col md={{ span: "6", offset: "4"}} xs={{span: "6", offset: "4"}} onClick={this.toggle} className={'mb-1'} id="toggleCollapse1">
                    <img src={ !this.state.collapse ? this.state.ArrowDown : this.state.ArrowUp} />
                </Col>
            </div>
        )
    }
}
export default EventCollaps