// @flow
import * as React from 'react'
import renderIf from 'lib/renderIf'

import styles from './LabeledInput.module.scss'

type Props = {
  label?: string,
  children: React.Node
}

class LabeledInput extends React.Component<Props> {
  render () {
    const { label, children } = this.props

    if (!label) return children

    return (
      <div>
        {renderIf(!!label)(() =>
          <label className={styles.label}>{label}</label>)
        }
        {children}
      </div>
    )
  }
}

export default LabeledInput
