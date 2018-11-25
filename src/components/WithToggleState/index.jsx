// @flow
import autobind from 'autobind-decorator'
import * as React from 'react'

type Props = {
  isOpened?: boolean,
  children: Function
}

type State = {
  isOpen: boolean
}

class WithToggleState extends React.Component<Props, State> {
  state = {
    isOpen: this.props.isOpened || false
  }

  @autobind
  toggle (value: boolean) {
    return () => this.setState({ isOpen: value })
  }

  render () {
    const { children } = this.props
    const { isOpen } = this.state

    return children({ isOpen, toggle: this.toggle })
  }
}

export default WithToggleState
