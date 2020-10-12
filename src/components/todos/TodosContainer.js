import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'

class TodosContainer extends Component {

  renderToDos = () => this.props.todos.map((todo, idx) => <Todo key={idx} text={todo} />)

  render() {
    return(
      <div>
        {this.renderToDos()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  // I'm saying THIS is the dang state now, ya'll
  return { todos: state.todos }
}

export default connect(mapStateToProps)(TodosContainer);
// connected mapStateToProps in here will pass the state
// from manageTodo and instantiate the state of TodosContainer
// with the return value of mapStateToProps