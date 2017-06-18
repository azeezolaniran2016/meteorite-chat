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
        <div className="col-11">
        <TextArea
          className="chat-text-input"
          text={message}
          handleChange={this.composeMessage}
          placeholder="Enter your message..."
        />
        </div>
        <div className="col-1">
        <IconButton
          className="input-icon"
          iconName="fa fa-send fa-2x"
          handleClick={this.sendMessage}
        />
        </div>
      </div>
    );
  }
}

export default ChatInput;
