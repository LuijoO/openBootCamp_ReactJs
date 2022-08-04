import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext() 

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const  [searchValue, setSearchValue] = React.useState('');
  //definimos los todos que estan completos completedtodos esta en el componente counter como un prop
  const [openModal, setOpenModal] = React.useState(true);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  //aca tambien le pasamos la cantidad de tdoos que existen, completos y cuales no.
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

    // -------------------------------
  // Add todo

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text
    });
    saveTodos(newTodos);
  }

  // -------------------------------
  // Marcar como completado

  const completeTodo = (text) => {
    const  todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];

    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);

  }

    // -------------------------------
  // Marcar para delete

  const deleteTodo = (text) => {
    const  todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <TodoContext.Provider value={{
          error,
          loading,
          totalTodos,
          completedTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal,
          addTodo,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}


export {TodoContext, TodoProvider};