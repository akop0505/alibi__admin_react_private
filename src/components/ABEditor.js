import React from 'react';
import {EditorState, convertToRaw, convertFromHTML, ContentState} from 'draft-js'
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import './ABEditor.css';

class ABEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  componentDidMount() {
    const {props} = this;
    if (props.initValue) {
      const blocksFromHTML = convertFromHTML(props.initValue);
      const iState = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      this.setState({editorState: EditorState.createWithContent(iState)});
    }
  }

  onEditorStateChange = (edState) => {
    const {props} = this;

    this.setState({
      editorState: edState
    });
    const vHtml = draftToHtml(convertToRaw(edState.getCurrentContent()));
    props.onChange(vHtml);
  };

  render() {
    const {state} = this;

    return (<Editor
      editorState={state.editorState}
      wrapperClassName="wrapper-class"
      editorClassName={"ab_editor"}
      toolbarClassName="toolbar-class"
      onEditorStateChange={this.onEditorStateChange}
    />);
  };
}

export default ABEditor;