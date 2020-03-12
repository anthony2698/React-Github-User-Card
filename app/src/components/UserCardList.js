import React from 'react';

import UserCard from './UserCard'

const UserCardList = props => {
    return(
        <div>
            <img src={`${props.main.avatar_url}`}/>
            <h1>{props.main.name}</h1>
        </div>
    )
}

export default UserCardList;