import React from 'react'; 

const Button = (props) => {
  const { id, className, handleClick, title, type } = props;
  return (
    <input
      id={id}
      className={className}
      type={type}
      onClick={handleClick}
      value={title}
    />
  );
}

// TODO: Remove comments
// Button.propType = {
//   className: React.PropTypes.string.isRequired,
//   handleClick: React.PropTypes.func.isRequired,
//   title: React.PropTypes.string.isRequired,
//   type: React.PropTypes.string.isRequired
// }

export default Button;