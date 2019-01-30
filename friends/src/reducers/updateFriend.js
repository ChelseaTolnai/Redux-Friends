import {
    UPDATING_FRIEND,
    UPDATING_FRIEND_SUCCESSFUL,
    UPDATING_FRIEND_FAILED
} from '../actions';

const initialState = {
    friends: [],
    updatingFriend: false,
    friendUpdated: false,
    error: null
}

function updateFriendReducer(state = initialState, action) {
    switch(action.type) {
        case UPDATING_FRIEND:
            return {
            ...state,
            friends: [],
            updatingFriend: true,
            friendUpdated: false,
            error: null
            }
        case UPDATING_FRIEND_SUCCESSFUL:
            return {
            ...state,
            friends: action.payload,
            updatingFriend: false,
            friendUpdated: true,
            error: null
            }
        case UPDATING_FRIEND_FAILED:
            return {
            ...state,
            friends: [],
            updatingFriend: false,
            friendUpdated: false,
            error: action.payload
            }
        default:
            return state;
    }
}

export default updateFriendReducer;