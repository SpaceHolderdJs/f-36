import { useContext, useState } from "react";
import { ActionTypes, AppContext, type UserType } from "../contexts/AppContext";
import { useNavigate } from "react-router";

export const Login = () => {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<UserType>({
    email: "",
    password: "",
  });

  const onLogin = () => {
    if (dispatch) {
      dispatch({ type: ActionTypes.userLogin, payload: formData });
      navigate("/info");
    }
  };

  return (
    <div>
      <input
        placeholder="Email"
        type="text"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={onLogin}>Login</button>
    </div>
  );
};
