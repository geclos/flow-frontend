import React, { Component } from 'react'

import styles from './ErrorFallback.module.scss'

export default () => (
  <div className={styles.root}>
    <div className={styles.message}>
      We are sorry. There was an error loading the application.
    </div>
  </div>
)
