import React from 'react';
import { TextInput, IconButton } from './input';

const UserListSearch = () => {
  return (
    <div>
      <TextInput
        className="search-users"
        placeholder="Search Users"
      />
      <IconButton
        className="user-search-icon"
        iconName="fa fa-search"
      />
    </div>
  );
}

export default UserListSearch;
