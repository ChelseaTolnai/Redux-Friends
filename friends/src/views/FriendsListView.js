import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions'
import FriendsList from '../components/FriendsList';

class FriendsListView extends React.Component {

    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        return(
            <div>
                {this.props.fetchingFriends && <h2>Loading...</h2>}
                <FriendsList friends={this.props.friends}/>
                {this.props.error && <h2>{`${this.props.error}`}</h2>}
            </div>
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
)(FriendsListView);