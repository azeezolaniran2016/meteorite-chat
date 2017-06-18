import React from 'react';

const TextArea = (props) => {
  const { className, text, handleChange, placeholder } = props;
  return (
    <textarea
      value={text}
      className={className}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}

// TODO: Remove comments
// TextArea.propType = {
//   className: React.PropTypes.string.isRequired,
//   text: React.PropTypes.string.isRequired,
//   handleChange: React.PropTypes.func.isRequired
// }

export default TextArea;