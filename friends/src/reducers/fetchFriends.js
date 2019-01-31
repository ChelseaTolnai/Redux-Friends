import {
    FETCHING_FRIENDS,
    FETCHING_FRIENDS_SUCCESSFUL,
    FETCHING_FRIENDS_FAILED
} from '../actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    error: null
}

function fetchFriendsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING_FRIENDS:
            return {
            ...state,
            friends: [],
            fetchingFriends: true,
            friendsFetched: false,
            error: null
            }
        case FETCHING_FRIENDS_SUCCESSFUL:
            return {
            ...state,
            friends: action.payload.data,
            fetchingFriends: false,
            friendsFetched: true,
            error: null
            }
        case FETCHING_FRIENDS_FAILED:
            return {
            ...state,
            friends: [],
            fetchingFriends: false,
            friendsFetched: false,
            error: action.payload
            }
        default:
            return state;
    }
}

export default fetchFriendsReducer;