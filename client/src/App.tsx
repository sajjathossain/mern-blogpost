import './App.scss';

import * as Pages from './pages'
// ! Template Imports
import * as Templates from './template'

import { Route, Switch } from 'react-router-dom'

import { getPosts } from './actions/posts'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()

  useEffect(() => { 
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div className="App">
      <Templates.Navbar />

      <div className="pages">
        <Switch>
          <Route path="/" component={Pages.Home} exact={true} />
          <Route path="/post/:id" component={Pages.Home} exact={true} />
          <Route path="/form" component={Pages.InputForm} exact={true} />
          <Route path="/dashboard" component={Pages.Dashboard} exact={true} />
          <Route component={Pages.Page404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
