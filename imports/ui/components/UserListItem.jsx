import React from 'react';

const UserListItem = (props) => {
  const { name } = props;
  return (
    <li>
      <div className="user-name">
        {name} <span style={{float: 'right', color: '#69F0AE'}} className="online">
          <i className="fa fa-circle" style={{fontSize: '0.5em'}} aria-hidden="true"></i>
        </span>
      </div>
    </li>
  );
}

export default UserListItem;