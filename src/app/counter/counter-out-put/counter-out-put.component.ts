import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { CounterState } from '../state/counter.state';
import { getCounter } from '../state/couter-selectors';

@Component({
  selector: 'app-counter-out-put',
  templateUrl: './counter-out-put.component.html',
  styleUrls: ['./counter-out-put.component.css'],
})
export class CounterOutPutComponent implements OnInit, OnDestroy {
  counter: number = 0;
  counter$!: Observable<number>;
  // counterSub!: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.counterSub = this.store.select(getCounter).subscribe((counter) => {
    //   console.log('counter observable called ');
    //   this.counter = counter;
    // });

    this.counter$ = this.store.select(getCounter);
  }

  ngOnDestroy(): void {
    // if (this.counterSub) {
    //   this.counterSub.unsubscribe();
  }
}
