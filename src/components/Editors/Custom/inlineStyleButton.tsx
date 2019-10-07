import React, { SyntheticEvent } from 'react'
import { RichUtils } from 'draft-js'
import { InlineStyleButtonProps } from '../../../types/Draft'

function InlineStyleButton(props: InlineStyleButtonProps) {

  const styleActive = props.editorState.getCurrentInlineStyle().has(props.styleName)

  const _onStyleClick = (event: SyntheticEvent) => {
    event.preventDefault()
    props.setEditorState(RichUtils.toggleInlineStyle(props.editorState, props.styleName))
  }
  
  return( 
    <div
      className={`toolbar-button-container ${styleActive ? 'active' : ''}`}
      style={{userSelect: 'none', margin: '5px'}}
      onMouseDown={_onStyleClick}
    >{props.children}</div>
  )
}

export default InlineStyleButton