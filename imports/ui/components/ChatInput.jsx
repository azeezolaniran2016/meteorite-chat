import React from 'react';
import { connect } from 'react-redux';
import { TextArea, IconButton } from './input';

const ChatInput = (props) => {
  const { sendMessage, composeMessage, message, enterNewLine } = props;
  return (
    <div className="chat-input">
      <div className="col-11">
        <TextArea
          className="chat-text-input"
          text={message}
          handleChange={composeMessage}
          placeholder="Enter your message..."
          sendMessage={sendMessage}
          enterNewLine={enterNewLine}
        />
      </div>
      <div className="col-1">
        <IconButton
          className="input-icon"
          iconName="fa fa-send fa-2x"
          handleClick={sendMessage}
        />
      </div>
    </div>
  );
}

export default connect()(ChatInput);
