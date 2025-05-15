import { Link } from "react-router";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/login">Login page</Link>
    </div>
  );
}

export default App;
