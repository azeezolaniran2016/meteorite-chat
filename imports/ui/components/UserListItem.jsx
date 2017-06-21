import React from 'react';

const UserListItem = (props) => {
  const { name, id, isSelected, isUser, click } = props;
  return (
    <li
      style={{backgroundColor: `${isSelected ? '#607D8B': ''}`}}
    >
      <div
        className="user-name"
        onClick={click}
        id={id}
      >
        {name}
        <span
          style={{float: 'right', color: '#69F0AE', backgroundColor: `${isSelected ? '#607D8B': ''}`}}
          className="online"
        >
        <i
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