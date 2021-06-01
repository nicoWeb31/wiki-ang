import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeText, customIncrement } from '../state/counter.action';
import { CounterState } from '../state/counter.state';
import { getText } from '../state/couter-selectors';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css'],
})
export class CounterInputComponent implements OnInit {
  value!: number;
  text!: string;
  newText!: string;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.store.select(getText).subscribe((text) => {

      console.log('text observable called ')
      this.text = text;
    });
  }

  onHandleCustomIncrement() {
    console.log(this.value);
    this.store.dispatch(customIncrement({ value: this.value }));
  }

  onChangeText() {
    this.store.dispatch(changeText({ newText: this.newText }));
  }
}