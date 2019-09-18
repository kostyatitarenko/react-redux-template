import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '~/store';
import routes from '~/routes';
import Menu from '~cm/Menu';
import './styles.scss';

const App = () => {
  const routesComponents = routes.map(route => {
    return (
      <Route
        path={route.url}
        component={route.component}
        exact={route.exact}
        key={route.url}
      />
    );
  });
  return (
    <Provider store={store}>
      <Router>
        <Menu />
        <Switch>{routesComponents}</Switch>
      </Router>
    </Provider>
  );
};

App.defaultProps = {
  route: null
};

export default App;
