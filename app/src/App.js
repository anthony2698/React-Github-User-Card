import React from 'react';
import './App.css';
import axios from 'axios';

import UserCard from './components/UserCard';
import UserCardList from './components/UserCardList';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      mainUser: [],
      userFollowers: []
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/anthony2698')
      .then(res => {
        console.log(res);
        this.setState({
          mainUser: res.data
        });
      })
      .catch(err => {
        console.log(err)
      });
  }

  render() {
    return(
      <div>
        <h1>Github Usercards in React!</h1>
        <UserCardList main={this.state.mainUser}/>
      </div>
    )
  }
}

export default App;
