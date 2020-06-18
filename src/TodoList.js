import React, { Fragment } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import * as TodoActions from "./store/actions/todos";
import { bindActionCreators } from "redux";

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <Fragment>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Remover</button>
        </li>
      ))}
      <button onClick={() => addTodo("Novo todo")}>Adicionar</button>
    </ul>
  </Fragment>
);

TodoList.propTypes = {
  addTodo: propTypes.func.isRequired,
  removeTodo: propTypes.func.isRequired,
  todos: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      text: propTypes.string,
    }).isRequired
  ),
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
