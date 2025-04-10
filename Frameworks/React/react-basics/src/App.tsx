// import { Counter } from "./components/Counter/Counter";
// import { Score } from "./components/Score/Score";
// import { User } from "./components/User/User";
// import { UsersList } from "./components/UsersList/UsersList";
// import { Posts } from "./components/Posts/Posts";
// import { useState } from "react";

import { Landing } from "./components/Landing/Landing";

import "./App.css";

function App() {
  // const [showPosts, setShowPosts] = useState<boolean>(false);

  return (
    <div>
      {/* <h1>App</h1> */}
      {/* <Counter />
      <Counter />
      <Score />
      <User />
      <UsersList /> */}
      {/* <button
        className={`indicate_button ${showPosts ? "active" : ""}`}
        onClick={() => setShowPosts(!showPosts)}
      >
        {showPosts ? "Hide posts" : "Show posts"}
      </button>
  
      {showPosts && <Posts />} */}
      <Landing />
    </div>
  );
}

export default App;
