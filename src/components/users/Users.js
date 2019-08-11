import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => {
          return (
            <div key={user.id}>
              <UserItem user={user} />
            </div>
          );
        })}
      </div>
    );
  }
};

// Define Grid Layout via Inline Styles
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridColumnGap: '1rem'
};

export default Users;
