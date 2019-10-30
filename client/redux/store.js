import React, { Component } from "react"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"

import reducerProfile from "./reducers/profile"
import reducerFolderAction from "./reducers/folders"

const rootReducer = combineReducers({
  reducerProfile,
  reducerFolderAction,
})

const debug =
  typeof window === "undefined"
    ? false
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, debug)

export default Page =>
  class extends Component {
    render() {
      return (
        <Provider store={store}>
          <Page {...this.props} />
        </Provider>
      )
    }
  }
