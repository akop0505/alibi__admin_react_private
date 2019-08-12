import React from 'react';
import {Input, Label, Button,FormGroup,Col,Row,CardBody,Card,CardHeader} from 'reactstrap';
import { api } from '../../services/API';

class UserEdit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:{},
            lastname:'',
            firstname:'',
        }
    };
    handleFirstnamChange = event => {this.setState({ firstname: event.target.value })};
    handleLastnameChange = event => {this.setState({ lastname: event.target.value })};
    id=null;
    componentDidMount() {
        this.id =this.props.match.params.id;
        api.get('/users/' + this.id).then(res => {
          const user = res.data;
          this.setState({user,
            lastname: user.lastname,
            firstname: user.firstname
        })    
        })
      };
      handleRemove = (e) => {
        e.preventDefault();
        api.delete('/users/' + this.id)
            .then(res => {
                this.props.history.push('/users')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    handleSubmit = event => {
        event.preventDefault();
        api.put('/users/'+this.id,{
            id:this.id,
            lastname:this.state.lastname,
            firstname:this.state.firstname,
        }).then(res => {
            this.props.history.push('/users')
          }).catch(error=>{
                console.error(error)
          })
        }
render(){
    const {user}=this.state;
    return(
        <div>
        <Col>
            <Card>
            <CardBody>
                <Row>
                    <Col xs="12" sm="6">
                        <FormGroup>
                            <Label htmlFor="firstname">Firstname</Label>
                            <Input 
                                type="text" 
                                name="firstname"
                                required
                                defaultValue={user.firstname}
                                onChange={this.handleFirstnamChange}
                                />
                            <Label htmlFor="lastname">Lastname</Label>
                            <Input 
                                type="text" 
                                name="lastname" 
                                required 
                                defaultValue={user.lastname}
                                onChange={this.handleLastnameChange}
                                />
                        </FormGroup>
                    </Col>
                </Row>
                <Col sm xs="12">
                    <Button color="primary" onClick={this.handleSubmit}>
                        <i className="fa fa-save "></i>&nbsp;SAVE
                    </Button>
                    <Button  color="ghost-danger" onClick={this.handleRemove}>
                    <i className="cui-trash icons "></i>&nbsp;DELETE
                    </Button>
                </Col>
            </CardBody>
            </Card>
        </Col>
        </div>
        )
    }

}
export default UserEdit;