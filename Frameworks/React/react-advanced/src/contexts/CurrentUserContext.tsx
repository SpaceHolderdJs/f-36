import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

export type UserType = {
  email: string;
  password: string;
};

type CurrentUserContextType = {
  user: UserType | null;
  setUser?: Dispatch<SetStateAction<UserType | null>>;
  possibleUsers: UserType[],
};

export const CurrentUserContext = createContext<CurrentUserContextType>({
  user: null,
  possibleUsers: []
});

export const CurrentUserContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | null>(null);

  const possibleUsers: UserType[] = [
    { email: "email1@gmail.com", password: "password1" },
    { email: "email2@gmail.com", password: "password2" },
    { email: "email@gmail.com", password: "password3" },
  ];

  return (
    <CurrentUserContext.Provider value={{ user, setUser, possibleUsers }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
