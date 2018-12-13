// @flow
import { Portal } from 'react-portal'
import { ReactComponent as CloseLogo } from 'icons/close.svg'
import * as React from 'react'
import $ from 'jquery'
import autobind from 'autobind-decorator'
import Icon from 'components/Icon'

import styles from './Modal.module.scss'

type Props = {
  close: Function,
  children: React.Node
}

export default class Modal extends React.Component<Props> {
  constructor (props: ModalType) {
    super(props)
    this.restrictScroll()
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount () {
    this.restoreScroll()
  }

  @autobind
  escFunction(event){
    if(event.keyCode === 27) this.props.close()
  }

  restoreScroll () {
    $('html').css({
      'overflow-y': 'scroll'
    })
  }

  restrictScroll () {
    $('html').css({
      'overflow-y': 'hidden'
    })
  }

  render () {
    const { close } = this.props
    return (
      <Portal node={document.body}>
        <div className={styles.background}>
          <div className={styles.modal}>
            <div
              role='button'
              onClick={close}
              className={styles.close}
            >
              <Icon Logo={CloseLogo} />
            </div>
            {this.props.children}
          </div>
        </div>
      </Portal>
    )
  }
}
