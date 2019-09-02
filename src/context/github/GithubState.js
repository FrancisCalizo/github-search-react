import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  INITIAL_LOAD
} from '../types';

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  // Get an action, and dispatch a type back to the reducer
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Initial Page Load Users
  useEffect(() => {
    // Immediately Invoked Function
    // eslint-disable-next-line no-unused-vars
    const fetchData = (async () => {
      setLoading();

      const res = await axios.get(
        `https://api.github.com/users?client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      dispatch({
        type: INITIAL_LOAD,
        payload: res.data
      });
    })();
  }, []);

  // Search GitHub Users
  const searchUsers = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  // Get User

  // Get Repos

  // Clear Users
  const clearUsers = () => {
    setLoading();

    dispatch({
      type: CLEAR_USERS
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers: searchUsers,
        clearUsers: clearUsers
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
