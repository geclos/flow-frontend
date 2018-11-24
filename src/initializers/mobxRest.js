// @flow
import { API_ENDPOINT } from '../config/variables'
import { apiClient } from 'mobx-rest'
import jqueryAdapter from 'mobx-rest-jquery-adapter'

if (!API_ENDPOINT) {
  throw new Error('undefined API_ENDPOINT')
}

export default () => {
  apiClient(jqueryAdapter, {
    apiPath: API_ENDPOINT,
    commonOptions: {
      xhrFields: {
        withCredentials: true
      }
    }
  })
}
