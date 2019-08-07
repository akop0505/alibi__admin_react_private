import React from 'react';
import { Editor , EditorState} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class Creat extends React.Component {
    constructor(props){
        super(props);
        
    }
    onEditorStateChange(event){
        console.log(event);
    }
    render(){
        return(
            <div>
            <Editor
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName=""
                onEditorStateChange={this.onEditorStateChange}
            />
            </div>
        )    
    }
}

export default Creat;