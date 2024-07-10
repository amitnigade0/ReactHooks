import React, { useReducer } from "react";

function UseReducerExampleTodos(props) {
  const initialTodos = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
    },
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case "complete":
        
        return state.map(todo => {
            if (todo.id === action.todo.id) {
                return { ...todo, complete: !action.todo.complete }
            } else {
                return todo;
            }
        })
      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleChange = (todo) => {
    dispatch({ type: "complete", todo: todo });
  };

  console.log(todos)

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => {
                handleChange(todo);
              }}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </div>
  );
}

export default UseReducerExampleTodos;
