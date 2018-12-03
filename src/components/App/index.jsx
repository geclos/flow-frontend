import { observer } from "mobx-react"
import { Route, withRouter } from "react-router"
// import Dashboard from '../Dashboard'
import Campaigns from '../Campaigns'
import Header from '../Header'
import React, { Component } from 'react'
// import employees from 'stores/collections/employees'

import styles from './App.module.scss'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className={styles.root}>
          <Route path="/" component={Campaigns} />
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(observer(App))
