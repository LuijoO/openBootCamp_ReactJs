import React  from "react";
import { TodoContext  } from "../TodoContext";
import {TodoCounter} from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList  } from "../TodoList";
import { TodoItem } from "../TodoItem";

function AppUi() {
  const { error, loading, searchedTodos, deleteTodo, completeTodo } = React.useContext(TodoContext)

  return (
    <React.Fragment>
    <TodoCounter />
    <TodoSearch />

      <TodoList>
      {error && <p>desesperate</p>}
      {loading && <p>estamos cargando no desesperes</p>}
      {(!loading && !searchedTodos.length) && <p>Crea tu primer todo!!</p>}
      {searchedTodos.map(todo => (
      <TodoItem 
      key={todo.text} 
      text={todo.text}   
      completed={todo.completed}
      onComplete={() => completeTodo(todo.text)}
      onDelete={() => deleteTodo(todo.text)}
      />
      ))}
      </TodoList>


    <CreateTodoButton />
</React.Fragment>
  );
}

export { AppUi }