import React from 'react';

const ChatMessage = (props) => {
  const { id, message, senderName, className, time, displayHeader } = props;
  return (
    <li key={id} className={className}>
        {
          displayHeader && 
          <div className="msg-head">
            <span className="user-name">
              {senderName}
            </span>
            <i className="msg-time">
              {time}
            </i>
          </div>}
        <div className="msg-body">{message}</div>
    </li>
  );
}

export default ChatMessage;