import React from 'react'
import ChatThread from './ChatThread';
import ChatInput from './ChatInput';

class ChatPanel extends React.Component {
  render() {
    return (
      <div className="col-8 chat-panel">
        <ChatThread />
        <ChatInput />
      </div>
    );
  }
}

export default ChatPanel;
