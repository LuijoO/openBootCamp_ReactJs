import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton (props) {
  const onClickButton = (msg) => {
    alert(msg);
  }

  return(
    <button 
      className="CreateTodoButton"
      onClick={() => onClickButton('Aca se escribe el mensaje del alert')}  
    >
    +
    </button>
  );
}

export { CreateTodoButton };