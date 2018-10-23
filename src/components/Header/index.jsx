import React from 'react'

import styles from './Header.module.scss'

export default function Header () {
  return (
    <div className={styles.root}>
      <div className={styles.title}>Flow</div>
      <div className={styles.menu}></div>
      <div className={styles.logout}></div>
    </div>
  )
}
