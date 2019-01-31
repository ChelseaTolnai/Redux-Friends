import React from 'react';

const FriendsList = props => {
    return(
        <ul>
            {props.friends.map(friend => 
                <li key={friend.id}>{friend.name}</li>
            )}
        </ul>
    )
};

export default FriendsList;