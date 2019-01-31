import React, { Component } from 'react';
import FriendListView from './views/FriendsListView'
import FriendFormView from './views/FriendFormView'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Friends App</h1>
        <FriendListView />
        <FriendFormView />
      </div>
    );
  }
}

export default App;
