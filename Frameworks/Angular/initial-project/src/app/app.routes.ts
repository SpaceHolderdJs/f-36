import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { StatusComponent } from './status/status.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'status', component: StatusComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailsComponent },
];
