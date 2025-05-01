import { Link } from "react-router";
import "./App.css";

function App() {
 
  return (
    <div>
      <h1>Welcome to the APP!</h1>

      <h2>Go to <Link to="/login">Login page</Link></h2>
    </div>
  );
}

export default App;
