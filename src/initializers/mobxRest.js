// @flow
import jqueryAdapter from 'mobx-rest-jquery-adapter'
import { apiClient } from 'mobx-rest'
import { API_ENDPOINT } from '../config/variables'

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
