import React from 'react';

const ChatMessage = (props) => {
  const { id, message, sender } = props;
  return (
    <li key={id} className="chat-message">
      <strong><i>{sender}</i></strong>: {message}
    </li>
  );
}

export default ChatMessage;