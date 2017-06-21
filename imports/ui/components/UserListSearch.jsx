import React from 'react';
import { TextInput, IconButton } from './input';

const UserListSearch = ({ search, searchUsername }) => {
  return (
    <div>
      <TextInput
        className="search-users"
        placeholder="Search Users"
        id='searchUsername'
        handleChange={search}
        value={searchUsername}

      />
      <IconButton
        className="user-search-icon"
        iconName="fa fa-search"
      />
    </div>
  );
}

export default UserListSearch;
