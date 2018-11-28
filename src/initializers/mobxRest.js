// @flow
import { API_LOCATION } from '../config/variables'
import { apiClient } from 'mobx-rest'
import jqueryAdapter from 'mobx-rest-jquery-adapter'

if (!API_LOCATION) {
  throw new Error('undefined API_LOCATION')
}

export default () => {
  apiClient(jqueryAdapter, {
    apiPath: API_LOCATION,
    commonOptions: {
      xhrFields: {
        withCredentials: true
      }
    }
  })
}
