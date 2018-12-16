// @flow
import { Button } from 'components/Buttons'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import Label from 'components/Label'
import Campaign from 'stores/models/Campaign'
import EmployeesModal from 'components/Campaigns/modals/Employees'
import moment from 'moment'
import React from 'react'
import WithToggleState from 'components/WithToggleState'

import styles from './Table.module.scss'

type Props = {
  campaign: Campaign
}

@observer
class Table extends React.Component<Props> {
  @computed
  get date (): moment {
    return moment(this.props.campaign.get('date')).format('DD/MM/YYYY')
  }

  @computed
  get employees (): Array<Employee> {
    return this.props.campaign.employees
  }

  renderEmployeesModal (isOpen: boolean, toggle: Function) {
    const { campaign } = this.props
    if (!isOpen) return false
    return <EmployeesModal campaign={campaign} closeModal={toggle(false)} />
  }

  renderTable (toggle: Function) {
    return (
      <div className={styles.tableContainer}>
        <div className={styles.header}>
          <div className={styles.title}>
            <strong>{this.date} campaign</strong> | {this.employees.length} employees
          </div>
          <div>
            <Button
              size='small'
              onClick={toggle(true)}
            >
              Add employees +
            </Button>
          </div>
        </div>
        <div className={styles.table}>
          <div className={styles.header}>
            <div className={styles.element}>
              email
            </div>
            <div className={styles.element}>
              Submition status
            </div>
          </div>
          {this.employees.map(employee =>
            <div key={employee.get('id')} className={styles.row}>
              <div className={styles.element}>
                {employee.user.get('email')}
              </div>
              <div className={styles.element}>
                <Label>Pending</Label>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  render () {
    return (
      <React.Fragment>
        <WithToggleState>
          {({ isOpen, toggle }) => (
            <React.Fragment>
              {this.renderEmployeesModal(isOpen, toggle)}
              {this.renderTable(toggle)}
            </React.Fragment>
          )}
        </WithToggleState>
      </React.Fragment>
    )
  }
}

export default observer(Table)
