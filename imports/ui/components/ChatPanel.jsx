import React from 'react'
import ChatThread from './ChatThread';
import ChatInput from './ChatInput';

const ChatPanel = () => {
  return (
    <div className="col-7 chat-panel">
      <ChatThread />
      <ChatInput />
    </div>
  );
}

export default ChatPanel;
