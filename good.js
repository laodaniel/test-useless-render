import React from 'react';
import { render } from 'react-dom';
import User from './User';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'Cory' }, 
        { id: 2, name: 'Meg' }, 
        { id: 3, name: 'Bob'}
      ],
    };
    this.deleteUserHandler = this.deleteUser.bind(this);
  }

  deleteUser(event) {
    const id = Number(event.target.value);
    this.setState(prevState => {
      return {
        users: prevState.users.filter(user => user.id !== id)
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.state.users.map(user => {
            return (
              <User
                key={user.id}
                name={user.name}
                id={user.id}
                onDeleteClick={this.deleteUserHandler}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
