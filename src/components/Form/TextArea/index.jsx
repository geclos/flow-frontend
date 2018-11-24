// @flow
import { TextArea } from 'informed'
import * as React from 'react'

import styles from './TextArea.module.scss'

type Props = {}

export default function (props: Props) {
  return <TextArea {...props} className={styles.root} />
}
