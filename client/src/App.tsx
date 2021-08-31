import './App.scss'

import * as Pages from './pages'
import * as Templates from './template'

import { Redirect, Route, Switch } from 'react-router-dom'
import { Suspense, useEffect } from 'react'

import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation'
import { getPosts } from './actions/posts'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'

function App() {
  const { user, loginWithRedirect } = useAuth0()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div className="App">
      <Templates.Navbar />

      <div className="pages">
        <Suspense fallback={<LoadingAnimation />}>
          <Switch>
            <Route path="/" exact={true}>
              <Pages.Home />
            </Route>
            <Route path="/post/:id" exact={true}>
              <Pages.Home />
            </Route>
            <Route path="/form" exact={true} component={Pages.InputForm} />
            {/* <Route path="/form" exact={true}>
              {user ? (
                <Pages.InputForm
                  title=""
                  tags=""
                  message=""
                  creator={`${user?.email}`}
                />
              ) : (
                <Redirect to="/" />
              )}
            </Route> */}
            <Route path="/form/:id" exact={true} component={Pages.InputForm} />
            {/* <Route path="/form/:id" exact={true}>
              {user ? (
                <Pages.InputForm
                  title=""
                  tags=""
                  message=""
                  creator={`${user?.email}`}
                />
              ) : (
                <Redirect to="/" />
              )}
            </Route> */}
            {/* 
            {user ? (
              <Route
                path="/form/:id"
                exact={true}
                component={Pages.InputForm}
              />
            ) : (
              <Redirect to="/" />
            )} */}
            <Route path="/dashboard" exact={true}>
              {user ? <Pages.Dashboard /> : <Redirect to="/" />}
            </Route>
            <Route>
              <Pages.Page404 />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  )
}

export default App
