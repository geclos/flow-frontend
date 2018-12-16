// @flow
import * as React from 'react'
import cn from 'classnames/bind'

import styles from './Group.module.scss'

type Props = {
  multi?: boolean,
  children: React.Node
}

const cx = cn.bind(styles)

export default function ({ children, multi }: Props) {
  return (
    <div className={cx('root', { multi })}>
      {children}
    </div>
  )
}
