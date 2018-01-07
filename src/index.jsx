//top level component of app
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Template from './components/Template';

//AppContainer is created by react hot loader
//render block is replaced with a function because we need to call it twice
const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component headline="Test Headline" count={56789} showCount />
    </AppContainer>,
    document.querySelector('#react-app'),
  );
};

//initialize the function above
renderApp(Template);

//hot reloader shows changes
if (module && module.hot) {
  module.hot.accept('./components/Template', () => {
    renderApp(Template);
  });
}

