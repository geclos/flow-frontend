import BlankSlate from 'components/BlankSlate'
import React, { Component } from 'react'
import Title from 'components/Title'

export default class Index extends Component {
  renderBlankSlate () {
    return (
      <BlankSlate>
        <Title
          title='Not enough information'
          description="We are receiving and processing employees' information. We'll notify you when results are available."
          separator
          centered
        />
      </BlankSlate>
    )
  }

  render () {
    return this.renderBlankSlate()
  }
}
