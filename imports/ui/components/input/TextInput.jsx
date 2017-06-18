import React from 'react';

const TextInput = (props) => {
  const { type, className, value, handleChange, placeholder } = props;
  return (
    <input
      type={type}
      value={value}
      className={className}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}

// TODO: Remove comments
// TextInput.propType = {
//   type: React.PropTypes.string.isRequired,
//   className: React.PropTypes.string.isRequired,
//   value: React.PropTypes.string.isRequired,
//   handleChange: React.PropTypes.func.isRequired
// }

export default TextInput;