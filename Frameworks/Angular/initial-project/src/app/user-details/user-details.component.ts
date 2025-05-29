import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users/users.service';
import { UserType } from '../users/users.types';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  id: string | null = null;
  user: UserType | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.usersService.getUserById(this.id).subscribe((response) => {
        this.user = response;
      });
    }
  }

  back() {
    this.router.navigate(['/users']);
    // window.history.back();
  }
}
