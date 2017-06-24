import React from 'react'
import ChatThread from './ChatThread';
import ChatInput from './ChatInput';

const ChatPanel = ({
  sendMessage, messages, composeMessage, user,
  message, enterNewLine, selectedUser
}) => {
  return (
    <div className="col-8 chat-panel">
      <ChatThread
        messages={messages}
        selectedUser={selectedUser}
        user={user}
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
