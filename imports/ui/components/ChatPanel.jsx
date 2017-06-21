import React from 'react'
import ChatThread from './ChatThread';
import ChatInput from './ChatInput';

const ChatPanel = ({
  sendMessage, messages, composeMessage, message, enterNewLine, selectedUser
}) => {
  console.log(messages)
  return (
    <div className="col-7 chat-panel">
      <ChatThread
        messages={messages}
        selectedUser={selectedUser}
      />
      <ChatInput
        sendMessage={sendMessage}
        composeMessage={composeMessage}
        message={message}
        enterNewLine={enterNewLine}
      />
    </div>
  );
}

export default ChatPanel;
