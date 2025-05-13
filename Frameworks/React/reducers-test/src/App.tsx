import { Login } from "./components/Login";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import "./App.css";

function App() {
  const { data } = useContext(AppContext);
  
  return (
    <div>
      {data.user && <h1>Hello, {data.user.email}</h1>}
      <Login />
    </div>
  );
}

export default App;
