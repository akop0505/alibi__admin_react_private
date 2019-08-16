import React from "react";
import Button from '@material-ui/core/Button';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {api} from './../../services/API';
import PlacePicker from "../../components/PlacePicker";
import Grid from '@material-ui/core/Grid';
import './CaseEdit.css'

class CaseEdit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:[],
            tags:[],
        }   
    };
    componentDidMount(){
        api.get('/users').then(res => {
            const users = res.data;
            this.setState({users});
          });
          api.get('/tags').then(res => {
            const tags = res.data;
            this.setState({tags});
          });
    };
   handleChange = name => event => {
        this.setState({
          ...this.state,
          [name]: event.target.value
        });
      };
    render(){
        return(
            <div>
            <div className='caseEditBody'>
                <div>
                    <Grid item xs={8}>
                        <PlacePicker/>
                    </Grid>
                </div>
                <div className='userTag'>
                    <FormControl className='classesFormControl'>
                        <InputLabel htmlFor="age-native-simple">User</InputLabel>
                        <Select
                            native
                            value={this.state.users.lastname}
                        onChange={this.handleChange()}
                    > 
                    <option value=""/>
                        {this.state.users.map((el) => {
                        return (
                            <option key={el.id.toString()}>{el.lastname}</option>
                        )})}
                    </Select>
                </FormControl>
                </div>
                <div className='userTag'>
                <FormControl className='classesFormControl'>
                    <InputLabel htmlFor="age-native-simple">Tags</InputLabel>
                    <Select
                        native
                        value={this.state.tags.text}
                        onChange={this.handleChange()}
                    > 
                    <option value=""/>
                        {this.state.tags.map((el) => {
                        return (
                            <option key={el.id.toString()}>{el.text}</option>
                        )})}
                    </Select>
                </FormControl>
                </div>
                </div>
                <div className="editFooter">
                    <Button variant="contained" color="primary" className='classesButton'>
                        <i className="fa fa-save "></i>&nbsp;Save
                    </Button>
                    <Button  color="secondary" className='buttonDel'>
                        <i className="cui-trash icons "></i>&nbsp;Delete
                    </Button>
                </div>
                </div>
        )
    }
}
export default CaseEdit 