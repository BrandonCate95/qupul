import { EditorState } from "draft-js"

interface StyleButtonProps {
  editorState: EditorState,
  setEditorState: Function,
}

interface InlineStyleButtonProps extends StyleButtonProps {
  styleName: string,
  children: any,
}

interface BlockStyleButtonProps extends StyleButtonProps {
  blockType: string,
  children: any,
}

interface EditorFontSizeSelectProps extends StyleButtonProps {

}