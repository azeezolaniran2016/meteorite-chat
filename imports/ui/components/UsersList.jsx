import React from 'react';
import UserListItem from './UserListItem';

const UserList = () => {
  const users = [
    {name: 'Olaniran Azeez'}, {name: 'Olaniran Akeem'}, {name: 'Olaniran Ahmed'}
  ].map((usr, index) => <UserListItem key={index} name={usr.name}/>);
  return (
    <div  className="user-list">
      <ul>
        {users}
      </ul>
    </div>
  );
}

export default UserList;
