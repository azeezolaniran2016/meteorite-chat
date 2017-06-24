import React from 'react';

const UserListItem = (props) => {
  const { name, id, isSelected, isUser, click } = props;
  return (
    <li
      onClick={click}
      id={id}
      style={{backgroundColor: `${isSelected ? '#607D8B': ''}`}}
    >
      <div
        id={id}
        className="user-name"
      >
        <span id={id} style={{color: `${isUser ? '#00BCD4' : ''}`}}>{name}</span>
        <span id={id}
          style={{float: 'right', color: '#69F0AE', backgroundColor: `${isSelected ? '#607D8B': ''}`}}
          className="online"
        >
        <i id={id}
          className="fa fa-circle"
          style={{fontSize: '0.5em'}}
          aria-hidden="true"
        />
        </span>
      </div>
    </li>
  );
}

export default UserListItem;