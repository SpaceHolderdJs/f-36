import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  imports: [],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css',
})
export class UserDashboardComponent {}

// Завдання:
// 1. Додати до authService authUserData параметр
// 2. Типізувати його за допомогою:
// {
//   accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NDg5NzY5NzksImV4cCI6MTc0ODk4MDU3OX0.DaORYEIP6Dydd5Zdgocm5vu-9ZJPW1X6t9cH7hi-wC4',
//   email: 'emily.johnson@x.dummyjson.com',
//   firstName: 'Emily',
//   gender: 'female',
//   id: 1,
//   image: 'https://dummyjson.com/icon/emilys/128',
//   lastName: 'Johnson',
//   refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NDg5NzY5NzksImV4cCI6MTc1MTU2ODk3OX0._G7tMyCp2Ne__LgP_CNncgcRO_imE64knz3uHga20pw',
//   username: 'emilys'
// } (auth.types.ts)

// 3. На сторінці /auth/user-dashboard (UserDashboardComponent)
// - Oтримати дані авторизованого користувача з authService (підключити)
// - Вивести у верстку інформацію про користувача (firstName, email, image, lastName, username)

// https://dummyjson.com/users - інші користувачі (інші аккаунти)