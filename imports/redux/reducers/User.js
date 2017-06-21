import * as Actions from '../actions/Constants';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

export default (state = {}, action) => {
  switch (action.type) {
    case Actions.LOGIN: {
      const { email, password } = action.user;
      Meteor.loginWithPassword(email, password, (err) => {
        if (err) {
          return console.log('login failed')
        }
        console.log('Login successful');
      });
      return state;
    }
    case Actions.LOGOUT: {
      console.log('Logout action fired by reducer');
      Meteor.logout();
      return state;
    }
    case Actions.DELETE_ACCOUNT: {
      console.log('Delete action fired by reducer');
      return state;
    }
    case Actions.CREATE_ACCOUNT: {
      Accounts.createUser(action.user, (err) => {
        if (err) {
          return console.log('Error occurred when creating user', err);
        }
        console.log("user created");
      });
      return state;
    }
    default: {
      return state;
    }
  }
}