import Header from '../Header'
import React, { Component } from 'react'

import styles from './App.module.scss'

// TODO: check if user is logged in

class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Header />
      </div>
    )
  }
}

export default App
