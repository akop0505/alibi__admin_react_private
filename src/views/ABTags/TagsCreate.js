import React from 'react';
import {Input,
    Label,
    Button,
    FormGroup,
    Col,
    Row,
    CardBody,
    Card,
    } from 'reactstrap';
import { api } from '../../services/API';

class TagsEdit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            text:'',
        }
    };
    handleTextChange = event => {this.setState({ text: event.target.value })};
    handleSubmit = event => {
        event.preventDefault();
        api.post('/tags',{
            text:this.state.text,
        }).then(res => {
            this.props.history.push(`/tags/${res.data.id}`)
          }).catch(error=>{
                console.error(error)
          })
        };
    render(){
        return(
            <div>
                <Col>
            <Card>
            <CardBody>
                <Row>
                    <Col xs="12" sm="6">
                        <FormGroup>
                            <Label htmlFor="firstname">text</Label>
                            <Input 
                                type="text" 
                                name="firstname"
                                required
                                onChange={this.handleTextChange} 
                                />
                        </FormGroup>
                    </Col>
                </Row>
                <Col sm xs="12">
                    <Button color="primary" onClick={this.handleSubmit}>
                        <i className="fa fa-save "></i>&nbsp;SAVE
                    </Button>
                </Col>
            </CardBody>
            </Card>
        </Col>
            </div>
        )
    }
}
export default TagsEdit;