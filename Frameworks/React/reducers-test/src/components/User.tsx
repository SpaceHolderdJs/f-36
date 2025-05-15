import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router";

export const User = () => {
  const { data, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const onLogout = () => {
    if (dispatch) {
      dispatch({ type: "USER_LOGOUT", payload: null });
      navigate("/login");
    }
  };

  if (!data.user) return <h1>No user yet</h1>;

  return (
    <div>
      <h1>User page</h1>
      <h3>Email: {data.user?.email}</h3>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};
