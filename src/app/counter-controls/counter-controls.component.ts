import { Component, inject } from '@angular/core';
import { decrement, increment } from '../store/counter.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  // constructor(private store: Store) {}
  private store = inject(Store);

  increment() {
    this.store.dispatch(increment({ value: 1 }));
  }

  decrement() {
    this.store.dispatch(decrement({ value: 1 }));
  }
}
