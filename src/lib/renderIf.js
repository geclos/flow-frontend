// @flow
export default function renderIf (show: boolean): Function {
  return (component: Function) => {
    if (!show) return null
    return component()
  }
}
