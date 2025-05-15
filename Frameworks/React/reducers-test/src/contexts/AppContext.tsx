import {
  createContext,
  useReducer,
  type ActionDispatch,
  type FC,
  type PropsWithChildren,
} from "react";
import type { UsersItemType } from "../types/users.types";
import type { TodosItemType } from "../types/todos.types";

export type UserType = {
  email: string;
  password: string;
};

export type DataType = {
  user: UserType | null;
  users: UsersItemType[];
  todos: TodosItemType[];
};

type AppContextType = {
  data: DataType;
  dispatch?: ActionDispatch<[ActionType]>;
};

type ActionType<T = unknown> = {
  type: string;
  payload: T;
};

// @ts-expect-error Dev-only impact
export const enum ActionTypes {
  userLogin = "USER_LOGIN",
  userLogout = "USER_LOGOUT",
  setUsers = "SET_USERS",
  setTodos = "SET_TODOS",
}

export const AppContext = createContext<AppContextType>({
  data: { user: null, users: [], todos: [] },
});

const reducer = (data: DataType, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.userLogin: {
      const typedAction = action as ActionType<UserType>;

      return { ...data, user: typedAction.payload };
    }

    case ActionTypes.userLogout: {
      const typedAction = action as ActionType<null>;

      return { ...data, user: typedAction.payload };
    }

    case ActionTypes.setUsers: {
      const typedAction = action as ActionType<UsersItemType[]>;

      return { ...data, users: typedAction.payload };
    }

    case ActionTypes.setTodos: {
      const typedAction = action as ActionType<TodosItemType[]>;

      return { ...data, todos: typedAction.payload };
    }

    // Завдання:
    // 1. Реалізувати сторінку Posts (окремий файл у /components)
    // 2. Вивести інформацію про пости (верстка)
    // 3. Додати у api.ts файл метод getPosts https://jsonplaceholder.typicode.com/posts
    // 4. Додати файл posts.types.ts у папку types
    // 5. Додати у reducer (сюди) логіку під SET_POSTS
    // 6. Підключити сторінку Posts до роутера (routes.tsx)

    default: {
      return data;
    }
  }
};

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [data, dispatch] = useReducer<DataType, [ActionType]>(reducer, {
    user: null,
    users: [],
    todos: [],
  });

  return (
    <AppContext.Provider value={{ data, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
