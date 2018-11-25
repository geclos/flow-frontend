// @flow
import * as React from 'react'

import styles from './Group.module.scss'

type Props = {
  children: React.Node
}

export default function ({ children }: Props) {
  return (
    <div className={styles.root}>
      {children}
    </div>
  )
}
