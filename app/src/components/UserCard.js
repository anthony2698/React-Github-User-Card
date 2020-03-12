import React from 'react';

const UserCard = props => {
    return(
        <div class="card">
            <img src={`${props.main.avatar_url}`}/>
            <div class="card-info">
                <h3 class="name">{props.main.name}</h3>
                    <p class="username">{props.main.login}</p>
                    <p>Location: {props.main.location}</p>
                    <p>Profile:  
                        <a href={`${props.main.url}`}> {props.main.login}</a>
                    </p>
                    <p>Followers: {props.main.followers}</p>
                    <p>Following: {props.main.following}</p>
                    <p>Bio:  {props.main.bio}</p>
            </div>
        </div>
    )
}

export default UserCard;