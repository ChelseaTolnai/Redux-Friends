import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions'

class Friends extends React.Component {

    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        return(
            <ul>
                {this.props.friends.map(friend => 
                    <li key={friend.id}>{friend.name}</li>
                )}
            </ul>
        )
    }
};

const mapStateToProps = state => ({
    friends: state.fetchFriendsReducer.friends,
    fetchingFriends: state.fetchFriendsReducer.fetchingFriends,
    friendsFetched: state.fetchFriendsReducer.friendsFetched,
    error: state.fetchFriendsReducer.error,
});

export default connect(
    mapStateToProps,
    { fetchFriends }
)(Friends);