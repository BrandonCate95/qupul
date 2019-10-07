import React from 'react'

import { Editor, EditorState, RichUtils, DefaultDraftBlockRenderMap } from 'draft-js'
import { Box } from '@material-ui/core'
import { FormatBold, FormatItalic, FormatUnderlined, FormatAlignRight, FormatAlignCenter, FormatAlignLeft } from '@material-ui/icons'
import { Map } from 'immutable'

import 'draft-js/dist/Draft.css'
import './styles.scss'

import InlineStyleButton from '../Editors/Custom/inlineStyleButton'
import BlockStyleButton from '../Editors/Custom/blockStyleButton'
import EditorFontSizeSelect, { styleMap } from '../Editors/Custom/editorFontSizeSelect'

/**
 * Start --> config for block style buttons
 */
const blockRenderMap = Map({
  'text-align-left': {
    element: 'div'
  },
  'text-align-center': {
    element: 'div'
  },
  'text-align-right': {
    element: 'div'
  },
  'font-size-10': {
    element: 'div'
  },
  'font-size-12': {
    element: 'div'
  },
  'font-size-14': {
    element: 'div'
  },
  'font-size-18': {
    element: 'div'
  },
  'font-size-24': {
    element: 'div'
  },
  'font-size-30': {
    element: 'div'
  },
});
// Include 'paragraph' as a valid block and updated the unstyled element but
// keep support for other draft default block types
const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

function myBlockStyleFn(contentBlock) {
  const type = contentBlock.getType()

  if (type === 'text-align-left') {
    return 'text-align-left'
  } 
  if (type === 'text-align-center') {
    return 'text-align-center'
  } 
  if (type === 'text-align-right') {
    return 'text-align-right'
  }

  if (type === 'font-size-10') {
    return 'font-size-10'
  }
  if (type === 'font-size-12') {
    return 'font-size-12'
  }
  if (type === 'font-size-14') {
    return 'font-size-14'
  }
  if (type === 'font-size-18') {
    return 'font-size-18'
  }
  if (type === 'font-size-24') {
    return 'font-size-24'
  }
  if (type === 'font-size-30') {
    return 'font-size-30'
  }
  
}
/**
 * End --> config for block style buttons
 */

function AddPage() {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  )

  const handleKeyCommand = (command, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setEditorState(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  return (
    <Box>
      <Box display="flex" flexDirection="row">
        <InlineStyleButton
          editorState={editorState}
          setEditorState={setEditorState}
          styleName='BOLD'
        ><FormatBold /></InlineStyleButton>

        <InlineStyleButton
          editorState={editorState}
          setEditorState={setEditorState}
          styleName='ITALIC'
        ><FormatItalic /></InlineStyleButton>

        <InlineStyleButton
          editorState={editorState}
          setEditorState={setEditorState}
          styleName='UNDERLINE'
        ><FormatUnderlined /></InlineStyleButton>

        <BlockStyleButton
          editorState={editorState}
          setEditorState={setEditorState}
          blockType='text-align-left'
        ><FormatAlignLeft /></BlockStyleButton>

        <BlockStyleButton
          editorState={editorState}
          setEditorState={setEditorState}
          blockType='text-align-center'
        ><FormatAlignCenter /></BlockStyleButton>

        <BlockStyleButton
          editorState={editorState}
          setEditorState={setEditorState}
          blockType='text-align-right'
        ><FormatAlignRight /></BlockStyleButton>

        <EditorFontSizeSelect 
          editorState={editorState}
          setEditorState={setEditorState}
        />
      </Box>

      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        // customStyleMap={{ ...styleMap }}
        blockStyleFn={myBlockStyleFn}
        blockRenderMap={extendedBlockRenderMap}
        placeholder={'type here...'}
      />

      
    </Box>

  );
}
export default AddPage