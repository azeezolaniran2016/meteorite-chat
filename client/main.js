import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from '../imports/ui/App';
import Store from '../imports/redux/Store';

Meteor.startup(() => {
  render(
    <Provider store={Store}>
      <App />
    </Provider>
  , document.getElementById('root'));
});
