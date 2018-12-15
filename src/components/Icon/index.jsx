// @flow
import * as React from 'react'
import cn from 'classnames/bind'

import styles from './Icon.module.scss'

type Props = {
  Logo: React.Node,
  size?: string
}

const cx = cn.bind(styles)

class Icon extends React.Component<Props> {
  static defaultProps = { size: 'medium' }

  render () {
    const { Logo, size } = this.props
    return <Logo className={cx('root', size)} />
  }
}

export default Icon
