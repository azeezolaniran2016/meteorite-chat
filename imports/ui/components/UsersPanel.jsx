import React from 'react';
import UserListSearch from './UserListSearch';
import UsersList from './UsersList';

const UsersPanel = () => {
  return (
    <div className="col-3 users-panel">
      <UserListSearch />
      <UsersList />
    </div>
  );
}

export default UsersPanel;
