import React from 'react'

import styles from './BlankSlate.module.scss'

class BlankSlate extends React.Component {
  render () {
    return (
      <div className={styles.root}>
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default BlankSlate;
