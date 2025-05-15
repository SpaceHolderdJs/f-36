import axios from "axios";
import type { UsersItemType } from "./types/users.types";
import type { TodosItemType } from "./types/todos.types";

export class API {
  static getUsers = async () => {
    const { data } = await axios.get<UsersItemType[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
  };

  static getTodos = async () => {
    const { data } = await axios.get<TodosItemType[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return data;
  };
}
