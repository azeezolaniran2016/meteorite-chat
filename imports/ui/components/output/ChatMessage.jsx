import React from 'react';

const ChatMessage = (props) => {
  const { id, message, senderName, className, time } = props;
  return (
    <li key={id} className={className}>
        <div className="msg-head"> <span className="user-name">{senderName}</span> <i className="msg-time">{time}</i></div>
        <div className="msg-body">{message}</div>
    </li>
  );
}

export default ChatMessage;