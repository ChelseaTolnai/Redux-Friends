import React from 'react';

const FriendsList = props => {
    return(
        <ul>
            {props.friends.map(friend => 
                <li key={friend.id}>
                    <span>{friend.name}</span>
                    <span onClick={props.removeFriend} id={friend.id}>X</span>
                </li>
            )}
        </ul>
    )
};

export default FriendsList;