import React from 'react';
import UserListItem from './UserListItem';

const UserList = ({
  users, selectedUser, currentUser,
  selectChatUser
}) => {
  const usersList = users.map((user) => <UserListItem
      key={user._id}
      id={user._id}
      isUser={user._id === currentUser._id}
      isSelected={selectedUser._id === user._id}
      name={user.username}
      click={selectChatUser}
    />
  );
  return (
    <div  className="user-list">
      <ul>
        {usersList}
      </ul>
    </div>
  );
}

export default UserList;
