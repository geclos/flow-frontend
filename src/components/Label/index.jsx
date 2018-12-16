// @flow
import * as React from 'react'
import cn from 'classnames/bind'

import styles from './Label.module.scss'

type Props = {
  type?: string,
  size?: string
}

const cx = cn.bind(styles)

class Label extends React.Component<Props> {
  static defaultProps = {
    type: 'brand',
    size: 'medium'
  }

  render () {
    const { children, type, size } = this.props
    return (
      <div className={cx('root', type, size)}>
        {children}
      </div>
    )
  }
}

export default Label
