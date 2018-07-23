require('normalize.css/normalize.css');
require('styles/main.scss');

import React from 'react';
import Home from 'components/home'

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
