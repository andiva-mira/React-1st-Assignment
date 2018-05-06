import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
	state = {
		users: [
			{userName: 'Ross'},
			{userName: 'Rachel'},
			{userName: 'Monica'}	
		]

	}
		
	
	nameChangeHandler = (e) => {
		this.setState({
			users: [
				{userName: e.target.value},
				{userName: 'Rachel'},
				{userName: 'Monica'}
			]
		});
	}
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My First React App</h1>
        </header>
        <main className="main">
        <div className="user-card" >
        <UserOutput username={this.state.users[0].userName} />
	    <UserInput username={this.state.users[0].userName} changed={this.nameChangeHandler} />
        </div>
        <div className="user-card">
        <UserOutput username={this.state.users[1].userName} />
        <UserInput />
        </div>
        <div className="user-card">
        <UserOutput username={this.state.users[2].userName} />
        <UserInput />
       	</div>
		</main>

      </div>
    );
  }
}

export default App;
