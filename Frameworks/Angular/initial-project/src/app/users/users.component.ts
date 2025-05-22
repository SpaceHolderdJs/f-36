import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

type UserType = {
  name: string;
  email: string;
};

@Component({
  selector: 'app-users',
  imports: [HttpClientModule],
  providers: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  constructor(private http: HttpClient) {
    this.getUsers();
  }

  // Завдання:
  // 1. Додати ТИП (UserType) для даних користувача за запитом https://jsonplaceholder.typicode.com/users
  // 2. Типізувати response користувачів (:29)
  // 3. Вивести у html користувачів з серверу
  // 4. Стилі *

  getUsers() {
    this.http
      .get<UserType[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((response) => {
        console.log('users', response);
        
        this.users = response;
      });
  }

  users: Array<UserType> = [];
}
