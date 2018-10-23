import { Collection } from 'mobx-rest'
import Employee from '../models/Employee'

class Employees extends Collection {
  url () {
    return '/core/employees'
  }

  model () {
    return Employee
  }
}

export default new Employees()
