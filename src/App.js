import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

import './styles.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={routes.Home} component={Home} exact />
          <Route path={routes.About} component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

App.defaultProps = {
  route: null
}

export default App;