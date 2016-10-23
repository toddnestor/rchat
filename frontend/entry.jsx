import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import RChatContainer from './components/rchat_container';

const App = () => (
  <Provider store={store}>
    <RChatContainer />
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
  <App />,
    document.getElementById('root')
  );
});