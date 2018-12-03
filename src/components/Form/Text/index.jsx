// @flow
import { LabeledInput } from 'components/Form'
import { Text } from 'informed'
import * as React from 'react'

import styles from './Text.module.scss'

type Props = {}

export default function (props: Props) {
  return (
    <LabeledInput label={props.label}>
      <Text {...props} className={styles.root} />
    </LabeledInput>
  )
}
