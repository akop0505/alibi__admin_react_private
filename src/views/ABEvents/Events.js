import React, { Component } from 'react';
import {events} from './data';
import {Row, Table, FormGroup,Input,Label,Button } from 'reactstrap';
import moment from 'moment';

class Events extends Component {
    constructor(props){
        super(props);
        this.state={
            events :events
            
        };
    };
   
    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>
                                    <FormGroup check className="checkbox">
                                        <Input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        id="checkbox1" 
                                        name="checkbox1" 
                                        value="option1"
                                        />
                                        <Label check className="form-check-label" htmlFor="checkbox1"></Label>
                                    </FormGroup>
                                </th>
                                <th>id</th>
                                <th>Name</th>
                                <th>Discription</th>
                                <th>Label</th>
                                <th>creation <br/>data</th>
                                <th>Header<br/> tamblet</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.events.map(function(el){
                                return (
                                    <tr key={el.id.toString()}>
                                        <td>
                                            <FormGroup check className="checkbox">
                                                <Input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="checkbox1" 
                                                name="checkbox1" 
                                                value="option1" />
                                                <Label check className="form-check-label" htmlFor="checkbox1"></Label>
                                            </FormGroup>
                                        </td>
                                        <td>{el.id}</td>
                                        <td>{el.name}</td>
                                        <td dangerouslySetInnerHTML={{__html: el.description}}/>
                                        <td dangerouslySetInnerHTML={{__html: el.label}}/>
                                        <td>{moment(el.creationDate).format("DD.MM.YYYY")}</td>
                                        <td>
                                            <Button active block color="primary" aria-pressed="true">
                                            SHOW<br/>
                                            HEADER<br/>
                                            PREVIEW
                                            </Button>
                                        </td>
                                    </tr>
                                )
                                })
                                }
                        </tbody>
                    </Table>
                </Row>
            </div>
        );
    }
}

export default Events;
