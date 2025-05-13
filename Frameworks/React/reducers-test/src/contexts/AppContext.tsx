import {
  createContext,
  useReducer,
  type ActionDispatch,
  type FC,
  type PropsWithChildren,
} from "react";

export type UserType = {
  email: string;
  password: string;
};

export type DataType = {
  user: UserType | null;
};

type AppContextType = {
  data: DataType;
  dispatch?: ActionDispatch<[ActionType]>;
};

type ActionType<T = unknown> = {
  type: string;
  payload: T;
};

export const AppContext = createContext<AppContextType>({
  data: { user: null },
});

const reducer = (data: DataType, action: ActionType) => {
  switch (action.type) {
    case "USER_LOGIN": {
      const typedAction = action as ActionType<UserType>;

      return { ...data, user: typedAction.payload };
    }

    case "USER_LOGOUT": {
      // Створити кнопку "LogOut" для виходу з застосунку
      // Додати USER_LOGOUT case, що змінить користувача на null
      // Для зміни користувача використовувати dispatch() з reducer
      // Додати в App напис "User is not logged in" якщо користувач відсутній
      // Кнопка Logout має бути візуально доступною, тільки якщо користувач увійшов! (App.tsx)
      
      // Прочитати https://react.dev/reference/react/useReducer 
      // Змінити під вимогу завдання   
      return data;
    }

    default: {
      return data;
    }
  }
};

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [data, dispatch] = useReducer<DataType, [ActionType]>(reducer, {
    user: null,
  });

  return (
    <AppContext.Provider value={{ data, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
