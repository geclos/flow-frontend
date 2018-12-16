import { computed } from 'mobx'
import { Model } from 'mobx-rest'
import Campaign from 'stores/models/Campaign'
import campaigns from 'stores/collections/campaigns'
import Employee from 'stores/models/Employee'
import employees from 'stores/collections/employees'

export default class CampaignMember extends Model {
  @computed
  get employee (): Employee {
    return employees.models.find(e => e.get('id') === this.get('employee_id'))
  }

  @computed
  get campaign (): Campaign {
    return campaigns.models.find(c => c.get('id') === this.get('campaign_id'))
  }
}
