import React, {Component} from 'react';
import {Table,Input,Label,FormGroup,Button } from 'reactstrap';
import {api} from './../../services/API';

class Cases extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[],
        }
    };
    componentDidMount(){
        api.get('/users').then(res=>{
            const users = res.data;
            this.setState({users});
            console.log(users)
            });
        };
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
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((el)=>{
                            return(
                                <tr key={el.id.toString()}>
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
                                    <td>{el.firstname}</td>
                                    <td>{el.lastname}</td>
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

