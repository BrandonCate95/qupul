import React from 'react'

import { createStyles, withStyles, Theme } from '@material-ui/core/styles'
import { FormControl, NativeSelect, InputBase } from '@material-ui/core'
import { EditorFontSizeSelectProps } from '../../../types/Draft'
import { RichUtils, DraftStyleMap } from 'draft-js'

import { EditorState, Modifier } from 'draft-js'
import { getSelectedBlock } from 'draftjs-utils'

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase)

export const styleMap: DraftStyleMap = {
  'font-size-10': {
    fontSize: 10,
  },
  'font-size-12': {
    fontSize: 12,
  },
  'font-size-14': {
    fontSize: 14,
  },
  'font-size-18': {
    fontSize: 18,
  },
  'font-size-24': {
    fontSize: 24,
  },
  'font-size-30': {
    fontSize: 30,
  },
};

export default function EditorFontSizeSelect(props: EditorFontSizeSelectProps) {
  const [fontSize, setFontSize] = React.useState(12)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const currentFontSize = fontSize
    const newFontSize = event.target.value as number
    console.log(newFontSize)

    setFontSize(newFontSize)

    // props.setEditorState(RichUtils.toggleInlineStyle(props.editorState, `font-size-${currentFontSize}`))
    // props.setEditorState(RichUtils.toggleInlineStyle(props.editorState, `font-size-${newFontSize}`))

    const blockType = getSelectedBlock(props.editorState).getType() !== `font-size-${newFontSize}` ? `font-size-${newFontSize}` : 'unstyled'
  
    const newContentState = Modifier.setBlockType(props.editorState.getCurrentContent(), props.editorState.getSelection(), blockType)
    props.setEditorState(EditorState.push(props.editorState, newContentState, "change-block-data"))
  }

  return (
    <form autoComplete="off">
      <FormControl>

        <NativeSelect
          value={fontSize}
          onChange={handleChange}
          input={<BootstrapInput name="age" id="age-customized-native-simple" />}
        >
          <option value={10}>10</option>
          <option value={12}>12</option>
          <option value={14}>14</option>
          <option value={18}>18</option>
          <option value={24}>24</option>
          <option value={30}>30</option>
        </NativeSelect>
      </FormControl>
    </form>
  )
}