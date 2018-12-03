// @flow
import { Button } from 'components/Buttons'
import { observer } from 'mobx-react'
import { Pane, Pad } from 'components/Layout'
import BlankSlate from 'components/BlankSlate'
import campaigns from 'stores/collections/campaigns'
import CampaignModal from './modals/Campaign'
import React, { Component } from 'react'
import Table from './Table'
import Title from 'components/Title'
import WithToggleState from 'components/WithToggleState'

import styles from './Campaigns.module.scss'

type Props = {}

export default @observer class Campaigns extends Component<Props> {
  renderAddButton (toggle: Function) {
    return (
      <div className={styles.btnContainer}>
        <div className={styles.btn}>
          <Button onClick={toggle(true)}>
            Create campaign +
          </Button>
        </div>
      </div>
    )
  }

  renderCampaignModal (isOpen: boolean, toggle: Function) {
    if (!isOpen) return false
    return <CampaignModal closeModal={toggle(false)} />
  }

  renderBlankSlate (toggle: Function) {
    return (
      <BlankSlate>
        <Title
          title='No campaigns created, yet.'
          description="Start creating your first campaign and adding employees to get the most out of iFlow."
          separator
          centered
        />
      {this.renderAddButton(toggle)}
      </BlankSlate>
    )
  }

  renderContent (toggle: Function) {
    if (!campaigns.models.length) return this.renderBlankSlate(toggle)

    return (
      <Pane>
        <Pad>
          <div className={styles.addContainer}>
            {this.renderAddButton(toggle)}
          </div>
          {campaigns.models.map(campaign =>
            <div key={campaign.get('id')} className={styles.campaign}>
              <Table campaign={campaign} />
            </div>
          )}
        </Pad>
      </Pane>
    )
  }

  render() {
    return (
      <div className={styles.root}>
        <WithToggleState isOpened={!campaigns.models.length}>
          {({ isOpen, toggle }) => (
            <React.Fragment>
              {this.renderCampaignModal(isOpen, toggle)}
              {this.renderContent(toggle)}
            </React.Fragment>
          )}
        </WithToggleState>
      </div>
    )
  }
}
