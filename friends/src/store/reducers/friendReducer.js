import {
    FETCHING_FRIENDS,
    FETCHING_FRIENDS_SUCCESSFUL,
    FETCHING_FRIENDS_FAILED,

    SAVING_FRIENDS,
    SAVING_FRIENDS_SUCCESSFUL,
    SAVING_FRIENDS_FAILED,

    UPDATING_FRIEND,
    UPDATING_FRIEND_SUCCESSFUL,
    UPDATING_FRIEND_FAILED,

    DELETING_FRIEND,
    DELETING_FRIEND_SUCCESSFUL,
    DELETING_FRIEND_FAILED,
} from '../actions';

const initialState = {
    friends: [],

    fetchingFriends: false,
    friendsFetched: false,

    savingFriends: false,
    friendsSaved: false,

    updatingFriend: false,
    friendUpdated: false,

    deletingFriend: false,
    friendDeleted: false,
    
    error: null
}

function friendsReducer(state = initialState, action) {
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
            friends: action.payload,
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

        case SAVING_FRIENDS:
            return {
            ...state,
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
            savingFriends: false,
            friendsSaved: false,
            error: action.payload
            }

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

        case DELETING_FRIEND:
            return {
            ...state,
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
            deletingFriend: false,
            friendDeleted: false,
            error: action.payload
            }

        default:
            return state;
    }
}

export default friendsReducer;