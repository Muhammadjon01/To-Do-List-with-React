import React, { useState } from "react";
import Todo from "../../components/Todo/Todo";

function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const addTodo = () => {
    let newTodos = [
      ...todos,
      { id: new Date().getTime(), text: text, isCompleted: false },
    ];
    setTodos(newTodos);
    setText("");
  };

  const deleteTodo = (id) => {
    let filterTodos = todos.filter((elem) => elem.id !== id);
    setTodos(filterTodos)
  };
  return (
    <div className="w-full h-screen bg-blue-600">
      <div className="w-[50%] mx-auto">
        <h1 className="text-4xl font-bold py-10 text-white">To Do List</h1>
        <div className="flex justify-between">
          <input
            className="w-[400px]"
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Add Your Task!"
            name=""
            id=""
          />
          <button
            className="text-white border px-4 py-2 bg-violet-500 hover:bg-violet-600"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
      </div>

      <div className="w-[50%] mx-auto my-10">
        {todos.length > 0 &&
          todos.map((elem) => {
            return (
              <Todo
                key={elem.id}
                text={elem.text}
                isCompleted={elem.isCompleted}
                deleteTodo={()=> deleteTodo(elem.id)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Todos;
