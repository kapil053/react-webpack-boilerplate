import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './config/Root';


import { Provider } from 'react-redux';
import createStore from './store';
const store = createStore({});


const render = () => {
  ReactDOM.render(
	  <Provider store={store}>
	    <AppContainer>
	      <Root />
	    </AppContainer>
	  </Provider>,
    document.getElementById('root'),
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./config/Root', () => {
    const newApp = require('./config/Root').default;
    render(newApp);
  });
}

