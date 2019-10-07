import React, { SyntheticEvent } from 'react'

import { EditorState, Modifier } from 'draft-js'
import { getSelectedBlock } from 'draftjs-utils'
import { BlockStyleButtonProps } from '../../../types/Draft'

function BlockStyleButton(props: BlockStyleButtonProps) {

  const styleActive = getSelectedBlock(props.editorState).getType() === props.blockType
  
  const _onStyleClick = (event: SyntheticEvent) => {
    event.preventDefault()

    const blockType = getSelectedBlock(props.editorState).getType() !== props.blockType ? props.blockType : 'unstyled'
  
    const newContentState = Modifier.setBlockType(props.editorState.getCurrentContent(), props.editorState.getSelection(), blockType)
    props.setEditorState(EditorState.push(props.editorState, newContentState, "change-block-data"))
  }
  
  return (
    <div
      className={`toolbar-button-container ${styleActive ? 'active' : ''}`}
      style={{ userSelect: 'none', margin: '5px' }}
      onMouseDown={_onStyleClick}
    >{props.children}</div>
  )
}

export default BlockStyleButton