import React from 'react'; 

const Button = (props) => {
  const { className, handleClick, title } = props;
  return (
    <input
      className={className}
      type="button"
      onClick={handleClick}
      value={title}
    />
  );
}

// TODO: Remove comments
// Button.propType = {
//   className: React.PropTypes.string.isRequired,
//   handleClick: React.PropTypes.func.isRequired,
//   title: React.PropTypes.string.isRequired
// }

export default Button;