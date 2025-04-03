import { Counter } from "./components/Counter/Counter";
import { Score } from "./components/Score/Score";
import { User } from "./components/User/User";
import { UsersList } from "./components/UsersList/UsersList";

import "./App.css";

function App() {
 
  return (
    <div>
      <h1>App</h1>
      <Counter />
      <Counter />
      <Score />
      <User />
      <UsersList />
    </div>
  );
}

export default App;
