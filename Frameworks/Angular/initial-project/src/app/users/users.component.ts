import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit, OnDestroy {
  constructor(public usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers();
  }

  ngOnDestroy() {
    if (this.usersService.users.length) {
      this.usersService.saveUsersToLS(this.usersService.users);
    }
  }

  onDelete(id: string) {
    this.usersService
      .deleteUserById(id)
      .subscribe(() => alert(`The user with id: ${id} has been deleted`));
  }
}
