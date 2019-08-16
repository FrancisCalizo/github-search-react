import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading, getUser }) => {
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

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

// Define Grid Layout via Inline Styles
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridColumnGap: '1rem'
};

export default Users;
