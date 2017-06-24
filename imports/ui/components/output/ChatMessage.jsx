import React from 'react';

const ChatMessage = (props) => {
  const { id, message, senderName, className, time, displayHeader } = props;
  return (
    <li key={id} className={className}>
        <div className="msg-body">
          {displayHeader && <span className="user-name">
            {senderName}
          </span>}
          {message}
          <span className='msg-time'> - {time}</span>
        </div>
    </li>
  );
}

export default ChatMessage;