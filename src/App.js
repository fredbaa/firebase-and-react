import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';

import MessageForm from './components/message-form';
import Messages from './components/messages';

class App extends Component {
  render() {
    return (
      <div>
        <MessageForm />
        <Messages />
      </div>
    );
  }
}

export default App;
