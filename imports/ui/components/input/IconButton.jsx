import React from 'react'; 

const IconButton = (props) => {
  const { id, className, iconName, handleClick, title } = props;
  return (
    <span id={id} className={className} onClick={handleClick}>
      <i className={iconName} aria-hidden="true" />
    </span>
  );
}

// TODO: Remove comments
// IconButton.propType = {
//   className: React.PropTypes.string.isRequired,
//   handleClick: React.PropTypes.func.isRequired,
//   title: React.PropTypes.string.isRequired
//   iconName: React.PropTypes.string.isRequired
// }

export default IconButton;