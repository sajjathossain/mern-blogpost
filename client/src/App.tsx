import './App.scss';

import * as Pages from './pages'
// ! Template Imports
import * as Templates from './template'

import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Templates.Navbar />

      <div className="pages">
        <Switch>
          <Route path="/" component={Pages.Home} exact={true} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
