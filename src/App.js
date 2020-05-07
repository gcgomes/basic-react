import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Home from './screens/Home';
import Detail from './screens/Detail';

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/detail/:id" component={Detail}/>
        <Route path="/detail" component={Detail}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
