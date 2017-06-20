import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';
import ChatPanel from './components/ChatPanel';
import UsersPanel from './components/UsersPanel';
import { Messages } from '../../api/db';
import * as MessageActions from '../redux/actions/Message'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      message: ''
    }
    this.composeMessage = this.composeMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.enterNewLine = this.enterNewLine.bind(this);
  }

  sendMessage(e) {
    e.preventDefault();
    const { message } = this.state;
    if (!message.trim()) {
      return;
    }
    const { dispatch } = this.props;
    const msgObj = {
      message,
      receiverName: 'test receiver',
      senderName: 'test sender',
      isGeneral: true,
      time: new Date().toLocaleTimeString()
    }
    dispatch(MessageActions.sendMessage(msgObj));
    this.setState({ message: ''});
  }

  enterNewLine(e) {
    e.preventDefault();
    let { message } = this.state;
    message += '\n';
    this.setState({ message })
  }

  composeMessage(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    const { messages } = this.props;
    const { message } = this.state;
    return (
      <div>
        <div className="app-header row">
          <span><i className="fa fa-comments-o fa-lg" aria-hidden="true"></i> Meteorite Chat</span>
        </div>
        <div className="row main">
          <UsersPanel />
          <ChatPanel
            messages={messages}
            sendMessage={this.sendMessage}
            message={message}
            composeMessage={this.composeMessage}
            enterNewLine={this.enterNewLine}
          />
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

const ConnectedApp = connect( state => { state })(App);

export default createContainer(() => {
  return {
    messages: Messages.find({}).fetch()
  }
}, ConnectedApp);
