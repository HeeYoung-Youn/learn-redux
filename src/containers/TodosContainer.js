import React, { useCallback } from "react";
import { connect } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo } from "../modules/totos";

const TodosContainer = ({ todos, addTodo, toggleTodo }) => {
  const onCreate = useCallback((text) => addTodo(text), [addTodo]);
  const onToggle = useCallback((id) => toggleTodo(id), [toggleTodo]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};

export default connect((state) => ({ todos: state.todos }), {
  addTodo,
  toggleTodo,
})(TodosContainer);
