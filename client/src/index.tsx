import './index.scss'

import { applyMiddleware, compose, createStore } from 'redux'

import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import reducers from './reducers'
import thunk from 'redux-thunk'

const store = createStore(reducers, compose(applyMiddleware(thunk)))
const auth0_domain = process.env.REACT_APP_AUTH0_DOMAIN
const auth0_client_id = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={`${auth0_domain}`}
      clientId={`${auth0_client_id}`}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
