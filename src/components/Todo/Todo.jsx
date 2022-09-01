import React from "react";

function Todo(props) {
  const { text, deleteTodo, completeTodo, isCompleted } = props;
  return (
    <div>
      <div className="border-2 p-4 flex flex-col">
        <div className="text-start">
          <p style={isCompleted ? { textDecoration: "line-through" } : {}}>
            {text}
          </p>

          <div className="flex space-x-4 justify-end">
            <button
              className="border-2 p-1 bg-green-500"
              onClick={completeTodo}
            >
              Complete
            </button>
            <button className="border-2 p-1 bg-red-800" onClick={deleteTodo}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
