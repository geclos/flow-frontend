import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import employees from '../../stores/collections/employees'
import ErrorFallback from '../ErrorFallback'
import React, { Component } from 'react'
import users from '../../stores/collections/users'

type Props = {
  children: React.Node
}

type State = {
  error: boolean,
  loading: boolean
}

class Bootstrap extends Component<Props, State> {
  state: State = {
    error: false,
    loading: true
  }

  constructor () {
    super()
    this.fetch()
  }

  async fetch () {
    try {
      await Promise.all([
        users.fetch(),
        employees.fetch()
      ])
    } catch (e) {
      this.setState({ error: true })
    } finally {
      this.setState({ loading: false })
    }
  }

  render () {
    const { children } = this.props
    const { loading, error } = this.state
    if (loading) return null
    if (error)  return <ErrorFallback />
    return children
  }
}

export default withRouter(observer(Bootstrap))
