import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link, useNavigate } from "react-router";

export const Dashboard = () => {
  const { user, setUser } = useContext(CurrentUserContext);

  const navigate = useNavigate();

  const onLogout = () => {
    if (setUser) {
      setUser(null);
      //localStorage.removeItem("access_token");
      navigate("/login");
    }
  };

  //Завдання:

  // 3. Додати до Settings логіку запису у LocalStorage параметру theme

  return (
    <div>
      <h1>Dashboard</h1>
      {user && <h2>Welcome to the dashboard! {user.email}</h2>}
      <h3>
        <Link to="/dashboard/settings">Settings</Link>
      </h3>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};
