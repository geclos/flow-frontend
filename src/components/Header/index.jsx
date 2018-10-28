import Button from '../Buttons/Button'
import cn from 'classnames/bind'
import NavButton from '../Buttons/NavButton'
import React, { Component } from 'react'

import styles from './Header.module.scss'

const cx = cn.bind(styles)

export default class Header extends Component {
  render () {
    return (
      <div className={styles.root}>
        <div className={cx('row', 'top')}>
          <div className={styles.content}>
            <div className={styles.title}>
              iFlow
            </div>
            <div>
              <Button outline size='smaller' to='/'>
                Logout
              </Button>
            </div>
          </div>
        </div>
        <div className={cx('row', 'bottom')}>
          <div className={styles.content}>
            <div className={styles.navButtonContainer}>
              <NavButton exact to='/'>
                Dashboard
              </NavButton>
            </div>
            <div className={styles.navButtonContainer}>
              <NavButton to='/employees'>
                Employees
              </NavButton>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
