import { useContext, useEffect } from "react";
import { API } from "../api";
import { AppContext, ActionTypes } from "../contexts/AppContext";

export const Todos = () => {
  const { data, dispatch } = useContext(AppContext);

  useEffect(() => {
    if (!data.todos.length) {
      API.getTodos().then((todos) =>
        dispatch?.({ type: ActionTypes.setTodos, payload: todos })
      );
    }
  }, [data.todos, dispatch]);

  if (!data.todos.length) return <h1>No todos (loading...)</h1>;

  return (
    <>
      <h1>Todos</h1>
      <div className="card-wrapper">
        {data.todos.length &&
          data.todos.map(({ title, completed }) => (
            <div key={title} className="card">
              <input type="checkbox" checked={completed} /> <h3>{title}</h3>
            </div>
          ))}
      </div>
    </>
  );
};
