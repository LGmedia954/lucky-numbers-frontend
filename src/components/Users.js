import React from 'react';

const Users = props => {

  const users = props.users.users.map((user, id) => {
    return <li key={id}>{user.username}</li>;
  });
  
  return (
    <div className="viewable">
      <h3 id="userList">{users}</h3>
    </div>
  );
};

export default Users;

