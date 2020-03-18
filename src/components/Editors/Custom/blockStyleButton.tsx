import React, { SyntheticEvent } from 'react'

import { EditorState, Modifier } from 'draft-js'
import { getSelectedBlock } from 'draftjs-utils'
import { BlockStyleButtonProps } from '../../../types/Draft'

function BlockStyleButton(props: BlockStyleButtonProps) {

  const styleActive = !getSelectedBlock(props.editorState).getType().search( props.blockType )
  
  const _onStyleClick = (event: SyntheticEvent) => {
    event.preventDefault()

    var newBlockType = getSelectedBlock(props.editorState).getType() as string

    console.log(styleActive)
    console.log(newBlockType)

    if( styleActive ) newBlockType.replace( props.blockType, "" )
    else newBlockType.concat( ` ${props.blockType}` )

    console.log(newBlockType)

    console.log(newBlockType.trim())
    console.log(newBlockType.trim() === "")

    if( newBlockType.trim() === "" ) newBlockType = 'unstyled'

    console.log(newBlockType)

    // const blockType = getSelectedBlock(props.editorState).getType() !== props.blockType ? props.blockType : 'unstyled'
  
    const newContentState = Modifier.setBlockType(props.editorState.getCurrentContent(), props.editorState.getSelection(), newBlockType)
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