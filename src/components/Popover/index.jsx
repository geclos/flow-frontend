// @flow
import { HotKeys } from 'react-hotkeys'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import autobind from 'autobind-decorator'
import classNames from 'classnames/bind'
import OutsideClickHandler from 'react-outside-click-handler'
import TetherComponent from 'components/Tether'

import styles from './Popover.module.scss'

import type { Attachment } from 'components/Tether/types'

type Props = {
  attachment: Attachment,
  children: React.Node,
  className?: string,
  constraints?: Array<any>,
  offset?: string,
  open: boolean,
  overflowContent: boolean,
  overlay?: boolean,
  targetAttachment?: Attachment,
  toggle: (value: boolean) => Function
}

const cx = classNames.bind(styles)

export default class Popover extends React.Component<Props> {
  static defaultProps = { overflowContent: false }
  clickedOutside: boolean

  // Hack: to fight the HotKeys -> https://github.com/facebook/react/issues/5534
  @autobind
  autofocus (el: any) {
    /* eslint "react/no-find-dom-node": "off" */
    const found: any = ReactDOM.findDOMNode(el)
    if (!found) return

    const x = window.scrollX
    const y = window.scrollY

    found.focus()

    // Move back to the previous coordinates
    window.scrollTo(x, y)
  }

  @autobind
  cancel () {
    this.props.toggle(false)()
  }

  @autobind
  onClick () {
    if (this.clickedOutside) return // Avoid to close and reopen when clicking on the button

    this.props.toggle(!this.props.open)()
  }

  @autobind
  onOutsideClick (event: any) {
    this.clickedOutside = true
    setImmediate(() => {
      this.clickedOutside = false
    })
    this.cancel()
  }

  renderPopover () {
    const { className, open, overflowContent } = this.props
    const children = React.Children.toArray(this.props.children)

    if (!open) return null

    return (
      <div className={className}>
        <OutsideClickHandler onOutsideClick={this.onOutsideClick}>
          <HotKeys
            keyMap={{ keyEscape: 'escape' }}
            handlers={{ keyEscape: this.cancel }}
            className={styles.popover}
            ref={this.autofocus}
          >
            <div className={cx('popoverContent', { overflowContent })}>
              {children[1]}
            </div>
            <div className={styles.arrow} />
          </HotKeys>
        </OutsideClickHandler>
      </div>
    )
  }

  render () {
    const {
      constraints,
      attachment,
      targetAttachment,
      open,
      offset
    } = this.props
    const children = React.Children.toArray(this.props.children)

    if (children.length !== 2) {
      throw new Error('Popover expects two children elements')
    }

    const defaultContrains = [
      {
        to: 'window',
        attachment: 'together',
        pin: false
      }
    ]

    return (
      <div>
        <TetherComponent
          attachment={attachment}
          offset={offset}
          targetAttachment={targetAttachment}
          constraints={constraints || defaultContrains}
        >
          {children &&
            React.cloneElement(children[0], {
              onClick: this.onClick,
              role: 'button',
              tabIndex: '0'
            })}
          {open && this.renderPopover()}
        </TetherComponent>
      </div>
    )
  }
}
