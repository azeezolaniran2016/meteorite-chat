import React from 'react';

const ChatMessage = (props) => {
  const { id, message, sender, className } = props;
  console.log('class name - ', className);
  return (
    <li key={id} className={className}>
        <div className="msg-head"> <span className="user-name">{sender}</span> <i className="msg-time">20:48:09</i></div>
        <div className="msg-body">{message}</div>
    </li>
  );
}

export default ChatMessage;