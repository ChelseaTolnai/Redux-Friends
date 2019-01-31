import React from 'react';
import { connect } from 'react-redux';
import { saveFriend } from '../store/actions'
import FriendForm from '../components/FriendForm'
import Error from '../components/Error'

class FriendFormView extends React.Component {
    state= {
        newFriend: {}
    }

    handleInput = e => {
        this.setState({
            newFriend: {
            ...this.state.newFriend,
            [e.target.name]: e.target.value
            }
        });
    };

    addFriend = (e) => {
        e.preventDefault();
        this.props.saveFriend(this.state.newFriend);
        this.setState({newFriend: {}});
        document.getElementById("friendForm").reset();
    };

    render() {
        return(
            <div>
                <FriendForm 
                    friend={this.state.newFriend} 
                    handleInput={this.handleInput} 
                    addFriend={this.addFriend}
                />
                {this.props.error && <Error error={this.props.error} />}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    error: state.friendsReducer.error,
});

export default connect(
    mapStateToProps,
    { saveFriend }
)(FriendFormView);