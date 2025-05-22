import { Component } from '@angular/core';

// mutable

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter: number = 0;

  highCountValue: number = 10;
  lowCountValue: number = -1;

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}
