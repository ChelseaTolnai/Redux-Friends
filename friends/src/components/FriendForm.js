import React from 'react';

const FriendForm = props => {
    return(
        <form onSubmit={props.addFriend} id="friendForm">
            <input
                type="text"
                name="name"
                onChange={props.handleInput}
                placeholder="name"
                value={props.friend.name}
            />
            <input
                type="number"
                name="age"
                onChange={props.handleInput}
                placeholder="age"
                value={props.friend.age}
            />
            <input
                type="email"
                name="email"
                onChange={props.handleInput}
                placeholder="email"
                value={props.friend.email}
            />
            <button>
                Add Friend
            </button>
        </form>
    )
};

export default FriendForm;