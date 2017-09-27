import React, { Component } from 'react';
import './App.css';
import TodoForm from './Components/Todos/TodoForm';
import TodoList from './Components/Todos/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
         todos: ['clean whiteboard', 'drink water', 'sleep']
    }
 }
  render() {
    return (
      <div>
      <h1>My Todos</h1>
      <TodoForm />
      <TodoList todo_data={this.state.todos} />
      </div>
    );
  }
}

export default App;
