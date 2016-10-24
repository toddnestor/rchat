import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import RChatContainer from './components/rchat_container';

window._ = require('lodash');

$.ajaxSetup({
  beforeSend: function(xhr ) {
    let user = localStorage.getItem('user');

    if( user )
      user = JSON.parse( user );

    if( user && user.auth_token )
      xhr.setRequestHeader("Authorization", "Basic " + user.auth_token );
  }
});

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