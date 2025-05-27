import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users/users.service';
import { UserType } from '../users/users.types';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  id: string | null = null;
  user: UserType | null = null;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.usersService.getUserById(this.id).subscribe((response) => {
        this.user = response;
      });
    }
  }
}
