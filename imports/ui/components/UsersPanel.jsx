import React from 'react';
import UserListSearch from './UserListSearch';
import UsersList from './UsersList';

const UsersPanel = ({
  users, selectedUser, currentUser,
  selectChatUser, searchUsername, filterUsers
}) => {
  return (
    <div className="col-4 users-panel">
      <UserListSearch
        search={filterUsers}
        searchUsername={searchUsername}
      />
      <UsersList
        users={users}
        currentUser={currentUser}
        selectedUser={selectedUser}
        selectChatUser={selectChatUser}
      />
    </div>
  );
}

export default UsersPanel;
