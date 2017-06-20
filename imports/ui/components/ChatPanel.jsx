import React from 'react'
import ChatThread from './ChatThread';
import ChatInput from './ChatInput';

const ChatPanel = ({sendMessage, messages, composeMessage, message, enterNewLine}) => {

  return (
    <div className="col-7 chat-panel">
      <ChatThread
        messages={messages}
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
