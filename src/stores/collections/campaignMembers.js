import { Collection } from 'mobx-rest'
import CampaignMember from '../models/CampaignMember'

class CampaignMembers extends Collection {
  url () {
    return '/campaign_members'
  }

  model () {
    return CampaignMember
  }
}

export default new CampaignMembers()
