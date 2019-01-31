import axios from 'axios';

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCHING_FRIENDS_SUCCESSFUL = "FETCHING_FRIENDS_SUCCESSFUL";
export const FETCHING_FRIENDS_FAILED = "FETCHING_FRIENDS_FAILED";

export const SAVING_FRIENDS = "SAVING_FRIENDS";
export const SAVING_FRIENDS_SUCCESSFUL = "SAVING_FRIENDS_SUCCESSFUL";
export const SAVING_FRIENDS_FAILED = "SAVING_FRIENDS_FAILED";

export const UPDATING_FRIEND = "UPDATING_FRIEND";
export const UPDATING_FRIEND_SUCCESSFUL = "UPDATING_FRIEND_SUCCESSFUL";
export const UPDATING_FRIEND_FAILED = "UPDATING_FRIENDS_FAILED";

export const DELETING_FRIEND = "DELETING_FRIEND";
export const DELETING_FRIEND_SUCCESSFUL = "DELETING_FRIEND_SUCCESSFUL";
export const DELETING_FRIEND_FAILED = "DELETING_FRIEND_FAILED";

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    axios
      .get("http://localhost:5000/api/friends")
      .then(res => dispatch({ type: FETCHING_FRIENDS_SUCCESSFUL, payload: res.data }))
      .catch(err => dispatch({ type: FETCHING_FRIENDS_FAILED, payload: err }));
};

export const saveFriend = friend => dispatch => {
  dispatch({ type: SAVING_FRIENDS });
  axios
    .post("http://localhost:5000/api/friends", friend)
    .then(res => dispatch({ type: SAVING_FRIENDS_SUCCESSFUL, payload: res.data }))
    .catch(err => dispatch({ type: SAVING_FRIENDS_FAILED, payload: err }));
};