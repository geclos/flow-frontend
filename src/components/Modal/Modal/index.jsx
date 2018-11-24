// @flow
import { Portal } from 'react-portal'
import * as React from 'react'
import $ from 'jquery'
import autobind from 'autobind-decorator'

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
    return (
      <Portal node={document.body}>
        <div className={styles.background}>
          <div className={styles.modal}>
            {this.props.children}
          </div>
        </div>
      </Portal>
    )
  }
}
