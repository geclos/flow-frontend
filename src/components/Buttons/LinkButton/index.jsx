import { Link } from 'react-router-dom'
import cn from 'classnames/bind'
import React, { Component } from 'react'

import styles from './LinkButton.module.scss'

type Props = {
  to: string,
  children: React.Node,
  size: 'medium' | 'small'
}

const cx = cn.bind(styles)

export default class LinkButton extends Component {
  static defaultProps = {
    size: 'medium'
  }

  render () {
    const { children, to, size } = this.props

    return (
      <Link className={cx('root', size)} to={to}>
        {children}
      </Link>
    )
  }
}
