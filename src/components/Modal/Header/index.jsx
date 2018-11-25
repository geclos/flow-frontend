// @flow
import React, { Component } from 'react'
import Title from 'components/Title'

import styles from './Header.module.scss'

type Props = {
  title: string,
  description: string,
  centered?: boolean,
  separator?: boolean
}

export default class Header extends Component<Props> {
  render() {
    return (
      <div className={styles.root}>
        <Title {...this.props} />
      </div>
    )
  }
}
