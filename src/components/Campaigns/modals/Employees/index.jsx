// @flow
import { Form, Group, TextArea } from 'components/Form'
import { Modal, Header } from 'components/Modal'
import { Pad } from 'components/Layout'
import * as React from 'react'
import autobind from 'autobind-decorator'
import Button from 'components/Buttons/Button'
import campaignMembers from 'stores/collections/campaignMembers'
import employees from 'stores/collections/employees'
import users from 'stores/collections/users'

type Props = {
  campaign: Campaign
}

type State = {
  closeModal: Function,
  loading: boolean
}

class EmployeesModal extends React.Component<Props, State> {
  state = { loading: false }

  @autobind
  async submit ({ emails }: Object) {
    const { closeModal, campaign } = this.props

    this.setState({ loading: true})

    await campaign.rpc(
      'add_employees',
      { id: campaign.get('id'), emails },
      { optimistic: false }
    )
    await users.fetch()
    await employees.fetch()
    await campaignMembers.fetch()

    this.setState({ loading: false })

    closeModal()
  }

  render () {
    const { closeModal } = this.props
    const { loading } = this.state
    return (
      <Modal close={closeModal}>
        <Header
          centered
          title='Add employees'
          description='You can invite as many employees as you want to this campaign. They will all receive an invitation email.'
        />
        <Pad>
          <Form onSubmit={this.submit}>
            {({ formApi }) => (
              <React.Fragment>
                <Group>
                  <TextArea
                    label="Employee emails"
                    field="emails"
                    placeholder='E.g: employee1@acme.com,employee2@acme.com'
                  />
                </Group>
                <Button disabled={loading} onClick={formApi.submitForm}>
                  Add employees
                </Button>
              </React.Fragment>
            )}
          </Form>
        </Pad>
      </Modal>
    )
  }
}

export default EmployeesModal
