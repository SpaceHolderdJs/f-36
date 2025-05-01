import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from "react-router";

export const Dashboard = () => {
  const { user, setUser } = useContext(CurrentUserContext);

 //Завдання:
//  1. Додати до Dashboard кнопку Logout 
// кнопка прибирає користувача (null) і перенаправляє на сторінку Login (useNavigate)

// 2. Стилізувати (все)

// 3. Додати до Settings логіку запису у LocalStorage параметру theme

  return (
    <div>
      <h1>Dashboard</h1>
      {user && <h2>Welcome to the dashboard! {user.email}</h2>}
      <h3>
        <Link to="/dashboard/settings">Settings</Link>
      </h3>
    </div>
  );
};
