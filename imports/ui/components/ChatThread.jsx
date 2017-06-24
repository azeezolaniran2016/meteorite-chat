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
    const { messages, selectedUser, user } = this.props;
    let prevId;
    const msgItems = messages.map((msg, index) => {
        prevId = index > 0 ? messages[index - 1].sender._id : null;
        return (<ChatMessage
          className={`chat-message ${selectedUser._id === msg.sender._id ? 'msg-out': 'msg-in'}`}
          key={msg._id}
          id={msg._id}
          message={msg.message}
          senderName={msg.sender.username}
          time={msg.time}
          displayHeader={prevId !== msg.sender._id}
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
