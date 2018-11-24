// @flow
import * as React from 'react'

import styles from './Pane.module.scss'

type Props = {
  children: React.Node
}

export default function ({ children }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
