import { Collection } from 'mobx-rest'
import Campaign from '../models/Campaign'

class Campaigns extends Collection {
  url () {
    return '/campaigns'
  }

  model () {
    return Campaign
  }
}

export default new Campaigns()
