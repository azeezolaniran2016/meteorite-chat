import React from 'react';
import { TextArea, IconButton } from './input';

class ChatInput extends React.Component {

  constructor() {
    super();
    this.state = {
      message: ''
    }

    this.composeMessage = this.composeMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage() {
    console.log('Send >> ', this.state.message);
    this.setState({ message: '' });
  }

  composeMessage(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    const { message } = this.state;
    return (
      <div className="chat-input">
        <TextArea
          className="chat-text-input"
          text={message}
          handleChange={this.composeMessage}
        />
        <IconButton
          className="chat-send-button"
          iconName="fa fa-send fa-3x"
          handleClick={this.sendMessage}
        />
      </div>
    );
  }
}

export default ChatInput;
