// @flow
import BlankSlate from 'components/BlankSlate'
import employees from 'stores/collections/employees'
import InviteEmployeesModal from './modals/InviteEmployees'
import React, { Component } from 'react'
import Table from './Table'
import Title from 'components/Title'
import WithToggleState from 'components/WithToggleState'

import styles from './Employees.module.scss'

type Props = {}

export default class Employees extends Component<Props> {
  renderInviteEmployeesModal (isOpen: boolean, toggle: Function) {
    if (!isOpen) return false
    return <InviteEmployeesModal closeModal={toggle(false)} />
  }

  renderBlankSlate () {
    return (
      <BlankSlate>
        <Title
          title='No employees added'
          description="You have to add employees in order for us to start processing information"
          separator
          centered
        />
      </BlankSlate>
    )
  }

  renderContent (toggle: Function) {
    if (!employees.models.length) return this.renderBlankSlate()
    return <Table openModal={toggle(true)} />
  }

  render() {
    return (
      <div className={styles.root}>
        <WithToggleState isOpened={!employees.models.length}>
          {({ isOpen, toggle }) => (
            <React.Fragment>
              {this.renderInviteEmployeesModal(isOpen, toggle)}
              {this.renderContent(toggle)}
            </React.Fragment>
          )}
        </WithToggleState>
      </div>
    )
  }
}
