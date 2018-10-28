import { NavLink } from 'react-router-dom'
import cn from 'classnames/bind'
import React, { Component } from 'react'

import styles from './NavButton.module.scss'

type Props = {
  to: string,
  exact?: boolean,
  children: React.Node,
  size: 'medium' | 'small'
}

const cx = cn.bind(styles)

export default class NavButton extends Component<Props> {
  static defaultProps = {
    size: 'medium',
    exact: false
  }

  render () {
    const { children, to, size, exact } = this.props

    return (
      <NavLink
        to={to}
        exact={exact}
        className={cx('root', size)}
        activeClassName={styles.active}
      >
        {children}
      </NavLink>
    )
  }
}
