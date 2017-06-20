import React from 'react';
import { ChatMessage } from './output';

class ChatThread extends React.Component {

  componentDidUpdate(prevProps, prevState){
    this.scrollToBottom();
  }

  scrollToBottom() {
    const {chatThread} = this.refs;
    chatThread.scrollTop = chatThread.scrollHeight - chatThread.clientHeight;
  }
  render() {
    const { messages } = this.props;
    const msgItems = messages.map((msg, index) => {
        return (<ChatMessage
          className={`chat-message ${index % 2 === 0 ? 'msg-in': 'msg-out'}`}
          key={msg._id}
          id={msg._id}
          message={msg.message}
          senderName={msg.senderName}
          time={msg.time}
        />);
    });
    return (
      <div className="chat-thread" ref='chatThread'>
        <ul>
          {msgItems}
        </ul>
      </div>
    );
  }
}

export default ChatThread;
