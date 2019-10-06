import React, { Component } from 'react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './styles.scss'
import HomeButton from '../Editors/Custom/homeButton'
import PublishButton from '../Editors/Custom/publishButton'

// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

const toolbar = {
  options: ['inline', 'fontSize', 'textAlign', 'link'],
  inline: {
    options: ['bold'],
  },
  textAlign: {
    options: ['left', 'center', 'right'],
  },
  link: {
    options: ['link']
  }
}

class AddPage extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          toolbar={toolbar}
          editorState={editorState}
          placeholder={'Type here...'}
          wrapperClassName='demo-wrapper'
          editorClassName='demo-editor'
          onEditorStateChange={this.onEditorStateChange}
          toolbarCustomButtons={[<HomeButton />, <PublishButton />]}
        />
      </div>
    );
  }
}

export default AddPage