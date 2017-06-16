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
          Meteorite Chat
        </div>
        <div className="row">
          <UsersPanel />
          <ChatPanel />
        </div>
        <div className="app-footer row">
          Footer Meteorite
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
