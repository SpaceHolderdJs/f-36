import { useContext, useState } from "react";
import {
  CurrentUserContext,
  UserType,
} from "../../contexts/CurrentUserContext";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const { setUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<UserType>({
    email: "",
    password: "",
  });

  const updateFormData = (key: keyof UserType, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const onSubmit = () => {
    if (setUser) {
      setUser(formData);
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) => updateFormData("email", e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={(e) => updateFormData("password", e.target.value)}
      />
      <button
        disabled={!formData.email || !formData.password}
        onClick={onSubmit}
      >
        Login
      </button>
    </div>
  );
};
