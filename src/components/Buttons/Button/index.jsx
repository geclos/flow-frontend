// @flow
import { Link } from 'react-router-dom'
import cn from 'classnames/bind'
import React, { Component } from 'react'

import styles from './Button.module.scss'

type Props = {
  children: React.Node,
  disabled?: boolean,
  href?: string,
  onClick?: () => {},
  outline?: boolean,
  size: 'medium' | 'small' | 'smaller',
  to?: string,
  type: 'brand'
}

const cx = cn.bind(styles)

export default class LinkButton extends Component<Props> {
  static defaultProps = {
    outline: false,
    size: 'medium',
    type: 'brand'
  }

  render () {
    const {
      disabled,
      children,
      to,
      href,
      onClick,
      size,
      type,
      outline
    } = this.props

    if (to) {
      return (
        <Link className={cx('root', size, type, { outline })} to={to}>
          {children}
        </Link>
      )
    }

    if (href) {
      return (
        <a className={cx('root', size, type, { outline })} href={href}>
          {children}
        </a>
      )
    }

    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={cx('root', size, type, { outline, disabled })}
      >
        {children}
      </button>
    )
  }
}
