import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends, deleteFriend, editFriend } from '../store/actions';
import FriendsList from '../components/FriendsList';
import Error from '../components/Error';
import Loading from '../components/Loading'

class FriendsListView extends React.Component {

    componentDidMount() {
        this.props.fetchFriends();
    }

    removeFriend = (e) => {
        this.props.deleteFriend(e.target.id);
    }

    showFriend = friend => {
        this.props.editFriend(friend);
    }

    render() {
        return(
            <div>
                {this.props.fetchingFriends && <Loading />}
                <FriendsList 
                    friends={this.props.friends}
                    removeFriend={this.removeFriend}
                    showFriend={this.showFriend}
                />
                {this.props.error && <Error error={this.props.error} />}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    friends: state.friendsReducer.friends,
    fetchingFriends: state.friendsReducer.fetchingFriends,
    error: state.friendsReducer.error,
});

export default connect(
    mapStateToProps,
    { fetchFriends, deleteFriend, editFriend }
)(FriendsListView);