import { computed } from 'mobx'
import { Model } from 'mobx-rest'
import User from 'stores/models/User'
import users from 'stores/collections/users'

export default class Employee extends Model {
  @computed
  get user (): User {
    return users.mustGet(this.get('user_id'))
  }
}
