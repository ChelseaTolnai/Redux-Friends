import { combineReducers } from 'redux';
import fetchFriendsReducer from './fetchFriends';
import saveFriendsReducer from './saveFriends';
import updateFriendReducer from './updateFriend';
import deleteFriendReducer from './deleteFriend';

export default combineReducers({
    fetchFriendsReducer,
    saveFriendsReducer,
    updateFriendReducer,
    deleteFriendReducer
});
