import { Counter } from "./components/Counter/Counter";
import "./App.css";
import { Score } from "./components/Score/Score";

function App() {
 
  return (
    <div>
      <h1>App</h1>
      <Counter />
      <Counter />
      <Score />
    </div>
  );
}

export default App;
