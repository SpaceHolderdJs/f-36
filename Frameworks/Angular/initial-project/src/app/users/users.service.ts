import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserType } from './users.types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  API_URL: string = 'https://jsonplaceholder.typicode.com/users';

  users: Array<UserType> = [];

  constructor(private http: HttpClient) {}

  getUsers() {
    this.http.get<UserType[]>(this.API_URL).subscribe((response) => {
      this.users = response;
    });
  }

  getUserById(id: string) {
    return this.http.get<UserType>(`${this.API_URL}/${id}`);
  }


  // Завдання:
  // 1. Додати метод deleteUserById до UsersService
  // ${this.API_URL}/${id} (delete) (запит на сервер)

  // 2. Додати у картці користувача кнопку "Delete"
  // 3. Підключити до кнопки запит з сервісу (див пункт 1)

  // 4. На видалення користувача використати alert для повідомлення
  // 5. Стилізувати сторінку користувача (user-details.css/html)

  // 6. https://angular.dev/guide/routing/router-tutorial - почитати 
}
