import React from 'react';
import UserListSearch from './UserListSearch';
import UsersList from './UsersList';

class UsersPanel extends React.Component {
  render() {
    return (
      <div className="col-4 users-panel">
        <UserListSearch />
        <UsersList />
      </div>
    );
  }
}

export default UsersPanel;
