// @flow
import { Link } from 'react-router-dom'
import cn from 'classnames/bind'
import React, { Component } from 'react'

import styles from './Button.module.scss'

type Props = {
  to?: string,
  href?: string,
  onClick?: () => {},
  children: React.Node,
  type: 'brand',
  size: 'medium' | 'small' | 'smaller',
  outline?: boolean
}

const cx = cn.bind(styles)

export default class LinkButton extends Component<Props> {
  static defaultProps = {
    size: 'medium',
    outline: false,
    type: 'brand'
  }

  render () {
    const { children, to, href, onClick, size, type, outline } = this.props

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
      <button className={cx('root', size, type, { outline })} onClick={onClick}>
        {children}
      </button>
    )
  }
}
