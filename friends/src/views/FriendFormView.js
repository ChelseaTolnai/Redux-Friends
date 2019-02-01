import React from 'react';
import { connect } from 'react-redux';
import { addFriend, updateFriend } from '../store/actions'
import FriendForm from '../components/FriendForm'
import Error from '../components/Error'

class FriendFormView extends React.Component {
    state= {
        friend: {}
    }

    handleInput = e => {
        this.setState({
            friend: {
            ...this.state.friend,
            [e.target.name]: e.target.value
            }
        });
    };

    saveFriend = (e) => {
        e.preventDefault();
        if (this.props.editingFriendg) {
            this.props.updateFriend(this.state.friend.id, this.state.friend);
            this.setState({friend: {}});
            document.getElementById("friendForm").reset();
        } else {
            this.props.addFriend(this.state.friend);
            this.setState({friend: {}});
            document.getElementById("friendForm").reset();
        }
    }

    render() {
        return(
            <div>
                {this.props.editingFriend
                ?   <FriendForm 
                    friend={this.props.selectedFriend} 
                    handleInput={this.handleInput} 
                    saveFriend={this.saveFriend}
                    editingFriend={this.props.editingFriend}
                    />
                :   <FriendForm 
                    friend={this.state.friend} 
                    handleInput={this.handleInput} 
                    saveFriend={this.saveFriend}
                    />
                }
                {this.props.error && <Error error={this.props.error} />}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    error: state.friendsReducer.error,
    selectedFriend: state.friendsReducer.selectedFriend,
    editingFriend: state.friendsReducer.editingFriend,
});

export default connect(
    mapStateToProps,
    { addFriend, updateFriend }
)(FriendFormView);