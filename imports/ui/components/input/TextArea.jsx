import React from 'react';

const TextArea = (props) => {
  const { id, className, text, handleChange, placeholder, sendMessage, enterNewLine } = props;
  return (
    <textarea
      id={id}
      value={text}
      className={className}
      onChange={handleChange}
      placeholder={placeholder}
      onKeyPress={(e) => {
        if(e.key === 'Enter') {
          e.shiftKey ? enterNewLine(e) : sendMessage(e);
        };
      }}
    />
  );
}

// TODO: Remove comments
// TextArea.propType = {
//   className: React.PropTypes.string.isRequired,
//   text: React.PropTypes.string.isRequired,
//   handleChange: React.PropTypes.func.isRequired
//   id: React.PropTypes.string.isRequired
// }

export default TextArea;