// HOC

import { FC, PropsWithChildren, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useNavigate } from "react-router";

type PropsType = PropsWithChildren & {
  fallback?: string;
};

export const PrivateRoute: FC<PropsType> = ({
  children,
  fallback = "/login",
}) => {
  const { user } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.email || !user.password) {
      navigate(fallback);
    }
  }, [fallback, navigate, user]);

  return children;
};
