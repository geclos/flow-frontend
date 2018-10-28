import { Route } from "react-router-dom"
import Header from '../Header'
import Dashboard from '../Dashboard'
import Employees from '../Employees'
import React, { Component } from 'react'

import styles from './App.module.scss'

class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Header />
        <Route path="/" exact component={Dashboard} />
        <Route path="/employees" component={Employees} />
      </div>
    )
  }
}

export default App
