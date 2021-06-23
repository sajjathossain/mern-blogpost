import './App.scss';

import * as Pages from './pages'
// ! Template Imports
import * as Templates from './template'

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Templates.Navbar />

      <div className="pages">
        <Switch>
          <Route path="/" component={Pages.Home} exact={true} />
          <Route path="/form" component={Pages.InputForm} exact={true} />
          <Route path="/dashboard" component={Pages.Dashboard} exact={true} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
