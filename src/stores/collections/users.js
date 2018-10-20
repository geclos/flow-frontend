import { Collection } from 'mobx-rest'
import User from 'stores/models/User'

class Users extends Collection {
  url () {
    return '/core/users'
  }

  model () {
    return User
  }
}

export default new Users()
