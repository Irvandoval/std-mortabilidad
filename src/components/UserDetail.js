import React, { PropTypes } from 'react';
import { Thumbnail } from 'react-bootstrap';

const UserDetail = ({ user }) => {
  if (!user) return <h2>Search a user</h2>;
  return (<Thumbnail src={user.avatar_url} alt="242x200" className="text-center">
    <h3>{user.name}</h3>
    <p>{user.login}</p>
    <h4>{user.bio}</h4>
    <h5>{user.email}</h5>
    <a className="btn btn-primary" href={user.html_url}>
    Go to Github profile</a>
  </Thumbnail>);
};

UserDetail.propTypes = {
  user: PropTypes.shape({name: PropTypes.string, bio: PropTypes.string, email: PropTypes.string})
};

export default UserDetail;
