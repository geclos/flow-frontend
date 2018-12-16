import { API_LOCATION } from 'config/variables'
import $ from 'jquery'
import Button from '../Buttons/Button'
import cn from 'classnames/bind'
import NavButton from '../Buttons/NavButton'
import React, { Component } from 'react'

import styles from './Header.module.scss'

const cx = cn.bind(styles)

export default class Header extends Component {
  logout () {
    $.ajax({
      url: `${API_LOCATION}/sessions`,
      type: 'DELETE',
      crossDomain: true,
      xhrFields: { withCredentials: true }
    }).done(() =>
      window.location = API_LOCATION
    )
  }

  render () {
    return (
      <div className={styles.root}>
        <div className={cx('row', 'top')}>
          <div className={styles.content}>
            <div className={styles.title}>
              iFlow
            </div>
            <div>
              <Button outline size='smaller' onClick={this.logout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
        <div className={cx('row', 'bottom')}>
          <div className={styles.content}>
            <div className={styles.navButtonContainer}>
              <NavButton exact to='/'>
                Employees
              </NavButton>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
