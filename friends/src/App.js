import React, { Component } from 'react';
import FriendListView from './views/FriendsListView'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Friends App</h1>
        <FriendListView />
      </div>
    );
  }
}

export default App;
