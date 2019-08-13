import React from 'react';
import {Input, Label, Button,FormGroup,Col,Row,CardBody,Card,CardHeader} from 'reactstrap';
import { api } from '../../services/API';

class CreateUser extends React.Component{
    constructor(props){
        super(props);
            this.state={
                id:'',
                lastname:'',
                firstname:'',
            }
    };
    handleFirstnamChange = event => {this.setState({ firstname: event.target.value })};
    handleLastnameChange = event => {this.setState({ lastname: event.target.value })};
    handleSubmit = event => {
        event.preventDefault();
        api.post('/users',{
            id:this.state.id,
            lastname:this.state.lastname,
            firstname:this.state.firstname,
            
        }).then(res => {
            const id = res.data.id;
            this.props.history.push(`/users/${id}`)
          }).catch(error=>{
                
          })
        };
    render(){
        return(
            <div>
                <Col xs="12" sm="6">
                    <Card>
                        <CardBody>
                            <Row>
                                <Col xs="12">
                                    <FormGroup onSubmit={this.handleSubmit}>
                                        <Label htmlFor="firstname">Firstname</Label>
                                        <Input 
                                            type="text" 
                                            name="firstname"  
                                            placeholder="new" 
                                            required 
                                            onChange={this.handleFirstnamChange} 
                                        />
                                        <Label htmlFor="lastname">Lastname</Label>
                                        <Input 
                                            type="text" 
                                            name="lastname"  
                                            placeholder="user" 
                                            required 
                                            onChange={this.handleLastnameChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Col sm xs="12" className="text-center mt-3">
                                <Button 
                                    color="primary" 
                                    onClick={this.handleSubmit}>
                                <i className="fa fa-save "></i>
                                &nbsp;SAVE
                                </Button>
                            </Col>
                        </CardBody>
                    </Card>
                </Col>   
            </div>
        )
    }
}
export default CreateUser;