import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { CurrentUserContext, UserType } from "./contexts/CurrentUserContext";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const { user, setUser, possibleUsers } = useContext(CurrentUserContext);

  // Завдання:
  // Додати кнопку Reset User
  // Вона має видалити існуючого користувача з контексту (null)
  // Зробити через функцію ChangeUser
  // https://react.dev/learn/scaling-up-with-reducer-and-context

  const changeUser = (user: UserType) => {
    if (setUser) {
      setUser(user);
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <h2>Current user (from context)</h2>
        {user ? (
          <div>
            <h4>{user.email}</h4>
            <h4>{user.password}</h4>
          </div>
        ) : (
          <h2>No user yet</h2>
        )}

        <h2>Users</h2>
        {possibleUsers.map((user) => (
          <button key={user.email} onClick={() => changeUser(user)}>
            {user.email}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
