// @flow
import { LabeledInput } from 'components/Form'
import { TextArea } from 'informed'
import * as React from 'react'

import styles from './TextArea.module.scss'

type Props = {}

export default function (props: Props) {
  return (
    <LabeledInput label={props.label}>
      <TextArea {...props} className={styles.root} />
    </LabeledInput>
  )
}
