// @flow
import _ from 'lodash'
import * as React from 'react'
import ReactDOM from 'react-dom'
import Tether from 'tether'

import type { Attachment, Constraint } from './types'

type Props = {
  attachment: Attachment,
  targetAttachment?: Attachment,
  constraints?: Array<Constraint>,
  renderElementTag: string,
  offset?: string,
  children?: React.Node,
  onUpdate?: () => any,
  underModal?: boolean,
  onRepositioned?: () => any
}

export default class TetherComponent extends React.Component<Props> {
  targetNode: any = null
  elementParentNode: any = null
  tether: ?Tether = null

  static defaultProps = {
    renderElementTag: 'div'
  }

  componentWillMount () {
    this.createParentNode(this.props)
  }

  componentDidMount () {
    /* eslint "react/no-find-dom-node": "off" */
    this.targetNode = ReactDOM.findDOMNode(this)
    this.update()
    this.registerEventListeners()
  }

  componentWillReceiveProps (nextProps: Props) {
    this.createParentNode(nextProps)
  }

  createParentNode (props: Props) {
    const { underModal, children, renderElementTag } = props
    const elements = React.Children.toArray(children)
    const modal = elements[1]

    if (!modal) return
    if (this.elementParentNode) return

    this.elementParentNode = document.createElement(renderElementTag)
    if (underModal) {
      this.elementParentNode.setAttribute('class', 'underModal')
    }

    // Flow
    if (document.body) {
      document.body.appendChild(this.elementParentNode)
    }
  }

  componentDidUpdate () {
    this.update()
  }

  componentWillUnmount () {
    this.destroy()
  }

  registerEventListeners () {
    if (!this.tether) return

    if (this.props.onUpdate) {
      this.tether.on('update', this.props.onUpdate)
    }

    if (this.props.onRepositioned) {
      this.tether.on('repositioned', this.props.onRepositioned)
    }
  }

  destroy () {
    if (this.tether) {
      this.tether.destroy()
    }

    if (this.elementParentNode) {
      this.elementParentNode.parentNode.removeChild(this.elementParentNode)
    }

    this.elementParentNode = null
    this.tether = null
  }

  update () {
    const { children } = this.props
    const elements = React.Children.toArray(children)
    const modal = elements[1]

    // if no element component provided, bail out
    if (!modal) {
      // destroy Tether element if it has been created
      if (this.tether) {
        this.destroy()
      }
      return
    }

    this.updateTether()
  }

  updateTether () {
    const { offset = '0 0' } = this.props
    // $FlowFixMe: https://github.com/flowtype/flow-typed/issues/654
    const options: any = _.pickBy((this.props: any), Boolean)
    const tetherOptions = {
      target: this.targetNode,
      element: this.elementParentNode,
      offset,
      ...options
    }

    if (!this.tether) {
      this.tether = new Tether(tetherOptions)
    } else {
      this.tether.setOptions(tetherOptions)
    }

    if (this.tether) this.tether.position()
  }

  renderPortal (modal: ?React.Node) {
    if (!this.elementParentNode) return null
    if (!modal) return null
    return ReactDOM.createPortal(modal, this.elementParentNode)
  }

  render () {
    const { children } = this.props
    const elements = React.Children.toArray(children)
    const target = elements[0]
    const modal = elements[1]
    return [target, this.renderPortal(modal)]
  }
}
