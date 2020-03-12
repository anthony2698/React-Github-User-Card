import React from 'react';

import UserCard from './UserCard'

const UserCardList = props => {
    return(
        <div>
            <UserCard main={props.main}/>
            {props.followers.map(follower => {
                return <UserCard main={follower}/>
            })}
        </div>
    )
}

export default UserCardList;