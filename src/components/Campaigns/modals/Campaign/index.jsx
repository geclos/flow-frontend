// @flow
import {
  Form,
  Group,
  Text,
  TextArea,
  DatePicker
} from 'components/Form'

import { Modal, Header } from 'components/Modal'
import { Pad } from 'components/Layout'
import autobind from 'autobind-decorator'
import Button from 'components/Buttons/Button'
import campaignMembers from 'stores/collections/campaignMembers'
import campaigns from 'stores/collections/campaigns'
import employees from 'stores/collections/employees'
import React, { Component } from 'react'
import users from 'stores/collections/users'

type Props = {
  closeModal: Function
}

type State = {
  loading: boolean
}

export default class CampaignModal extends Component<Props, State> {
  state = {
    loading: false
  }

  @autobind
  async submit ({
    date,
    emails,
    revenue_in_cents,
    number_of_patents,
    growth_percentage_in_cents
  }: Object) {
    this.setState({ loading: true })

    await campaigns.rpc('start', {
      date,
      emails,
      revenue_in_cents,
      number_of_patents,
      growth_percentage_in_cents
    }, { optimistic: false })

    await users.fetch()
    await employees.fetch()
    await campaigns.fetch()
    await campaignMembers.fetch()

    this.setState({ loading: false })

    this.props.closeModal()
  }

  render() {
    const { loading } = this.state

    return (
      <Modal close={this.props.closeModal}>
        <Header
          centered
          title='Create a campaign'
          description='You can invite as many employees as you want to the campaign. They will all receive an invitation email.'
        />
        <Pad>
          <Form onSubmit={this.submit}>
            {({ formApi }) => (
              <React.Fragment>
                <Group multi>
                  <DatePicker
                    label="Starts on"
                    field="date"
                    placeholder="Campaign's start date"
                  />
                  <Text
                    label="Revenue (euros)"
                    field="revenue_in_cents"
                    placeholder='E.g: 50000'
                  />
                </Group>
                <Group>
                  <Text
                    label="Number of patents"
                    field="number_of_patents"
                    placeholder='E.g: 3'
                  />
                </Group>
                <Group>
                  <Text
                    label="Growth rate (%)"
                    field="growth_percentage_in_cents"
                    placeholder='E.g: 15'
                  />
                </Group>
                <Group>
                  <TextArea
                    label="Employee emails"
                    field="emails"
                    placeholder='E.g: employee1@acme.com,employee2@acme.com'
                  />
                </Group>
                <Button disabled={loading} onClick={formApi.submitForm}>
                  Create campaign
                </Button>
              </React.Fragment>
            )}
          </Form>
        </Pad>
      </Modal>
    )
  }
}
