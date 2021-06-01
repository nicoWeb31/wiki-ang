import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {

  value! : number;

  constructor(
    private store : Store<{counter : CounterState}>,
  ) { }

  ngOnInit(): void {
  }

  onHandleCustomIncrement(){
    console.log(this.value);
    this.store.dispatch(customIncrement({value : this.value}));

  }

}
