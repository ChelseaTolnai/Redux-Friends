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
    friends: state.friendsReducer.friends,
    fetchingFriends: state.friendsReducer.fetchingFriends,
    friendsFetched: state.friendsReducer.friendsFetched,
    error: state.friendsReducer.error,
});

export default connect(
    mapStateToProps,
    { fetchFriends }
)(Friends);