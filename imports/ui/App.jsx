import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ChatPanel from './components/ChatPanel';
import UsersPanel from './components/UsersPanel';
import { Messages } from '../../api/db';

class App extends React.Component {

  render() {
    this.props.messages.forEach(
      element => console.log(element)
    );
    return (
      <div>
        <div className="app-header row">
          <span><i className="fa fa-comments-o fa-lg" aria-hidden="true"></i> Meteorite Chat</span>
        </div>
        <div className="row main">
          <UsersPanel />
          <ChatPanel />
          <div className="col-2">
            Ads should be here
          </div>
        </div>
        <div className="app-footer row">
          <span>Meteor.js Solution</span>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    messages: Messages.find({}).fetch()
  }
}, App);
