import {
    DELETING_FRIEND,
    DELETING_FRIEND_SUCCESSFUL,
    DELETING_FRIEND_FAILED
} from '../actions';

const initialState = {
    friends: [],
    deletingFriend: false,
    friendDeleted: false,
    error: null
}

function deleteFriendReducer(state = initialState, action) {
    switch(action.type) {
        case DELETING_FRIEND:
            return {
            ...state,
            friends: [],
            deletingFriend: true,
            friendDeleted: false,
            error: null
            }
        case DELETING_FRIEND_SUCCESSFUL:
            return {
            ...state,
            friends: action.payload,
            deletingFriend: false,
            friendDeleted: true,
            error: null
            }
        case DELETING_FRIEND_FAILED:
            return {
            ...state,
            friends: [],
            deletingFriend: false,
            friendDeleted: false,
            error: action.payload
            }
        default:
            return state;
    }
}

export default deleteFriendReducer;