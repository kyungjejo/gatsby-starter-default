import React from "react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import rootReducer from './src/reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => <Provider store={createStoreWithMiddleware(rootReducer)}>{element}</Provider>