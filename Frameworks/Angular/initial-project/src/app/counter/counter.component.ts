import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  imports: [],
  // Will use separate instance of CounterService for any of Counter component
  providers: [CounterService],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent implements OnInit, DoCheck, OnChanges, OnDestroy {
  constructor(public counterService: CounterService) {}

  @Input() initialCounter?: number = 0;

  ngOnInit() {
    console.log('First render');

    const lsCounter = localStorage.getItem('counter');

    if (lsCounter) {
      this.counterService.counter = +lsCounter;
    }
  }

  ngDoCheck() {
    console.log('Do check is running!', this.counterService.counter);
    localStorage.setItem('counter', this.counterService.counter.toString());
  }

  // TODO: Pass @Input Data to show the difference
  ngOnChanges(changes: SimpleChanges) {
    console.log('On changes is running!', changes);
  }

  ngOnDestroy() {
    console.log('On destroy is running!');
  }

}

// Завдання:
// Реалізувати окрему сторінку Photos (/photos) (ng g c photos) - підключити до роутера
// Додати photos.service.ts (ng g s ./photos/photos)
// У сервісі створити метод getPhotos (https://jsonplaceholder.typicode.com/photos)
// Додати тип для фото
// При виведенні фото на сторінку використати ngOnInit для їх отримання 
// Сторінка має вивести фотографії 