import { Collection } from 'mobx-rest'
import Employee from 'stores/models/Employee'

class Employees extends Collection {
  url () {
    return '/employees'
  }

  model () {
    return Employee
  }
}

export default new Employees()
