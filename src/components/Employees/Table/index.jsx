// @flow
import { Button } from 'components/Buttons'
import { observer } from 'mobx-react'
import { Pane, Pad } from 'components/Layout'
import employees from 'stores/collections/employees'
import React from 'react'

import styles from './Table.module.scss'

type Props = {
  openModal: Function
}

class Table extends React.Component<Props> {
  render () {
    const { openModal } = this.props

    return (
      <Pane>
        <Pad>
          <div className={styles.tableContainer}>
            <div className={styles.header}>
              <div className={styles.title}>
                {employees.models.length} employees
              </div>
              <div>
                <Button
                  size='small'
                  onClick={openModal}
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
                  Form sent date
                </div>
              </div>
              {employees.models.map(employee =>
                <div key={employee.get('id')} className={styles.row}>
                  <div className={styles.element}>
                    {employee.user.get('email')}
                  </div>
                  <div className={styles.element}>
                    {employee.get('form_sent_at')}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Pad>
      </Pane>
    )
  }
}

export default observer(Table)
