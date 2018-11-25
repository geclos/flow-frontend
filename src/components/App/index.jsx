import { observer } from "mobx-react"
import { Route, Redirect, withRouter } from "react-router"
import Dashboard from '../Dashboard'
import Employees from '../Employees'
import Header from '../Header'
import React, { Component } from 'react'
import employees from 'stores/collections/employees'

import styles from './App.module.scss'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        <div className={styles.root}>
          <Route path="/" exact render={() => !employees.models.length
            ? <Redirect to="/employees" />
            : <Dashboard />
          } />

          <Route path="/employees" component={Employees} />
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(observer(App))
