import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import {api} from './../../services/API';


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
                <div>
                    <TextField id="standard-name"/>
                </div>
                <div>
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
                <div>
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
                <Button variant="contained" color="secondary" className='classesButton'>
        Delete
        
      </Button>
            </div>
        )
    }
}
export default CaseEdit 