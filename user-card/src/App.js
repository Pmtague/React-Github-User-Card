import React from 'react';
import './App.css';
import UserCard from './components/UserCard';

class App extends React.Component {
  state = {
      userInfo: [],
      followers: []
    }

  componentDidMount() {
    console.log('CDM invoked in App');

    fetch('https://api.github.com/users/Pmtague')
      .then(res => {
        return res.json();
      })

      .then(info => this.setState({ userInfo: info}))

      .catch(err => {
        console.log('Oh no, an error!', err)
      })
    
    fetch('https://api.github.com/users/Pmtague/followers')
      .then(res => {
        return res.json();
      })

      .then(data => this.setState({ followers: data }))

      .catch(err => {
        console.log('Oopsie whoopsie!', err)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('CDU Running!');
    console.log('Prev Props!', prevProps);
    console.log('Prev State!', prevState);

    if (this.props.userID !== prevProps.userID) {
      console.log('Never will run!');
      this.fetchData(this.props.userID)
    }

    if(prevState !== this.state.userInfo) {
      console.log('Change in state!')
    }

    if (this.props.userID !== prevProps.userID) {
      console.log('Never will run!');
      this.fetchData(this.props.userID)
    }

    if(prevState !== this.state.followers) {
      console.log('Change in follower state!')
    }
  }

  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <h2>Penny's GitHub User Card</h2>
        </header>
        <UserCard 
            name={ this.state.userInfo.name }
            repos={ this.state.userInfo.public_repos }
            following={ this.state.userInfo.following }
            followers={ this.state.followers }
        />
      </div>
    );
  }
}

export default App;
