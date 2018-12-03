import { API_LOCATION } from 'config/variables'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import campaignMembers from 'stores/collections/campaignMembers'
import campaigns from 'stores/collections/campaigns'
import employees from 'stores/collections/employees'
import ErrorFallback from 'components/ErrorFallback'
import React, { Component } from 'react'
import users from 'stores/collections/users'

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
        employees.fetch(),
        campaigns.fetch(),
        campaignMembers.fetch()
      ])

      this.setState({ loading: false })
    } catch (e) {
      if (e.status === 401) return window.location = API_LOCATION
      else this.setState({ error: true })
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
