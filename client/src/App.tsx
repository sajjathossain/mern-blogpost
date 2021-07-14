import './App.scss';

import * as Pages from './pages'
import * as Templates from './template'

import { Route, Switch } from 'react-router-dom'
import { Suspense, useEffect } from 'react'

import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation';
import { getPosts } from './actions/posts'
import { useDispatch } from 'react-redux'

function App() {
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
            <Route path="/"  exact={true}>
              <Pages.Home />
            </Route> 
            <Route path="/post/:id" exact={true}>
              <Pages.Home />
            </Route>
            <Route path="/form" exact={true} component={Pages.InputForm} />
            <Route path="/form/:id" exact={true} component={Pages.InputForm} /> 
            <Route path="/dashboard" exact={true}>
              <Pages.Dashboard />
            </Route>
            <Route>
              <Pages.Page404 />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
