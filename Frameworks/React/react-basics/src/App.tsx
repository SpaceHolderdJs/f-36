import { Counter } from "./components/Counter/Counter";
import { Score } from "./components/Score/Score";
import { User } from "./components/User/User";
import { UsersList } from "./components/UsersList/UsersList";
import { Posts } from "./components/Posts/Posts";
import { useState } from "react";

import "./App.css";

function App() {
  const [showPosts, setShowPosts] = useState<boolean>(false);

  return (
    <div>
      <h1>App</h1>
      {/* <Counter />
      <Counter />
      <Score />
      <User />
      <UsersList /> */}
      <button onClick={() => setShowPosts(!showPosts)}>Show/Hide posts</button>
      {showPosts && <Posts />}

    </div>
  );
}

export default App;
