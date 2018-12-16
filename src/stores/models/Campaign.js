import { computed } from 'mobx'
import { Model } from 'mobx-rest'
import Employee from 'stores/models/Employee'
import campaignMembers from 'stores/collections/campaignMembers'

export default class Campaign extends Model {
  @computed
  get memberships (): Array<CampaignMember> {
    return campaignMembers.models.filter(e =>
      e.get('campaign_id') === this.get('id')
    )
  }

  @computed
  get employees (): Array<Employee> {
    return this.memberships.map(m => m.employee)
  }
}
