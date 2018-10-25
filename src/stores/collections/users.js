import { Collection } from 'mobx-rest'
import User from '../models/User'

class Users extends Collection {
  url () {
    return '/users'
  }

  model () {
    return User
  }
}

export default new Users()
