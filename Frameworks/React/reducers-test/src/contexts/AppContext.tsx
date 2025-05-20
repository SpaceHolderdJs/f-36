import {
  createContext,
  useReducer,
  type ActionDispatch,
  type FC,
  type PropsWithChildren,
} from "react";
import type { UsersItemType } from "../types/users.types";
import type { TodosItemType } from "../types/todos.types";
import type { PostsItemType } from "../types/posts.types";

export type UserType = {
  email: string;
  password: string;
};

export type DataType = {
  user: UserType | null;
  users: UsersItemType[];
  todos: TodosItemType[];
  posts: PostsItemType[];
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
  setPosts = "SET_POSTS",
}

export const AppContext = createContext<AppContextType>({
  data: { user: null, users: [], todos: [], posts: [] },
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

    case ActionTypes.setPosts: {
      const typedAction = action as ActionType<PostsItemType[]>;

      return { ...data, posts: typedAction.payload };
    }

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
    posts: []
  });

  return (
    <AppContext.Provider value={{ data, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
