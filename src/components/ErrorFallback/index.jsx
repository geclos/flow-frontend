import { API_ENDPOINT } from 'config/variables'
import React from 'react'

import styles from './ErrorFallback.module.scss'

export default () => (
  <div className={styles.root}>
    <div className={styles.message}>
      We are sorry. There was an error loading the application. Try heading back to <a className={styles.link} href={API_ENDPOINT}> our home page.</a>
    </div>
  </div>
)
