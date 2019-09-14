import React from 'react';
import { renderRoutes } from 'react-router-config';

import './styles.scss';

const App = ({ route }) => {
  return (
    <div className="App">
      {renderRoutes(route.routes)}
    </div>
  );
}

App.defaultProps = {
  route: null
}

export default App;