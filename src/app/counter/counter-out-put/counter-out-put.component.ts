import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-out-put',
  templateUrl: './counter-out-put.component.html',
  styleUrls: ['./counter-out-put.component.css'],
})
export class CounterOutPutComponent implements OnInit, OnDestroy {
  // counter: number = 0;
  counter$!: Observable<{ counter: number }>;
  counterSub!: Subscription;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    // this.counterSub = this.store.select('counter').subscribe(
    //   (data) => (this.counter = data.counter)
    // );

    this.counter$ = this.store.select('counter');
  }

  ngOnDestroy(): void {
    // if (this.counterSub) {
    //   this.counterSub.unsubscribe();
    // }
  }
}
