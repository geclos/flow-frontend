// @flow
import { Form, Group, TextArea } from 'components/Form'
import { Modal, Header } from 'components/Modal'
import { Pad } from 'components/Layout'
import autobind from 'autobind-decorator'
import Button from 'components/Buttons/Button'
import employees from 'stores/collections/employees'
import React, { Component } from 'react'
import users from 'stores/collections/users'

type Props = {
  closeModal: Function
}

type State = {
  loading: boolean
}

export default class InviteEmployeesModal extends Component<Props, State> {
  state = {
    loading: false
  }

  @autobind
  async submit (values: Object) {
    this.setState({ loading: true })

    await employees.rpc('bulk_create', { emails: values.emails })
    await users.fetch()
    await employees.fetch()

    this.setState({ loading: false })

    this.props.closeModal()
  }

  render() {
    const { loading } = this.state

    return (
      <Modal close={this.props.closeModal}>
        <Header
          centered
          title='Invite employees'
          description='You can invite as many employees as you want. They will all receive an invitation email.'
        />
        <Pad>
          <Form onSubmit={this.submit}>
            {({ formApi }) => (
              <React.Fragment>
                <Group>
                  <TextArea field="emails" />
                </Group>
                <Button disabled={loading} onClick={formApi.submitForm}>
                  Invite employees
                </Button>
              </React.Fragment>
            )}
          </Form>
        </Pad>
      </Modal>
    )
  }
}
