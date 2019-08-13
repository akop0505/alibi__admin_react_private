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
            tag:{},
            id:'',
            text:''
        }
    };
    handleTextChange = event => {this.setState({ text: event.target.value })};
    id=null;
    componentDidMount() {
        this.id =this.props.match.params.id;
        api.get('/tags/' + this.id).then(res => {
          const tag = res.data;
          this.setState({
              tag,
            text: tag.text,
        })    
        })
      };
      handleRemove = (e) => {
        e.preventDefault();
        api.delete('/tags/' + this.id)
            .then(res => {
                this.props.history.push('/tags')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    handleSubmit = event => {
        event.preventDefault();
        api.put('/tags/'+this.id,{
            id:this.id,
            text:this.state.text,
        }).then(res => {
            this.props.history.push('/tags')
          }).catch(error=>{
                console.error(error)
          })
        }
    render(){
        const {tag}=this.state;
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
                                defaultValue={tag.text}
                                onChange={this.handleTextChange}
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
export default TagsEdit;