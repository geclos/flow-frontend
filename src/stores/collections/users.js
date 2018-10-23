import { Collection } from 'mobx-rest'
import User from '../models/User'

class Users extends Collection {
  url () {
    return '/core/users'
  }

  model () {
    return User
  }
}

export default new Users()
