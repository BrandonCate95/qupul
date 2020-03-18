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

interface BlockGroup {
  [key: string]: {
    element: string,
    style: React.CSSProperties
  }
}

const customBlocks: Array<BlockGroup> = [
  {
    'text-align-left': {
      element: 'div',
      style: {
        textAlign: 'left'
      }
    },
    'text-align-center': {
      element: 'div',
      style: {
        textAlign: 'center'
      }
    },
    'text-align-right': {
      element: 'div',
      style: {
        textAlign: 'right'
      }
    }
  },
  {
    'font-size-10': {
      element: 'div',
      style: {
        fontSize: '10px'
      }
    },
    'font-size-12': {
      element: 'div',
      style: {
        fontSize: '12px'
      }
    },
    'font-size-14': {
      element: 'div',
      style: {
        fontSize: '14px'
      }
    },
    'font-size-18': {
      element: 'div',
      style: {
        fontSize: '18px'
      }
    },
    'font-size-24': {
      element: 'div',
      style: {
        fontSize: '24px'
      }
    },
    'font-size-30': {
      element: 'div',
      style: {
        fontSize: '30px'
      }
    },
  }
]

const BlockWrapper = (props) => {
  let elements = React.Children.toArray(props.children)
  return (
    <React.Fragment>
      {React.cloneElement(elements[0], { style: props.style })}
    </React.Fragment>
  )
}

function createBlockRenderMap(blocks: Array<BlockGroup>){
  const customBlockRenderMap = {}

  blocks.forEach(blockGroup => {
    
    Object.keys(blockGroup).forEach(blockName => {

        customBlockRenderMap[blockName] = {
          element: blockGroup[blockName].element,
          wrapper: <BlockWrapper style={blockGroup[blockName].style} />
        }

    })

  })

  return customBlockRenderMap
}

const blockRenderMap = Map( createBlockRenderMap(customBlocks) )

// Include 'paragraph' as a valid block and updated the unstyled element but
// keep support for other draft default block types
const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap)

/**
 * 
 * @param contentBlock
 */
function myBlockStyleFn(contentBlock) {
  const type = contentBlock.getType() as string
  var fullBlockClassName = ''

  customBlocks.forEach(classGroup => {
    const classNames = Object.keys( classGroup )
    
    for(var i = 0; i < classNames.length; i++){

      if( type.search( classNames[i] ) > -1 ){
        fullBlockClassName.concat(classNames[i] + ' ')
        break // break out of loop if one is found --> only want one class added per classGroup
      }

    }

  }) 
    
  return fullBlockClassName  
}

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

      <div style={{}}>
      </div>

      
    </Box>

  );
}
export default AddPage