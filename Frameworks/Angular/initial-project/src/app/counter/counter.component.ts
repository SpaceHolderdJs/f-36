import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  imports: [],
  // Will use separate instance of CounterService for any of Counter component
  providers: [CounterService],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  constructor(public counterService: CounterService) {}
}
