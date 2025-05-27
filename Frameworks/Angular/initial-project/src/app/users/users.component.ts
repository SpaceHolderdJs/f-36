import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  constructor(public usersService: UsersService) {
    this.usersService.getUsers();
  }
}
