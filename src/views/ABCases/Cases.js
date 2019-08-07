import React, {Component} from 'react';
import {Table,Input,Label,FormGroup,Button } from 'reactstrap';
import {api} from './../../services/API';

class Cases extends Component {
    constructor(props){
        super(props);
        this.state={
            cases:[],
            events:[]
        }
    };
    componentDidMount(){
        api.get('/cases').then(res=>{
            const cases = res.data;
            this.setState({cases});
            console.log(cases)
            });
            api.get('/events').then(res=>{
                const events = res.data;
        
                this.setState({events});
                })
        };
        getElementName(){
            const casesId=this.state.cases.eventsId;
            console.log(casesId)
            
        }
        
    render() {
        return (
            <div className={'text-center'}>
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
                            <th>ID</th>
                            <th>Name</th>
                            <th>Event</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cases.map((el)=>{
                            return(
                                <tr key={el.id}>
                                    <td>
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
                                    </td>
                                    <td>{el.id}</td>
                                    <td>{el.name}</td>
                                    <td>{()=>{this.getElementName()}}</td>
                                    <td>
                                        <Button block color="ghost-primary">
                                            <i className="fa fa-pencil  "></i><br/>EDIT
                                        </Button>
                                    </td>
                            </tr>
                            )
                        })}
                       
                                
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Cases;

