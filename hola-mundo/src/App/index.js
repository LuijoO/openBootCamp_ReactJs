import React from "react";
import { AppUi } from "./AppUi";

const defaultTodos = [
  { text: "cortar cebolla", completed: true},
  { text: "Tomar Curso react", completed: false},
  { text: "llorar con la llorona", completed: false},
  { text: "tomar Cebolla", completed: true},//de prueba propia.
  { text: "tomar Cenura", completed: false}, //de prueba propia.
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const  [searchValue, setSearchValue] = React.useState('');


  //definimos los todos que estan completos completedtodos esta en el componente counter como un prop
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
  // Marcar como completado

  const completeTodo = (text) => {
    const  todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];

    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

    // -------------------------------
  // Marcar para delete

  const deleteTodo = (text) => {
    const  todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }


  return (
    <AppUi
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
    
  );
}

export default App;
