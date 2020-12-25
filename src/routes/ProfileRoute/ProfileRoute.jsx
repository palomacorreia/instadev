import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const ProfileRoute = () => {
  const [isLoading, setisLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([]);


  // api call to get posts
  useEffect(() => {
    fetch("	https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/1/posts")
    .then(res => res.json())
    .then(response => {
      setPosts(response);
      setisLoading(false);
    })
  });

  // api call to get users
  useEffect(() => {
    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/user/1")
    .then(res => res.json())
    .then(response => {
      setUser(response);
      setisLoading(false); 
    });
  });

  return (
    <div data-testid="profile-route">
      {isLoading && <Loading />}
      {!isLoading && (
        <React.Fragment>
          <UserProfile {...user} />
          <UserPosts posts={posts} />
        </React.Fragment>
      )}
    </div>
  );
};

export default ProfileRoute;
