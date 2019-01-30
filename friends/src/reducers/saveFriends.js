import {
    SAVING_FRIENDS,
    SAVING_FRIENDS_SUCCESSFUL,
    SAVING_FRIENDS_FAILED
} from '../actions';

const initialState = {
    friends: [],
    savingFriends: false,
    friendsSaved: false,
    error: null
}

function saveFriendsReducer(state = initialState, action) {
    switch(action.type) {
        case SAVING_FRIENDS:
            return {
            ...state,
            friends: [],
            savingFriends: true,
            friendsSaved: false,
            error: null
            }
        case SAVING_FRIENDS_SUCCESSFUL:
            return {
            ...state,
            friends: action.payload,
            savingFriends: false,
            friendsSaved: true,
            error: null
            }
        case SAVING_FRIENDS_FAILED:
            return {
            ...state,
            friends: [],
            savingFriends: false,
            savingFriends: false,
            error: action.payload
            }
        default:
            return state;
    }
}

export default saveFriendsReducer;