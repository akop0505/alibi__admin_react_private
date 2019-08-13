import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";


class CaseEdit extends React.Component{
    render(){
        return(
            <div>
                  <FormControl className='classesFormControl'>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          native
          value='adadad'
          inputProps={{
            name: "aaa",
            id: "age-native-simple"
          }}
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
            </div>
        )
    }
}
export default CaseEdit 