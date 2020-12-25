import React from 'react';

import Post from '../../components/Post';

import './UserPosts.scss';

const UserPosts = ({ posts }) => (
  <div className="container">
    <section className="user-posts" data-testid="user-posts">
      {posts.map((post) => <Post postInfo={post} teaser={true} />)}
    </section>

  </div>
);

export default UserPosts;
