import React from 'react';
import {Input,
    Label,
    Button,
    InputGroupAddon,
    Col,
    Row,
    CardBody,
    InputGroup,
    } from 'reactstrap';
import { api } from '../../services/API';
import { ABRectangle } from '../../components/ABRectangle/ABRectangle';
import { ABButton } from '../../components/ABButtons/ABButton';

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
            <Col>
                <h4><strong>Tags</strong></h4>
                <h4>Systemic:</h4>
                <Row>
                    <Col xs='4'>
                        <InputGroup>
                            <Input type="text" id="text-input" name="text-input"/>
                            <InputGroupAddon addonType="append">
                                <Button type="button" color="warning">save</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                    <Col xs='4'>
                
                      
                            <ABRectangle name={"Berlin"}/>
                        
                            <ABRectangle name={"22"}/>
                       
                            <ABRectangle name={"Document"}/>
                        
                
                    </Col>
                </Row>
                    <h4>Custom:</h4>
                <Row>
                    <Col>
                        <ABButton name={"Add tag"} icon={'plus'}/>
                        <ABRectangle name={"Work"}/>
                        <ABRectangle name={"Life"}/>
                    </Col>
                    
                </Row>
            </Col>
        )
    }
}
export default TagsEdit;