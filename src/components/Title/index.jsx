// @flow
import React, { Component } from 'react'
import cn from 'classnames/bind'

import styles from './Title.module.scss'

type Props = {
  title: string,
  description: string,
  centered?: boolean,
  separator?: boolean
}

const cx = cn.bind(styles)

export default class Title extends Component<Props> {
  render() {
    const { centered, title, description, separator } = this.props

    return (
      <div className={cx('root', { centered })}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        {separator && <div className={styles.separator} />}
      </div>
    )
  }
}
