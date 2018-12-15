// @flow
import React, { Component } from 'react'
import Title from 'components/Title'

type Props = {
  title: string,
  description: string,
  centered?: boolean,
  separator?: boolean
}

export default class Header extends Component<Props> {
  render() {
    return <Title {...this.props} />
  }
}
