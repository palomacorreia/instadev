import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  // setting states 
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  
  // set loading to false if all the api calls have already returned  
  const updateLoading = () => {
    if(users.length > 0 && posts.length > 0 && stories.length > 0){
      setIsLoading(false);
    }
  }

  // api call to get users
  useEffect(() => {
    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/users")
    .then(res => res.json())
    .then(response => {
      setUsers(response);
      updateLoading(); 
    });
  });

  // api call to get posts
  useEffect(() => {
    fetch("	https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/1/posts")
    .then(res => res.json())
    .then(response => {
      setPosts(response);
      updateLoading();
    })
  });

  // api call to get stories
  useEffect(() => {
    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories")
    .then(res => res.json())
    .then(response => {
      setStories(response);
      updateLoading();
    })
  });

  // returns an user object and if it's not found, returns a default object
  const getUserHandler = (userId) => {
    const result = users.filter((user) => user.id === userId);
    return result.length > 0 ? result[0] : {
      id:userId, 
      name: `USER NOT FOUND (userId = ${userId})`,
      avatar: "",
      username: "",
      email: ""
    };
  } 
  
  return (
    <div data-testid="feed-route">
      {isLoading && <Loading />}
      {!isLoading && (
        <React.Fragment>
          <Stories stories={stories} getUserHandler={getUserHandler} />
          <Posts posts={posts} getUserHandler={getUserHandler} />
        </React.Fragment>
      )}
    </div>
  );
};

export default FeedRoute;
